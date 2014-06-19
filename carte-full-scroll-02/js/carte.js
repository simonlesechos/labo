$(document).ready(function(){
	
	//Initialisation de Scrollmagic
	var controller = new ScrollMagic();
	// build tween
	var horloge = TweenMax.from("#horloge", 0.5, {scale: 0, top: 0,});
	var ville = TweenMax.from("#ville", 0.5, {scale: 0, ease:Bounce.easeOut});
	var deco = TweenMax.from("#deco-objects", 0.5, {scale: 0, ease:Bounce.easeOut});
	var texteperso = TweenMax.from("#contenu-perso", 1, {opacity: 0, ease:Quad.easeIn});

	//Les nuages
	var nuage01 = TweenMax.from($('#nuage01'), 1.5, {top: -300, ease: Bounce.easeOut});
	var nuage02 = TweenMax.from('#nuage02', 1.8, {top: -400, ease: Bounce.easeOut});
	var nuage03 = TweenMax.from($('#nuage03'), 1.4, {top: -400, ease: Bounce.easeOut});
	var nuage04 = TweenMax.from($('#nuage04'), 1.2, {top: -400, ease: Bounce.easeOut});
	var nuage05 = TweenMax.from($('#nuage05'), 2.2, {top: -600, ease: Bounce.easeOut});

	var scene = new ScrollScene({triggerElement: "#trigger1"})
								
								.setTween(horloge)
								.addTo(controller);

	var animVille = new ScrollScene({triggerElement: "#trigger2"})
								
								.setTween(ville)
								.addTo(controller);

	var animDeco = new ScrollScene({triggerElement: "#trigger2"})
								
								.setTween(deco)
								.addTo(controller);
	

	var fixedScene = new ScrollScene({triggerElement: "#trigger3"})
								
								.setPin("#deco-objects")
								.addTo(controller);
	
	var animtext = new ScrollScene({triggerElement: "#trigger4"})
								
								.setTween(texteperso)
								.addTo(controller);

	var animNuages = new ScrollScene({triggerElement: "#trigger4"})
								
								.setTween(nuage05)
								.addTo(controller);	

	var animNuages2 = new ScrollScene({triggerElement: "#trigger4"})
								
								.setTween(nuage02)
								.addTo(controller);	

    var animNuages3 = new ScrollScene({triggerElement: "#trigger4"})
								
								.setTween(nuage01)
								.addTo(controller); 

	var animNuages4 = new ScrollScene({triggerElement: "#trigger4"})
								
								.setTween(nuage03)
								.addTo(controller);	


	var animNuages5 = new ScrollScene({triggerElement: "#trigger4"})
								
								.setTween(nuage04)
								.addTo(controller);	

    var fixedtext = new ScrollScene({triggerElement: "#trigger5"})
								
								.setPin("#contenu-perso")
								.addTo(controller);

							

});