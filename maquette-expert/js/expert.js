$('.deployerlink').append('<i class="icon-caret-down" style="margin-left: 5px; display: inline-block;"></i>');

$('.deployerlink').click(function(){
	$(this).toggleClass('rotation180');
	$('.deployerlink').not(this).removeClass('rotation180');
	$(this).toggleClass('active');
	$('.deployerlink').not(this).removeClass('active');
	$(this).next('.large-menu-container').toggleClass('showed');
	$('.large-menu-container').not($(this).next()).removeClass('showed');
});


  $(window).scroll(function(){  
        posScroll = $(document).scrollTop();  
        if(posScroll >=400){
        	$('.scrollmenu-container').append($('.header-menu')).addClass('fixed');

        }else{
        	$('.header-menu').insertAfter($('.main-header-bas'));
        	$('scrollmenu-container').removeClass('fixed');
        }

    });

  $(window).load(function(){
  	$('.home-image-text').addClass('animateScale');
  	$('.home-image-left').addClass('animateFromleft');
  });

