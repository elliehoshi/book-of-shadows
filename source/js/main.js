$(document).ready(function(){
  $('html').click(function() {
  //Hide the menus if visible
    if($(".black").css("display", "none")){
      $(".home-menu").slideUp("slow");
      $(".black").css("display", "block")  
    }
  });

  $(".menu-icon").click(function(event){
    event.stopPropagation();
    $(".home-menu").slideToggle("slow", function(){
      $(".black").fadeToggle("slow", "linear");
    });
  });


  $(".artist-name:eq(0)").hover(
    function(){
      $(".gradient").removeClass("gradient-animate");
      $(".gradient").addClass("artist-1");
    }, function(){
      $(".gradient").removeClass("artist-1");
      $(".gradient").addClass("gradient-animate");
    }
  );

  $(".artist-name:eq(1)").hover(
    function(){
      $(".gradient").removeClass("gradient-animate");
      $(".gradient").addClass("artist-2");
    }, function(){
      $(".gradient").removeClass("artist-2");
      $(".gradient").addClass("gradient-animate");
    }
  );

  $(".artist-name:eq(2)").hover(
    function(){
      $(".gradient").removeClass("gradient-animate");
      $(".gradient").addClass("artist-3");
    }, function(){
      $(".gradient").removeClass("artist-3");
      $(".gradient").addClass("gradient-animate");
    }
  );
});

// var homeBgHover = function(){
//   var i,
//   artistName = document.getElementsByClassName("artist-name");

//   artistName[0].hover(
//       function(){
//         $(".gradient").addClass("'artist-1");
//       }, function(){
//         $(".gradient").removeClass("'artist-1");
//       }
//     )

//   console.log(artistName.length);
//   for(i=0;i<artistName.length-1;i++){
//     console.log(i);
//     artistName[i].hover(
//       function(){
//         $(".gradient").addClass("'artist-'+[i]");
//       }, function(){
//         $(".gradient").removeClass("'artist-'+[i]");
//       }
//     )
//   }
// }