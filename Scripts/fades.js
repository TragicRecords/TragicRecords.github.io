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
function fadeInOnScroll1() {
  var element = document.querySelector(".fade-on-scroll-1");
  if (isScrolledIntoView(element)) {
    element.style.opacity = 1;
  }
}

function fadeInOnScroll2() {
  var element = document.querySelector(".fade-on-scroll-2");
  if (isScrolledIntoView(element)) {
    element.style.opacity = 1;
  }
}

function fadeInOnScroll3() {
  var element = document.querySelector(".fade-on-scroll-3");
  if (isScrolledIntoView(element)) {
    element.style.opacity = 1;
  }
}

function fadeInOnScroll4() {
  var element = document.querySelector(".fade-on-scroll-4");
  if (isScrolledIntoView(element)) {
    element.style.opacity = 1;
  }
}

function fadeInOnScroll5() {
  var element = document.querySelector(".fade-on-scroll-5");
  if (isScrolledIntoView(element)) {
    element.style.opacity = 1;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  fadeInOnLoad(); // Call the function for page load transitions
});

window.addEventListener("scroll", function () {
  fadeInOnScroll1();
});

window.addEventListener("scroll", function () {
  fadeInOnScroll2();
});

window.addEventListener("scroll", function () {
  fadeInOnScroll3();
});

window.addEventListener("scroll", function () {
  fadeInOnScroll4();
});

window.addEventListener("scroll", function () {
  fadeInOnScroll5();
});
