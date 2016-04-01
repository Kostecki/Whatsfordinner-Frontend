/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

$(document).ready(function() {
  if ($("body").attr("data-page") === "detail") {
    $('.navigation').addClass('fixed');
  } else {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 100) {
        $('.navigation').addClass('fixed');
      }
      if ($(window).scrollTop() < 101) {
        $('.navigation').removeClass('fixed');
      }
    });
  }
});

$(".ma-print").click(function() {
  alert("Print? What are you, are dinosaur?");
});

//"Favourited"
$(".favourite").click(function() {
  if ($(this).find("p").html() === "Favourite") {
    $(this).find("p").html("Favourited");
    $(this).find("i").html("favorite");
  } else {
    $(this).find("p").html("Favourite");
    $(this).find("i").html("favorite_border");
  }
});

//Nice smooth scroll https://css-tricks.com/snippets/jquery/smooth-scrolling/ TODO: Probably need to understand this.
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
