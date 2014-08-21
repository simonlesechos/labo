var start = new Date();
var maxTime = 3600;
var timeoutVal = Math.floor(maxTime/100);
animateUpdate();


function updateProgress(percentage) {
    //$('#loading-bar').css("width", percentage + "%");
    $('#loader-text').text(percentage + "%");
     $('.spinner-bars div').addClass('animated').removeClass('animated-over');
     $('.carte').addClass('encours');
}

function animateUpdate() {

//Mise en place des éléments pour l'anim 3D
TweenLite.set(".carte-wrapper", {perspective:800});
TweenLite.set(".carte-groupe", {transformStyle:"preserve-3d",backfaceVisibility:"hidden"});
TweenLite.set(".carte2", {rotationY:-180});
TweenLite.set([".carte2", ".carte"], {backfaceVisibility:"hidden"});


    var now = new Date();
    var timeDiff = now.getTime() - start.getTime();
    var perc = Math.round((timeDiff/maxTime)*100);
    $('.spinner-bars div').removeClass('animated').addClass('animated-over');
    $('.carte').removeClass('encours');

      if (perc <= 100) {
       updateProgress(perc);
       setTimeout(animateUpdate, timeoutVal);
      
      }

      if(perc >= 100){
      	$('.spinner-bars').animate({opacity: 0}),
      	$('.y2015').delay(1000).addClass('animated');
      	
      	var tl = new TimelineMax();

      	tl.staggerFrom($('.fdf'), 0.5, {scale: 0, opacity: 0, rotation: -90, ease: Quad.easeOut, delay:0.5}) 
  			.staggerTo($('.fdf'), 0.5, { opacity: 1, scale:1, rotation : 0, ease: Quad.easeOut}),

        $('.carte-wrapper').addClass('flippable');
        
 

}


if( $('.carte-wrapper').hasClass('flippable') ){


//animation 3D

$(".carte-wrapper").hover(
  function() {
    TweenLite.to($(this).find(".carte-groupe"), 1.6, {rotationY:180, ease:Back.easeOut});
  },
  function() {
    TweenLite.to($(this).find(".carte-groupe"), 1.6, {rotationY:0, ease:Back.easeOut});  
  }
);
//Fin d'animation 3D

}

}






 
D