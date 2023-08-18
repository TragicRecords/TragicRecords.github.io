document.addEventListener("DOMContentLoaded", function () {
  const confirmationMessage = document.getElementById("confirmationMessage");
  const form = document.querySelector(".contact form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Simulate form submission and show the confirmation message
    // In a real implementation, you would submit the form data to the server here
    // and then show the confirmation message after a successful response.

    form.style.display = "none";
    confirmationMessage.style.display = "block";
  });
});
