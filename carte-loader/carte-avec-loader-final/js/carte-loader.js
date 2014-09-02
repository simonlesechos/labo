$(document).ready(function(){

var start = new Date();
var maxTime = 3600;
var timeoutVal = Math.floor(maxTime/100);
console.log(timeoutVal);
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
        

        tl.to($('.maj'), 0.2, {opacity:0});

        tl.to($('.waitcomplete'), 1.5, {scale: 1, opacity:1, ease: Bounce.easeOut},3.5);
        tl.to($('.waitcomplete'), 0.5, {scale: 4, opacity: 0, ease:Quad.easeOut},5);

        tl.to($('.y2015'), 1.2,{scale:7, opacity: 0, ease:Power2.easeOut},4.9)

        //Face 2 :
        tl.to($('.couleur-bas'), 0.7, {bottom:0, ease: Strong.easeOut},7);
        tl.to($('.perso-cabinet'), 0.7, {top: 0, ease: Strong.easeOut},7.2);

        //Face 3 :
        tl.to($('.carte-back'), 0.7, {top:0, ease: Quad.easeOut},12);
        tl.staggerFrom($('.fdf'), 0.5, {scale: 0, opacity: 0, rotation: -90, ease:Quad.easeOut, delay:0.5}) 
        .staggerTo($('.fdf'), 0.5, { opacity: 1, scale:1, rotation : 0}),

        tl.staggerFrom($('.fdf-desc'), 0.4, {scale: 0, opacity: 0, ease: Quad.easeOut}) 
        .staggerTo($('.fdf-desc'), 0.4, { opacity: 1, scale:1, ease: Quad.easeOut});



}

        


}



});
