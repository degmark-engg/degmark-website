<?php
// Copy this file to the Hostinger account ONE LEVEL ABOVE public_html as "degmark-config.php"
// (e.g. /home/<user>/domains/degmarkeng.com/degmark-config.php) and fill in the values.
// It is never part of the website files, so the address is not stored in the repository.
return [
  'to'          => 'degmark@gmail.com',       // DEGMARK enquiry address (all forms)
  'from'        => 'noreply@degmarkeng.com',  // must be a mailbox/domain hosted on Hostinger
  'data_dir'    => __DIR__ . '/degmark-enquiries', // backup log + uploaded files
  'rate_max'    => 5,     // submissions allowed per IP...
  'rate_window' => 600,   // ...per this many seconds
];
