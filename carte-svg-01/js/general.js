$(document).ready(function(){

var tl = new TimelineMax();
tl.pause();  



  
tl.staggerTo($('.ville'), 1.6, {rotation: 360, ease:Quad.easeOut});
tl.staggerTo($('svg #pays_batiments'), 2, {rotation :360, ease: Quad.easeOut});



  
  
$('.button').click(function(){
 
  tl.restart();

 
    
});


});