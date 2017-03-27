$( document ).ready(function() {
  $(".dropdown-button").dropdown();
  $(".button-collapse").sideNav({
    menuWidth: 240, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true
  });
  $('.collapsible').collapsible();
  $('.parallax').parallax();
});
