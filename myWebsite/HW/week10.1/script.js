$(document).ready(function(){
  //load music
  var music = document.createElement("audio");
    music.src = "1.ogg";
    music.volume = 0.9;
    music.autoPlay = false;
    music.preLoad = true;
  //click B1 for sound
  $("#B1").click(function() {
    music.play();
    $("p").text("It's a bunny");
    });
  //hover text to change color
  $("p").hover(function() {
    $("p").css("color","rgb(176,155,220)");
  },
  function(){
    $("p").css("color","rgb(248,242,60)");
  });
  //hover B1 to change backrgound color
  $("#B1").hover(function(){
    $("body").css("background-color","rgb(238,89,85)");
  },
  function(){
    $("body").css("background-color","white");
  }
);

  //hover B2 for filter
  $("#B2").css("opacity", 0.5);
  $("#B2").hover(function(){
    $("#B2").animate({opacity: 1.0}, 500);
  }, function(){
    $("#B2").animate({opacity: 0.5}, 500);
  });

})
