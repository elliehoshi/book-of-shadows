var animateInSvgLogo = function(){
  var path = document.querySelector('#logo');
  var length = path.getTotalLength();
  // Clear any previous transition
  path.style.transition = path.style.WebkitTransition =
    'none';
  // Set up the starting positions
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  // Trigger a layout so styles are calculated & the browser
  // picks up the starting position before animating
  path.getBoundingClientRect();
  // Define our transition
  path.style.transition = path.style.WebkitTransition =
    'stroke-dashoffset 2.5s ease-in-out';
  // Go!
  path.style.strokeDashoffset = '0'; 
};

var animateOutSvgLogo = function(){
  var path = document.querySelector('#logo');
  var length = path.getTotalLength();
  // Clear any previous transition
  path.style.transition = path.style.WebkitTransition =
    'none';
  // Set up the starting positions
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = '0';
  // Trigger a layout so styles are calculated & the browser
  // picks up the starting position before animating
  path.getBoundingClientRect();
  // Define our transition
  path.style.transition = path.style.WebkitTransition =
    'stroke-dashoffset 2.5s ease-in-out';
  // Go!
  path.style.strokeDashoffset = length; 
};

$(document).ready(function(){
  $( ".bs-logo" ).hover(
    function() {
      animateOutSvgLogo();
    }, function() {
      animateInSvgLogo();
    }
  );
  
  $(function () {
    $('nav li ul').hide();
    $('nav li').hover(function () {
      $('ul', this).stop().fadeToggle(200);
    });
  });

  $(".artist-symbol:eq(0)").hover(
    function(){
      $(".gradient").removeClass("gradient-animate");
      $(".gradient").addClass("artist-1");
    }, function(){
      $(".gradient").removeClass("artist-1");
      $(".gradient").addClass("gradient-animate");
    }
  );

  $(".artist-symbol:eq(1)").hover(
    function(){
      $(".gradient").removeClass("gradient-animate");
      $(".gradient").addClass("artist-2");
    }, function(){
      $(".gradient").removeClass("artist-2");
      $(".gradient").addClass("gradient-animate");
    }
  );

  $(".artist-symbol:eq(2)").hover(
    function(){
      $(".gradient").removeClass("gradient-animate");
      $(".gradient").addClass("artist-3");
    }, function(){
      $(".gradient").removeClass("artist-3");
      $(".gradient").addClass("gradient-animate");
    }
  );

  animateInSvgLogo();
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