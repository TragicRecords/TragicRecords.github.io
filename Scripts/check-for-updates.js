$(document).ready(function () {
  checkForActiveEvent();
  checkForRecentNews();
});

function checkForActiveEvent() {
  var isEventActive = true;

  if (isEventActive) {
    alert("There is an upcoming event! Check it out on the Events page.");
  }
}

function checkForRecentNews() {
  var isRecentNews = false;

  if (isRecentNews) {
    alert("Recent news has been posted! Check it out on the News page.");
  }
}
