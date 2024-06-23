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

  $("#cs2").on({
    mouseenter: function(){
        $("#cs1").animate({height: "120%"});
    },
    mouseleave: function(){
        $("#cs1").animate({height: "100%"});
    },
  });

  $("#cs4").on({
    mouseenter: function(){
        $("#cs3").animate({height: "120%"});
    },
    mouseleave: function(){
        $("#cs3").animate({height: "100%"});
    },
  });

  $("#cs6").on({
    mouseenter: function(){
        $("#cs5").animate({height: "120%"});
    },
    mouseleave: function(){
        $("#cs5").animate({height: "100%"});
    },
  });

  $("#about").hover(function(){
    $("#cPs").fadeIn();
    $("#uXr").fadeIn("slow");
    $("#vC").fadeIn(3000);
  });


  $("#fSmol").click(function(){
    var self = $("p.adjFs").parent();
    self.toggleClass("biggerFont");
  });

  $("#fBright").click(function(){
    var self = $("p.adjFs").parent();
    self.toggleClass("brighterFont");
  });