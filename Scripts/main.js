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

  // Visit counter script
  if (localStorage.getItem('visitCount')) {
    // Increment the count by 1
    localStorage.setItem('visitCount', parseInt(localStorage.getItem('visitCount')) + 1);
  } else {
    // If the key doesn't exist, set it to 1 (first visit)
    localStorage.setItem('visitCount', 1);
  }

  // Get the visit count from localStorage
  const visitCount = localStorage.getItem('visitCount');

  // Display the visit count in the HTML element with the id 'visit-counter'
  $('#visit-counter').text(`This page has been visited ${visitCount} times.`);
});
