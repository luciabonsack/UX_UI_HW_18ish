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

  $(".eyeAni").click(function(){
    $("#cPs").fadeIn();
    $("#uXr").fadeIn("slow");
    $("#vC").fadeIn(3000);
  });