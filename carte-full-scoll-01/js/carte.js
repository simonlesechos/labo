$(document).ready(function(){
	

	var tl = new TimelineMax();

	
	var nuage01 = TweenMax.from($('.nuage01'), 1.5, {top: -300, paused:true, ease: Bounce.easeOut});
	var nuage02 = TweenMax.from($('.nuage02'), 1.8, {top: -400, paused:true, ease: Bounce.easeOut});
	var nuage03 = TweenMax.from($('.nuage03'), 1.4, {top: -400, paused:true, ease: Bounce.easeOut});
	var nuage04 = TweenMax.from($('.nuage04'), 1.2, {top: -400, paused:true, ease: Bounce.easeOut});
	var nuage05 = TweenMax.from($('.nuage05'), 2.2, {top: -600, paused:true, ease: Bounce.easeOut});
	
	

	$(window).load(function(){
		nuage02.play();
		nuage03.play();
		nuage04.play();
		nuage01.play();
		nuage05.play();

	});

	$('.nuage01').click(function(){
		nuage01.restart();
	});



});