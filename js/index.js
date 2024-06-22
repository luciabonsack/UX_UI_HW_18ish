console.log("Your index.js file is loaded correctly!");

$("p").on({
    mouseenter: function(){
        $(this).css("color", "white");
    },
    mouseleave: function(){
      $(this).css("color", "");
    },
  });


  $(".csAni").on({
    mouseenter: function(){
        $(this).animate({height: "120%"});
    },
    mouseleave: function(){
        $(this).animate({height: "100%"});
    },
  });

  $("#about").hover(function(){
    $("#cPs").fadeIn();
    $("#uXr").fadeIn("slow");
    $("#vC").fadeIn(3000);
  });

  $("#cs1").hover(function(){
    $("#txt11").fadeIn();
  });

  $("#cs3").hover(function(){
    $("#txt22").fadeIn();
  });

  $("#cs4").hover(function(){
    $("#txt33").fadeIn();
  });