// alert("Hey");



// Sounds

let lightning = new Audio("Sounds/LightningClip.mp3");
// var growl = new Audio("sounds/growl1.mp3");

// var grit = new Audio("sounds/grit_bass.mp3");

// var metal = new Audio("sounds/low_metal.mp3");

// var supersaw = new Audio("sounds/supersaw.mp3");
// // sampler

// var numberOfSynthButtons = document.querySelectorAll(".synth").length;

// for (var i = 0; i < numberOfSynthButtons; i++) {

//   document.querySelectorAll(".synth")[i].addEventListener("click", function() {

//     var buttonInnerHTML = this.innerHTML;

//     makeSound(buttonInnerHTML);

//     buttonAnimation(buttonInnerHTML);

//   });

// }



// Prevent key window scroll
// window.addEventListener("keydown", function(e) {
//   if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
//       e.preventDefault();
//   }
// }, false);


let top_of_char = $(".char-pic").offset().top;
let bottom_of_char = $(".char-pic").offset().top + $(".char-pic").outerHeight();
let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
let top_of_screen = $(window).scrollTop();



//Get Viewport size
let height = $(window).height();
let width = $(window).width();
console.log(height, width);

// Move character image

$(document).ready(function(){

$(document).keydown(function(e){

  switch (e.which){

  case 37:    //left arrow key
  if($(".char-pic").position().left>((width*-1)+200)){
      $(".char-pic").finish().animate({
          left: "-=50"
      });
      // $(".char-pic").attr("src","./Images/doom-left.png");
      $(".char-pic").attr("src","./Images/Zenitsu-Gif-Left.gif");
    }
      break;
    
  case 38:    //up arrow key
      $(".char-pic").finish().animate({
          top: "-=50"
      });
      break;
  case 39:    //right arrow key
  if($(".char-pic").position().left<(width - 200)){
      $(".char-pic").finish().animate({
          left: "+=50"
      });
      // $(".char-pic").attr("src","./Images/doom-right.png");
      $(".char-pic").attr("src","./Images/Zenitsu-Gif-Right.gif");
    }
      break;
  case 40:    //bottom arrow key
      $(".char-pic").finish().animate({
          top: "+=50"
      });
      break;
  case 32:    //Space Bar
      $(".char-pic").attr("src","./Images/thunder1.gif");
      setTimeout(function() {
        $(".char-pic").attr("src","./Images/Zenitsu-Gif-Mid.png");
        lightning.play();
      }, 550);
      
      

      break;
  }
  

  if ((bottom_of_screen > top_of_char) && (top_of_screen < bottom_of_char)){
    console.log("In bounds")
  } else {
    console.log("Out of Bounds");
  }
});

});




function makeSound(key) {

  switch (key) {
    case "w":
      var g_pluck = new Audio("sounds/g_pluck.mp3");
      g_pluck.play();
      break;

    case "a":
      var grit_bass = new Audio("sounds/grit_bass.mp3");
      grit_bass.play();
      break;

    case "s":
      var growl1 = new Audio('sounds/growl1.mp3');
      growl1.play();
      break;

    case "d":
      var heavy_wub = new Audio('sounds/heavy_wub.mp3');
      heavy_wub.play();
      break;

    case "j":
      var low_metal = new Audio('sounds/low_metal.mp3');
      low_metal.play();
      break;

    case "k":
      var ryde_verb = new Audio('sounds/ryde_verb.mp3');
      ryde_verb.play();
      break;

    case "l":
      var supersaw = new Audio('sounds/supersaw.mp3');
      supersaw.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 200);

}

// Navbar

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
            $('.navIcon').attr("src", "Images/icon_black.png")
        } else {
            $('.navbar').removeClass('active');
            $('.navIcon').attr("src", "Images/icon1.png");
        }
    });
});

