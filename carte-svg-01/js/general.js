$(document).ready(function(){

var tl = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();

var animCercle = TweenMax.from($('.cercle-centre'),0.5,{opacity: 0});

var elementTourne = TweenMax.from($('.elements-decor'), 5, {rotation: -360, ease:Quad.easeOut});

tl.pause();  
animCercle.pause();
elementTourne.pause();
tl2.timeScale(1);
tl3.timeScale(1.2);
tl.timeScale(1.5);

tl2.pause();
tl3.pause();
  
  tl.from($('.container'), 0.3, {opacity: 0});	

  
  tl.from($('.nuage05'), 1, {top: -400, ease: Bounce.easeOut});
  tl.from($('.nuage01'), 0.5, {top: -100, ease: Bounce.easeOut});
  tl.from($('.nuage02'), 0.7, {top: -100, ease: Bounce.easeOut});
  tl.from($('.nuage04'), 0.4, {top: -120, ease: Bounce.easeOut});
  tl.from($('.nuage03'), 0.7, {top: -120, ease: Bounce.easeOut});
  tl2.from($('.elements-decor'), 0.5, {scale: 0, rotation: -90, opacity: 0, ease: Quad.easeOut});

  tl.from($('.text-cercle'), 0.7, {scale: 0, opacity: 0, ease: Bounce.easeOut});

  tl.staggerFrom($('.ville'), 1.4, {scale: 0, opacity: 0, ease: Bounce.easeOut}) 
  	.staggerTo($('.ville'), 1.4, { opacity: 1, scale:1, ease:Quad.easeOut});

  tl.staggerTo($('.label'), 0.3, {opacity: 1, scale:0.4, ease:Bounce.easeOut});	




  
  



  
  






  
  
$('.button').click(function(){
 
  tl.restart();
  animCercle.restart();
  
 

  tl2.restart();
   elementTourne.restart();

  tl3.restart();
    
});


});