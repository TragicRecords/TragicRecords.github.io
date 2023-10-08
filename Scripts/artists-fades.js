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

function fadeInOnScrollCatalog() {
  var element = document.querySelector(".fade-on-scroll-catalog");
  if (isScrolledIntoView(element)) {
    element.style.opacity = 1;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  fadeInOnLoad(); // Call the function for page load transitions
});

window.addEventListener("scroll", function () {
  fadeInOnScrollFeatured(); // Call the function for scroll transitions
});

window.addEventListener("scroll", function () {
  fadeInOnScrollCatalog();
});
