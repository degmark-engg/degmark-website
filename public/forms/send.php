<?php
/**
 * DEGMARK enquiry handler (Request a Quote, Upload Requirement, Contact).
 * - Emails the enquiry (with attachment for uploads) to the address in the server config.
 * - Writes a backup log entry and keeps uploaded files on the server.
 * - Honeypot field + simple per-IP rate limiting.
 *
 * Config lives OUTSIDE the web root, one level above public_html:
 *   degmark-config.php  (copy from server/degmark-config.example.php in the repo)
 */

$root    = dirname($_SERVER['DOCUMENT_ROOT']);
$cfgFile = $root . '/degmark-config.php';
if (!is_file($cfgFile)) { http_response_code(500); exit('Form is not configured yet.'); }
$cfg = require $cfgFile;

$dataDir = rtrim($cfg['data_dir'] ?? ($root . '/degmark-enquiries'), '/');
@mkdir($dataDir . '/uploads', 0750, true);
@mkdir($dataDir . '/ratelimit', 0750, true);

function back($msg, $code = 400) { http_response_code($code); echo '<p style="font-family:sans-serif">' . htmlspecialchars($msg) . ' <a href="javascript:history.back()">Go back</a></p>'; exit; }
function one($k) { return trim(str_replace(["\r", "\n"], ' ', (string)($_POST[$k] ?? ''))); }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') { header('Location: /'); exit; }
if (!empty($_POST['company_website'])) { header('Location: /thank-you/'); exit; } // honeypot

// Rate limit: max N submissions per IP per window.
$max = (int)($cfg['rate_max'] ?? 5); $win = (int)($cfg['rate_window'] ?? 600);
$rl = $dataDir . '/ratelimit/' . hash('sha256', $_SERVER['REMOTE_ADDR'] ?? 'x');
$hits = array_filter(is_file($rl) ? array_map('intval', file($rl)) : [], fn($t) => $t > time() - $win);
if (count($hits) >= $max) back('Too many submissions. Please try again in a few minutes.', 429);
$hits[] = time(); file_put_contents($rl, implode("\n", $hits));

$type = in_array($_POST['form_type'] ?? '', ['quote', 'upload', 'contact'], true) ? $_POST['form_type'] : 'contact';
$fields = [
  'Name' => one('name'), 'Organisation' => one('organisation'), 'Email' => one('email'), 'Phone' => one('phone'),
  'Model number(s)' => one('models'), 'Quantity' => one('quantity'), 'Tender / indent ref' => one('tender_ref'),
];
$message = trim((string)($_POST['message'] ?? ''));
$email = filter_var($fields['Email'], FILTER_VALIDATE_EMAIL);
if (!$fields['Name'] || !$email) back('Please enter your name and a valid email address.');
if ($type === 'quote' && !$fields['Model number(s)']) back('Please enter at least one model number.');

// File upload (Upload Requirement form).
$file = null;
if ($type === 'upload') {
  $f = $_FILES['document'] ?? null;
  if (!$f || $f['error'] !== UPLOAD_ERR_OK) back('Please attach your document (up to 10 MB).');
  if ($f['size'] > 10 * 1024 * 1024) back('The file is larger than 10 MB.');
  $ext = strtolower(pathinfo($f['name'], PATHINFO_EXTENSION));
  if (!in_array($ext, ['pdf', 'xlsx', 'xls', 'docx', 'doc', 'jpg', 'jpeg', 'png'], true)) back('Allowed files: PDF, Excel, Word, JPG, PNG.');
  $safe = date('Ymd-His') . '-' . bin2hex(random_bytes(4)) . '.' . $ext;
  if (!move_uploaded_file($f['tmp_name'], $dataDir . '/uploads/' . $safe)) back('Upload failed. Please email the document instead.', 500);
  $file = ['path' => $dataDir . '/uploads/' . $safe, 'name' => preg_replace('/[^\w.\- ]/', '_', $f['name']), 'stored' => $safe];
}

$labels = ['quote' => 'Quote request', 'upload' => 'Requirement upload', 'contact' => 'Contact message'];
$subject = $labels[$type] . ' from ' . $fields['Name'] . ($fields['Organisation'] ? ' (' . $fields['Organisation'] . ')' : '');
$body = '';
foreach ($fields as $k => $v) if ($v !== '') $body .= "$k: $v\n";
$body .= "\nMessage:\n" . ($message ?: '-') . "\n";
if ($file) $body .= "\nAttached file: {$file['name']} (stored as {$file['stored']})\n";
$body .= "\nSent " . date('c') . ' from IP ' . ($_SERVER['REMOTE_ADDR'] ?? '?') . "\n";

// Backup log (one JSON line per enquiry).
file_put_contents($dataDir . '/enquiries.log', json_encode(['time' => date('c'), 'type' => $type, 'fields' => $fields, 'message' => $message, 'file' => $file['stored'] ?? null]) . "\n", FILE_APPEND | LOCK_EX);

// Email (multipart when a file is attached).
$from = $cfg['from'] ?? ('noreply@' . ($_SERVER['HTTP_HOST'] ?? 'localhost'));
$headers = "From: DEGMARK Website <$from>\r\nReply-To: $email\r\nMIME-Version: 1.0\r\n";
if ($file) {
  $b = 'b' . bin2hex(random_bytes(8));
  $headers .= "Content-Type: multipart/mixed; boundary=\"$b\"";
  $mail = "--$b\r\nContent-Type: text/plain; charset=UTF-8\r\n\r\n$body\r\n--$b\r\n"
        . "Content-Type: application/octet-stream; name=\"{$file['name']}\"\r\nContent-Transfer-Encoding: base64\r\n"
        . "Content-Disposition: attachment; filename=\"{$file['name']}\"\r\n\r\n"
        . chunk_split(base64_encode(file_get_contents($file['path']))) . "--$b--";
} else {
  $headers .= 'Content-Type: text/plain; charset=UTF-8';
  $mail = $body;
}
@mail($cfg['to'], '=?UTF-8?B?' . base64_encode($subject) . '?=', $mail, $headers);

header('Location: /thank-you/');
