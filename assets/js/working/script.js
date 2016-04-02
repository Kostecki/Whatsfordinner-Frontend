/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

$(document).ready(function() {
  if ($("body").attr("data-page") === "detail" || "popular") {
    $('.navigation').addClass('fixed');
    console.log($("body").attr("data-page"));
  } else {
    $(window).scroll(function () {
      console.log("No so Special");
      if ($(window).scrollTop() > 100) {
        $('.navigation').addClass('fixed');
      }
      if ($(window).scrollTop() < 101) {
        $('.navigation').removeClass('fixed');
      }
    });
  }
});

$(".extra-day").click(function() {
  var img_array = ["chorizo-squash.jpg", "bolognese.jpg", "burger.jpg", "chicken.jpg", "hotdog.jpg", "asian-thing.jpg", "paella.jpg", "panini.jpg", "pie.jpg", "pizza.jpg", "steak.jpg", "stew.jpg", "toast.jpg", "salmon.jpg", "vietnamese.jpg", "waffle.jpg"];

  var name_array = ["Chorizo and Squash", "Pasta Alla Bolognese", "Fancy Gourmet Burger", "Delicious Fried Chicken", "Total Hipster Hot Dog", "Something Asian Looking", "Genuine Spanish Paella", "Tasty Hot Panini", "Some Kind of Pie", "Awesome Homemade Pizza", "Steak and Veggies", "Filling Meat Stew", "Literally Just Toast", "Salmon on Weird Bread", "Vietnamese, maybe?", "Waffles for dinner"];

  var rand = Math.floor(Math.random()*img_array.length);

  var item = img_array[rand];
  var name = name_array[rand];

  $(".extra-day").before('<div class="col-md-6 recipe"><a href="detail.html"><div class="col-md-6 recipe-img" style="background-image: url(assets/img/food/'+item+')"></div><div class="col-md-6 recipe-right"><div class="recipe-title">'+name+'</div><hr><div class="recipe-buttons"><div class="undo-new"><i class="material-icons">undo</i>Undo New</div><div class="favourite"><i class="material-icons">favorite_border</i><p>Favourite</p></div><div class="new-recipe"><i class="material-icons">redo</i>New Recipe</div></div></div></a></div>');
});

//lulz
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
  return false;
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
