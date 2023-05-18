$(document).ready(function() {
  $("#sign-up-btn,#sign-in-btn").click(function() {
    $(".container").toggleClass("sign-up-mode");
  });
});