// Function to check if an element is in the viewport
function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0; // Element is at least partially in view
}

// Function to fade in elements when they are scrolled into view
function fadeInOnScroll() {
  document.querySelectorAll(".fade-on-scroll").forEach((element) => {
    if (isScrolledIntoView(element)) {
      element.style.opacity = 1;
      element.style.transition = "opacity 0.5s ease-in-out";
    }
  });
}

// Function to fade in elements when the page loads
function fadeInOnLoad() {
  document.querySelectorAll(".fade-in").forEach((element) => {
    element.style.opacity = 1;
    element.style.transition = "opacity 0.5s ease-in-out";
  });
}

// Run on DOM load and add a single scroll event listener
document.addEventListener("DOMContentLoaded", fadeInOnLoad);
window.addEventListener("scroll", fadeInOnScroll);
