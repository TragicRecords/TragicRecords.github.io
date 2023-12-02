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
