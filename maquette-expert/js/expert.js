$('.deployerlink').click(function(){
	$(this).next('.large-menu-container').toggleClass('showed');
	$('.large-menu-container').not($(this).next()).removeClass('showed');
});