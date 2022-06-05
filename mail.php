<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
header('Content-Type: application/json');
if ($name === ''){
  print json_encode(array('message' => 'NameERR !', 'code' => 0));
  exit();
}
if ($email === ''){
  print json_encode(array('message' => 'EmailERR !', 'code' => 0));
  exit();
} else {
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
  print json_encode(array('message' => 'EmailERR !', 'code' => 0));
  exit();
  }
}
if ($subject === ''){
  print json_encode(array('message' => 'CaptchaERR !', 'code' => 0));
  exit();
}
if ($message === ''){
  print json_encode(array('message' => 'MessageERR !', 'code' => 0));
  exit();
}
$content="From: $name \nEmail: $email \nMessage: $message";
$recipient = "bodnar.marian@gmail.com";
$mailheader = "From: bodnar.marian@bmcode.sk \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
print json_encode(array('message' => 'Sent!', 'code' => 1));
exit();
?>