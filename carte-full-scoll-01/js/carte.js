$(document).ready(function(){
	
	//Initialisation de Scrollmagic
	var controller = new ScrollMagic();


	

	var tl = new TimelineMax();

	
	var nuage01 = TweenMax.from($('.nuage01'), 1.5, {top: -300, paused:true, ease: Bounce.easeOut});
	var nuage02 = TweenMax.from($('.nuage02'), 1.8, {top: -400, paused:true, ease: Bounce.easeOut});
	var nuage03 = TweenMax.from($('.nuage03'), 1.4, {top: -400, paused:true, ease: Bounce.easeOut});
	var nuage04 = TweenMax.from($('.nuage04'), 1.2, {top: -400, paused:true, ease: Bounce.easeOut});
	var nuage05 = TweenMax.from($('.nuage05'), 2.2, {top: -600, paused:true, ease: Bounce.easeOut});
	var scrollButton = TweenMax.from($('#title'), 3, {top: -400, ease: Quad.easeOut});
	



	var tween = TweenMax.from("#animate1", 0.5, {opacity: 0, scale: 0});
	var tween2 = TweenMax.from("#animate2", 0.5, {opacity: 0, scale: 0});
	var tween3 = TweenMax.from(".ville", 0.5, {opacity: 0, scale: 0});
	// build scene

	var sceneNuages = new ScrollScene({triggerElement: "#trigger0"})
						.setPin('.nuage-group')
						.addTo(controller);


	var scene = new ScrollScene({triggerElement: "#trigger1"})
						.setTween(tween)
						.addTo(controller);

	var scene2 = new ScrollScene({triggerElement: "#trigger2"})
						.setTween(tween2)
						.setPin('#animate1')
						.addTo(controller);
	var scene3 = new ScrollScene({triggerElement: "#trigger3"})
						.setTween(tween2)
						.setPin('#animate2')
						.addTo(controller);



	// show indicators (requires debug extension)
		scene.addIndicators();

		nuage02.play();
		nuage03.play();
		nuage04.play();
		nuage01.play();
		nuage05.play();
		


	$('.nuage01').click(function(){
		nuage01.restart();
	});



});