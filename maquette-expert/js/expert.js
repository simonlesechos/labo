$('.deployerlink').append('<i class="icon-chevron-down" style="margin-left: 5px; display: inline-block;"></i>');

$('.menutoggler').click(function(){
  $('.main-nav').slideToggle(300).toggleClass('toggled');
});



  $('.deployerlink').click(function(event){

  $(this).toggleClass('rotation180');
  $('.deployerlink').not(this).removeClass('rotation180');
  $(this).toggleClass('active');
  $('.deployerlink').not(this).removeClass('active');
  $(this).next('.large-menu-container').toggleClass('showed');
  $('.large-menu-container').not($(this).next()).removeClass('showed');
  event.stopPropagation();
  });

  $('.large-menu-container').click(function(event){
    $(this).addClass('showed');
    event.stopPropagation();
  });

  $(document).click(function() {
    $('.deployerlink').removeClass('rotation180').removeClass('active');
    $('.large-menu-container').removeClass('showed');
  });

  
  $(window).scroll(function(){  
        posScroll = $(document).scrollTop();  
        if(posScroll >=400){
          $('.scrollmenu-container').append($('.header-menu')).addClass('fixed');

        }else{
          $('.header-menu').insertAfter($('.main-header-bas'));
          $('.scrollmenu-container').removeClass('fixed');
        }

    });


$(document).ready(function(){
  $('.home-image-left').addClass('animateScale');
  $('.home-image-text').addClass('animateFromright');
});





