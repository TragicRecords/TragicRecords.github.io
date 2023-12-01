document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptCookiesBtn = document.getElementById("accept-cookies");
  const rejectCookiesBtn = document.getElementById("reject-cookies");

  // Check if user has already accepted cookies
  if (localStorage.getItem("cookiesAccepted") !== "true") {
    cookieBanner.style.display = "block";
  }

  // Event listener for accept cookies button
  acceptCookiesBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });

  // Event listener for reject cookies button
  rejectCookiesBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "false");
    cookieBanner.style.display = "none";
  });
});
