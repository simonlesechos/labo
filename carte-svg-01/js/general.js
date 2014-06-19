$(document).ready(function(){
$('.container').hide();
//Définition de trois timelines
var tl = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();

//Stockage d'animations supplémentaires et extérieures aux timelines dans des variables
var animCercle = TweenMax.from($('.cercle-centre'),0.5,{opacity: 0});
var elementTourne = TweenMax.from($('.elements-decor'), 5, {rotation: -360, ease:Quad.easeOut});

//Toutes les timelines en pause
tl.pause();  
animCercle.pause();
elementTourne.pause();
tl2.pause();
tl3.pause();

//Définition des échelles de temps
tl2.timeScale(1);
tl3.timeScale(1.2);
tl.timeScale(1.5);


  //Animations

  //Le container apparait
  tl.from($('.container'), 0.3, {opacity: 0});	
  
  //Les nuages descendent
  tl.from($('.nuage05'), 1, {top: -400, ease: Bounce.easeOut});
  tl.from($('.nuage01'), 0.5, {top: -100, ease: Bounce.easeOut});
  tl.from($('.nuage02'), 0.7, {top: -100, ease: Bounce.easeOut});
  tl.from($('.nuage04'), 0.4, {top: -120, ease: Bounce.easeOut});
  tl.from($('.nuage03'), 0.7, {top: -120, ease: Bounce.easeOut});

  //Les éléments (avion etc.) commencent à tourner dans une timeline décalée (plus lente)
  tl2.from($('.elements-decor'), 0.5, {scale: 0, rotation: -90, opacity: 0, ease: Quad.easeOut});

  //Le texte avec '2015' apparait en rebondissant
  tl.from($('.text-cercle'), 0.7, {scale: 0, opacity: 0, ease: Bounce.easeOut});

  //La ville apparait depuis l'arrière de l'horloge avec du rebond
  tl.staggerFrom($('.ville'), 1.4, {scale: 0, opacity: 0, ease: Bounce.easeOut}) 
  	.staggerTo($('.ville'), 1.4, { opacity: 1, scale:1, ease:Quad.easeOut});

  //Le tampon/cachet 'votre comptable' apparait depuis le hors champ  
  tl.staggerTo($('.label'), 0.3, {opacity: 1, scale:0.4, ease:Bounce.easeOut});	


  //Bouton pour lancer l'animation
  $('.button').click(function(){
  
  //Le conteneur apparit en fondu rapide
  $('.container').fadeIn('fast');

  
  //Toutes les animations se relancent au click sur le bouton
  tl.restart();
  animCercle.restart();
  
  tl2.restart();
  elementTourne.restart();

  tl3.restart();
    
});

//Le bouton pour faire disparitre l'animation

//Au clic sur le bouton close (la croix)
$('.close').click(function(){

//le conteneur disparît en fondu rapidemment
$('.container').fadeOut('fast');

});


});