<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the form_name field is set to "contact" (to prevent spam)
    if (isset($_POST["form_name"]) && $_POST["form_name"] === "contact") {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        // Set your email address where you want to receive the form submissions
        $to = "jordanleich@gmail.com";
        $subject = "New Contact Form Submission from $name";
        $headers = "From: $email";

        // Construct the email message
        $email_message = "Name: $name\n";
        $email_message .= "Email: $email\n\n";
        $email_message .= "Message:\n$message";

        // Send the email
        $success = mail($to, $subject, $email_message, $headers);

        if ($success) {
            // Return a response indicating success
            echo "success";
        } else {
            // Return a response indicating failure
            echo "error";
        }
    } else {
        // Return a response indicating form_name mismatch (possible spam)
        echo "form_name_mismatch";
    }
} else {
    // Return a response for other request methods
    echo "method_not_allowed";
}
?>
