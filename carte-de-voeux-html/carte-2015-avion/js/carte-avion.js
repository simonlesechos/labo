function resizer(){


        $('.carte').children().each(function(){
        var elemwidth = $(this).width();
        var elemheight = $(this).height();
        var contwidth = $('.carte').width();
        var contheight = $('.carte').height();
        
        var elemPosX = $(this).position().left;
        var elemPosY = $(this).position().top;


        
        var newwidth = (elemwidth / contwidth) * 100 + "%";
        var newheight = (elemheight / contheight) * 100 + "%";
        
        var newposX = (elemPosX/contwidth) * 100 + "%";
        var newposY = (elemPosY/contheight) * 100 + "%";
         
        var classe = $(this).attr('class'); 
          
        /*$(this).css('width', newwidth);
        $(this).css('height', newheight);
        $(this).css('left', newposX);
        $(this).css('top', newposY);*/
        
        console.log(
        '.'+ classe + '{' + '\n' +  
        'top: ' + newposY + ';' + '\n' +
        'left: ' + newposX + ';' + '\n' + 
        'width: ' + newwidth + ';' + '\n' + 
        'height: ' + newheight + ';' + '\n' +
        '}'
        );

     
        }); 

}

resizer();

//Changement dynamique de la taille de police pour la face 1 :

$(window).resize(function(){
   //calculer la taille de police sur la face 1 en fonction de la largeur de la carte
          var fontsize = $('.carte').width()/17 + "px";
        $('.citation').css('font-size', fontsize);
});


///////////////////////////////////////////////////////////// DÉBUT DES ANIMATIONS


var tl = new TimelineMax({onComplete:timelineDone});
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();


var cite1 = $('.cit-1');
var cite2 = $('.cit-2');
var cite3 = $('.cit-3');

//FACE 1:


tl.to($('.carte-bg'), 20, {scale: 1.1, ease: Power2.easeOut},0);

tl.from($('.aviateur'), 1.7, {bottom: "-100%", scale:1, opacity:0, ease: Power2.easeOut},0.5);

tl.from(cite1, 1.4, {opacity:0, scale: 0.8, ease: Quad.easeOut}, 2);
tl.from(cite2, 1.4, {opacity:0, scale: 0.8, ease: Quad.easeOut}, 3);
tl.from(cite3, 1.4, {opacity:0, scale: 0.8, ease: Quad.easeOut}, 4);



tl.from( $('.st-ex'), 1.4, {opacity:0, ease: Strong.easeOut}, 5.5);

tl.from($('.votre-expert'), 1.2, {opacity:0, ease: Quad.easeOut},7);

//FACE 2 :

tl.to($('.couleur-bas'), 0.7, {bottom:0, ease: Strong.easeOut}, 12);
tl.from($('.avion'), 2, {top: "100%", ease: Elastic.easeOut}, 12.2);

tl.to($('.perso-cabinet'), 0.7, {top: 0, ease: Strong.easeOut}, 12.2);

tl.from($('.perso-cabinet h3'), 1.7, {top: "40px", opacity:0, ease: Power2.easeOut}, 12.5);
tl.from($('.perso-cabinet p'), 1.7, {top: "40px", opacity:0, ease: Power2.easeOut}, 12.6);

tl.to($('.avion'), 2, {top: "-=400%", left: "100%", rotation:"-=45", ease: Quad.easeOut}, 19);

//FACE 3 :

tl.to($('.carte-back'), 0.7, {top:0, ease: Quad.easeOut}, 22);
tl.from($('.avion2'), 2, {left: "-100%", top: "100%", ease: Power2.easeOut}, 22.1);
tl.from($('.fdf'), 1.2, {scale: 0, rotation: 120, opacity: 0, ease: Quad.easeOut}, 23.7);
tl.from($('.fdf-desc'), 2, {opacity: 0, ease: Quad.easeOut}, 24.2);

//FACE 4 :

tl.to($('.couleur-bas2'), 0.7, {bottom:0, ease: Strong.easeOut},30);
tl.to($('.perso-cabinet2'), 0.7, {top: 0, ease: Strong.easeOut},30.1);
tl.to($('.logo-cabinet'),0.7,{opacity:1, ease: Quad.easeOut}, 30.2);


tl.timeScale(1.3);//!!!remettre à 1.1!!!

tl.pause();



$(document).ready(function(){
//calculer la taille de police sur la face 1 en fonction de la largeur de la carte
var fontsize = $('.carte').width()/17 + "px";
$('.citation').css('font-size', fontsize);

tl.play();
 

});


$('.colreplay').click(function(){

  tl.restart();


});


$('.restart-btn').click(function(){

  tl.restart();


});

$('.reverse-btn').click(function(){

  tl.reverse();



});


$('.play-btn').click(function(){

  tl.play();



});

$('.pause-btn').click(function(){

  tl.pause();



});

function timelineDone() {
  setTimeout(function(){
     tl.restart();
   }, 7000);
     
}

//fermer le menu

$('.colclose').click(function(){
  $('.controls').fadeOut('fast');
});
