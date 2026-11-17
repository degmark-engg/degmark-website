<?php
// Sends website enquiries by email. Runs on the Hostinger server.
// Change $to if enquiries should go to a different address.
$to = 'info@degmarkeng.com';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') { header('Location: /contact/'); exit; }
if (!empty($_POST['website'])) { header('Location: /thanks/'); exit; } // spam trap

function clean($v) { return trim(str_replace(["\r", "\n"], ' ', strip_tags($v ?? ''))); }

$name    = clean($_POST['name'] ?? '');
$email   = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$org     = clean($_POST['org'] ?? '');
$phone   = clean($_POST['phone'] ?? '');
$type    = clean($_POST['type'] ?? '');
$brand   = clean($_POST['brand'] ?? '');
$message = trim(strip_tags($_POST['message'] ?? ''));

if (!$name || !$email || !$message) { http_response_code(400); echo 'Please fill in name, email and requirement.'; exit; }

$subject = "Website enquiry ($type) from $name";
$body = "Name: $name\nOrganisation: $org\nEmail: $email\nPhone: $phone\nType: $type\nBrand: $brand\n\n$message\n";
$headers = "From: Degmark Website <noreply@degmarkeng.com>\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

mail($to, $subject, $body, $headers);
header('Location: /thanks/');
