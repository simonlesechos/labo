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
        .staggerTo($('.y2015'), 0.7, {scale: 1, opacity: 1, ease: Bounce.easeOut},0.2);
        

        tl.to($('.maj'), 0.5, {top:"67%"});
        tl.to($('.wait'), 0.7, {opacity:0, ease: Power2.easeOut},0.5);
        tl.to($('.waitcomplete'), 1.5, {scale: 1, opacity:1, ease: Bounce.easeOut},1);
        tl.to($('.waitcomplete'), 0.5, {scale: 4, opacity: 0, ease:Quad.easeOut},3);
        tl.to($('.maj'),0.7,{opacity:0, ease: Strong.easeOut},3);
        tl.to($('.y2015'), 1.2,{scale:7, opacity: 0, ease:Power2.easeOut},3.4);

        //Face 2 :
        tl.to($('.couleur-bas'), 0.7, {bottom:0, ease: Strong.easeOut},4.5);
        tl.to($('.perso-cabinet'), 0.7, {top: 0, ease: Strong.easeOut},4.6);
        tl.to($('.y2015-bas'), 0.7,{right: "10px", opacity: 1, ease:Power2.easeOut},4.7);
        

        //Face 3 :
        tl.to($('.carte-back'), 0.5, {top:0, ease: Quad.easeOut},10);
        tl.to($('.logo-cabinet'),0.7,{opacity:1, top: '10%', ease: Quad.easeOut}, 10);
        tl.staggerFrom($('.fdf'), 0.2, {scale: 0, opacity: 0, rotation: -90, ease:Quad.easeOut}) 
        .staggerTo($('.fdf'), 0.2, { opacity: 1, scale:1, rotation : 0});

        tl.staggerFrom($('.fdf-desc'), 0.4, {scale: 1, opacity: 0, ease: Quad.easeOut}) 
        .staggerTo($('.fdf-desc'), 0.4, { opacity: 1, scale:1, ease: Quad.easeOut});

}
  
}


$('.colorspot').click(function(){
  var bgimage = $(this).data('bg');
  var bgnew = 'url(' + bgimage + ') repeat';
  $('.colorspot').not(this).removeClass('active');
  $(this).addClass('active');
  $('.carte').css('background', bgnew);
  $('.carte-back').css('background', bgnew);
  $('.couleur-bas').css('background', bgnew);
});



});
