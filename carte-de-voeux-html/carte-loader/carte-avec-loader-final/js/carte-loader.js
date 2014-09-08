$(document).ready(function(){

var bgcolor =  $.totalStorage('carte-loader-bg');
var textcolor = $.totalStorage('carte-loader-text');
  
 changecouleur(bgcolor, textcolor);

function resizetext(){
var cartewidth = $('.carte-groupe').width();

$('.wait').css('font-size', cartewidth/22.6 + "px");
$('.waitcomplete').css('font-size', cartewidth/17 + "px");
$('.maj').css('font-size', cartewidth/22.6 +"px");
}
var start = new Date();
var maxTime = 3600;
var timeoutVal = Math.floor(maxTime/100);

resizetext();

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
       
        tl.to($('.y2015-3'),0.7,{opacity:1, top: '10%', ease: Quad.easeOut}, 10);
        tl.staggerFrom($('.fdf'), 0.2, {scale: 0, opacity: 0, rotation: -90, ease:Quad.easeOut}) 
        .staggerTo($('.fdf'), 0.2, { opacity: 1, scale:1, rotation : 0}, 10.5);

        tl.staggerFrom($('.fdf-desc'), 0.4, {scale: 1, opacity: 0, ease: Quad.easeOut}) 
        .staggerTo($('.fdf-desc'), 0.4, { opacity: 1, scale:1, ease: Quad.easeOut},11);

        //face 4 :

        tl.to($('.couleur-bas2'), 0.7, {bottom:0, ease: Strong.easeOut},17);
        tl.to($('.perso-cabinet2'), 0.7, {top: 0, ease: Strong.easeOut},17.1);
        tl.to($('.logo-cabinet'),0.7,{opacity:1, ease: Quad.easeOut}, 17.2);
        tl.to($('.telechargement2'), 0.7,{left: "5%", opacity: 1, ease:Power2.easeOut},17.2);
        

}
  
}

//menu de choix des couleurs

$('.colorspot').click(function(){
  
  var bgcolor = $(this).data('bg');
  var textcolor = $(this).data('color');

  $.totalStorage('carte-loader-bg', bgcolor);
  $.totalStorage('carte-loader-text', textcolor);

  changecouleur(bgcolor, textcolor);

  
});


function changecouleur(bgcolor, textcolor){
  
  $('.colorspot').not(this).removeClass('active');
  $(this).addClass('active');
  $('.carte, .carte-back, .couleur-bas, .couleur-bas2').css('background', bgcolor);
  $('.y2015, .y2015-bas, .waitcomplete, .wait, .fdf-desc, .y2015-3').css('color', textcolor);

}

//Troisième couleur pour la version verte de la carte :

$('.col6').click(function(){
   var textcolor2 = $(this).data('color2');
   $('#loader-text, .maj, .fdf-desc').css('color', textcolor2);

});


//bouton replay

$('.colreplay').click(function(){
  location.reload(false);

});

//fermer le menu des couleurs

$('.colclose').click(function(){
  $('.controls').fadeOut('fast');
});



$(window).resize(function(){
  resizetext();
});

});
