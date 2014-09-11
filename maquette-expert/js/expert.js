$('.deployerlink').click(function(){
	$(this).toggleClass('active');
	$('.deployerlink').not(this).removeClass('active');
	$(this).next('.large-menu-container').toggleClass('showed');
	$('.large-menu-container').not($(this).next()).removeClass('showed');
});

