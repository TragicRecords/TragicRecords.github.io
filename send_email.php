<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  
  $to = "jordanleich@gmail.com";
  $subject = "New Contact Message from Tragic Records Website";
  $headers = "From: $email";
  
  mail($to, $subject, $message, $headers);
}
?>
