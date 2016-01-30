/**
 * Created by vitalii on 29.01.16.
 */

$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
});