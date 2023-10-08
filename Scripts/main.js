// main.js
// Wait for the document to be ready
$(document).ready(function () {
  // Add a click event handler to dropdown links
  $(".dropdown-link").on("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior
    var $dropdownMenu = $(this).next(".dropdown-menu");

    // Toggle the dropdown menu's visibility
    $dropdownMenu.toggleClass("active");

    // Close other open dropdowns
    $(".dropdown-menu").not($dropdownMenu).removeClass("active");
  });

  // Close dropdowns when clicking outside of them
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".dropdown").length) {
      $(".dropdown-menu").removeClass("active");
    }
  });
});

// Function to check if an element is in the viewport
function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;
  var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  return isVisible;
}

// Add a function to fade in elements when the page loads
function fadeInOnLoad() {
  var element = document.querySelector(".fade-in");
  element.style.opacity = 1;
}

// Add a function to fade in elements when scrolled into view
function fadeInOnScrollFeatured() {
  var element = document.querySelector(".fade-on-scroll-featured");
  if (isScrolledIntoView(element)) {
    element.style.opacity = 1;
  }
}

function fadeInOnScrollIdentity() {
  var element = document.querySelector(".fade-on-scroll-identity");
  if (isScrolledIntoView(element)) {
    element.style.opacity = 1;
  }
}

function fadeInOnScrollMission() {
  var element = document.querySelector(".fade-on-scroll-mission");
  if (isScrolledIntoView(element)) {
    element.style.opacity = 1;
  }
}

function fadeInOnScrollCatalog() {
  var element = document.querySelector(".fade-on-scroll-catalog");
  if (isScrolledIntoView(element)) {
    element.style.opacity = 1;
  }
}

// Wait for the document to be ready
document.addEventListener("DOMContentLoaded", function () {
  fadeInOnLoad(); // Call the function for page load transitions

  window.addEventListener("scroll", function () {
    fadeInOnScrollIdentity();

    window.addEventListener("scroll", function () {
      fadeInOnScrollMission();

      window.addEventListener("scroll", function () {
        fadeInOnScrollFeatured(); // Call the function for scroll transitions
      });

      window.addEventListener("scroll", function () {
        fadeInOnScrollCatalog();
      });
    });
  });
});
