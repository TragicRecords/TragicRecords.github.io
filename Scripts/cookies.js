document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptCookiesBtn = document.getElementById("accept-cookies");
  const rejectCookiesBtn = document.getElementById("reject-cookies");

  // Check if user has already accepted cookies
  if (getCookie("cookiesAccepted") !== "true") {
    cookieBanner.style.display = "block";
  }

  // Event listener for accept cookies button
  acceptCookiesBtn.addEventListener("click", function () {
    setCookie("cookiesAccepted", "true", 365); // Set cookie to expire in 365 days
    cookieBanner.style.display = "none";
  });

  // Event listener for reject cookies button
  rejectCookiesBtn.addEventListener("click", function () {
    setCookie("cookiesAccepted", "false", 365); // Set cookie to expire in 365 days
    cookieBanner.style.display = "none";
  });

  // Function to set a cookie
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  // Function to get the value of a cookie
  function getCookie(name) {
    const cookieValue = document.cookie.match(
      `(^|;)\\s*${name}\\s*=\\s*([^;]+)`
    );
    return cookieValue ? cookieValue.pop() : null;
  }
});
