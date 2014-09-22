var tl = new TimelineMax({onComplete:timelineDone});
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();


var $cite = $('.cit-1');
var $cite2 = $('.cit-2');


tl.to($('.carte-bg'), 20, {scale: 1.1, ease: Power2.easeOut},0);


tl.to($('.halo'), 5, {scale: 1.5}, 7.5);
tl.from( $('.cit-1'), 1.4, {opacity:0, scale: 0.8, ease: Strong.easeOut}, 4);
tl.from( $('.cit-2'), 1.4, {opacity:0, scale: 0.8, ease: Strong.easeOut}, 5.2);

tl.from( $('.stex'), 1.4, {opacity:0, scale: 0.8, ease: Strong.easeOut}, 6);



tl.to($('.couleur-bas'), 0.7, {bottom:0, ease: Strong.easeOut}, 12);
tl.to($('.perso-cabinet'), 0.7, {top: 0, ease: Strong.easeOut}, 12.2);

tl.from($('.perso-cabinet h3'), 1.7, {top: "40px", opacity:0, ease: Power2.easeOut}, 12.5);
tl.from($('.perso-cabinet p'), 1.7, {top: "40px", opacity:0, ease: Power2.easeOut}, 12.6);


tl.to($('.carte-back'), 0.7, {top:0, ease: Quad.easeOut}, 22);
tl.from($('.fdf'), 1.2, {scale: 0, rotation: 120, opacity: 0, ease: Quad.easeOut}, 23.7);
tl.from($('.fdf-desc'), 2, {opacity: 0, ease: Quad.easeOut}, 24.2);

tl.to($('.couleur-bas2'), 0.7, {bottom:0, ease: Strong.easeOut},30);
tl.to($('.perso-cabinet2'), 0.7, {top: 0, ease: Strong.easeOut},30.1);
tl.to($('.logo-cabinet'),0.7,{opacity:1, ease: Quad.easeOut}, 30.2);


tl.timeScale(1.1);//!!!remettre à 1.1!!!

tl.pause();



$(document).ready(function(){
 
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
