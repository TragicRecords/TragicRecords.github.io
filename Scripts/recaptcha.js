// recaptcha.js
function validateRecaptcha() {
  var response = grecaptcha.getResponse();

  if (response.length === 0) {
    alert("Please confirm that you are not a robot.");
    return false; // Prevent form submission
  }

  // Continue with form submission
  return true;
}
