var tl = new TimelineMax({onComplete:timelineDone});
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();


var $cite = $('.cit-1');
var $cite2 = $('.cit-2');
//$cite.html($cite.text().replace(/(\w)/g, "<span>$&</span>"));
//$cite2.html($cite2.text().replace(/(\w)/g, "<span>$&</span>"));


tl.staggerFrom($('.bras'), 1.7, {top: "100%", scale: 4, opacity:0, ease: Strong.easeOut})
.staggerTo($('.bras'), 1.7, {top: "0%", scale: 1, opacity: 1, ease: Strong.easeOut});

tl.to($('.carte-bg'), 20, {scale: 1.1, ease: Power2.easeOut},0);

tl.from($('.halo'), 8, {rotation: 120, opacity: 0, ease: Strong.easeOut}, 0.5),
tl.to($('.halo'), 5, {scale: 1.5, top: 120}, 7.5);
tl.from( $('.cit-1'), 1.4, {opacity:0, scale: 0.8, ease: Strong.easeOut}, 4);
tl.from( $('.cit-2'), 1.4, {opacity:0, scale: 0.8, ease: Strong.easeOut}, 5.2);

tl.from( $('.leonard'), 1.4, {opacity:0, scale: 0.8, ease: Strong.easeOut}, 6);



tl.from($('.big-2'), 1, {rotation: 180, opacity: 0, scale: 0, ease: Strong.easeOut}, 2);
tl.from($('.big-1'), 1, {rotation: 180, opacity: 0, scale: 0, ease: Strong.easeOut}, 2.3);
tl.from($('.big-5'), 1, {rotation: 180, opacity: 0, scale: 0, ease: Strong.easeOut}, 2.6);



tl.to($('.couleur-bas'), 0.7, {bottom:0, ease: Strong.easeOut}, 12);
tl.to($('.perso-cabinet'), 0.7, {top: 0, ease: Strong.easeOut}, 12.2);

tl.from($('.perso-cabinet h3'), 1.7, {top: "40px", opacity:0, ease: Power2.easeOut}, 12.5);
tl.from($('.perso-cabinet p'), 1.7, {top: "40px", opacity:0, ease: Power2.easeOut}, 12.6);


tl.from($('.halo2'), 5.5, {rotation: 120, opacity: 0}, 22);
tl.to($('.carte-back'), 0.7, {top:0, ease: Quad.easeOut}, 22);
tl.from($('.stars'), 8, {scale: 0, opacity:0, ease: Power2.easeOut},22);
tl.from($('.y2015-back'), 1.2, {scale: 0, opacity: 0, ease: Bounce.easeOut}, 23);
tl.from($('.y2015-back .blackstar-bas'), 0.7, {rotation: 320, scale: 0, opacity: 0, ease: Quad.easeOut}, 23.2);
tl.from($('.fdf'), 1.2, {scale: 0, rotation: 120, opacity: 0, ease: Quad.easeOut}, 23.7);
tl.from($('.fdf-desc'), 2, {opacity: 0, ease: Quad.easeOut}, 24.2);



tl.timeScale(1.1);

tl.pause();



$(document).ready(function(){
 
  tl.play();
 

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
//var tl = new TimelineMax({repeat:3, yoyo:true, repeatDelay:1, onComplete:timelineDone, onCompleteParams:["test1", "test2"]});

