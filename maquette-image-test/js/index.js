$('.scrollbtn').click(function(){
   $("html,body").animate({
         scrollTop: $("#topcontent").offset().top-60
     }, 1000);
  $('.main-header').addClass('scrollhead');
  $('.box').addClass('animatedbox');
});


$(document).ready(function(){

   
      $('.pagebody .wrapper').addClass('loaded');
      $('.pagebody .box').each(function(i){
        var box = $(this);
        setTimeout(function(){
         
          box.toggleClass('animatedbox', !box.hasClass('animatedbox'));
          }, 200*i);
            
      });
    
});

  $(window).scroll(function(){  
        posScroll = $(document).scrollTop();  
        if(posScroll >=250){  
              $('.home-header').addClass('scrollhead');
              $('.homebody .box').addClass('animatedbox');
              $('.menu-page').addClass('fixed');
        }else{  
            $('.home-header').removeClass('scrollhead');
            $('.homebody .box').removeClass('animatedbox');
            $('.menu-page').removeClass('fixed');
        }
  });  