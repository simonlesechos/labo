var start = new Date();
var maxTime = 3600;
var timeoutVal = Math.floor(maxTime/100);
animateUpdate();


function updateProgress(percentage) {
    $('#loader-text').text(percentage + "%");
    $('.spinner-bars div').addClass('animated').removeClass('animated-over');
    $('.carte').addClass('encours');
}

function animateUpdate() {

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
        var tl = new TimelineMax();

      	$('.spinner-bars').animate({opacity: 0});
      	tl.staggerFrom($('.y2015'), 0.2, {scale: 0, opacity: 0, ease: Bounce.easeOut})
        .staggerTo($('.y2015'), 0.7, {scale: 1, opacity: 1, ease: Bounce.easeOut});
        

        tl.to($('.maj'), 0.4, {opacity:0}),

        tl.from($('.waitcomplete'), 0.5, {scale: 1.2, ease: Bounce.easeOut})
        tl.to($('.waitcomplete'), 0.5, {scale: 0, opacity: 0, top:"100%", ease:Bounce.easeOut}),

        tl.staggerFrom($('.fdf'), 0.5, {scale: 0, opacity: 0, rotation: -90, ease:Quad.easeOut, delay:0.5}) 
        .staggerTo($('.fdf'), 0.5, { opacity: 1, scale:1, rotation : 0}),

        tl.staggerFrom($('.fdf-desc'), 0.4, {scale: 0, opacity: 0, ease: Quad.easeOut}) 
        .staggerTo($('.fdf-desc'), 0.4, { opacity: 1, scale:1, ease: Quad.easeOut}),



        $('.carte-wrapper').addClass('flippable');


 var  cabinetbox = TweenMax.to($('.perso-cabinet .perso1'), 0.7, {left:0, ease: Power2.easeInOut, paused: true});

 var  bascarte = TweenMax.to($('.couleur-bas'),1, {left:0, ease: Power2.easeInOut, paused: true});
 var  arrows = TweenMax.fromTo($('.right-arrow'), 0.2, {opacity:0, display: "none"}, {opacity:1, display: "block"});
 
 var  arrows2 = TweenMax.fromTo($('.left-arrow'), 0.2, {opacity:0, display: "none"}, {opacity:1, display: "block"});

 arrows2.pause();
 arrows.play();

if( $('.carte-wrapper').hasClass('flippable') ){

$('.right-arrow').click(function(){

 cabinetbox.restart();
 bascarte.restart();
 arrows2.restart();
 arrows.reverse();

});

$('.left-arrow').click(function(){

 cabinetbox.reverse();
 bascarte.reverse();
 arrows2.reverse();
 arrows.restart();



});





}

        


}




}


