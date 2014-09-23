$('.scrollbtn').click(function(){
   $("html,body").animate({
         scrollTop: $("#topcontent").offset().top-60
     }, 1000);
  $('.main-header').addClass('scrollhead');
  $('.box').addClass('animatedbox');
});


$(document).ready(function(){

      $('.pagebody-cab .main-header').addClass('scrollhead');
   
      $('.pagebody .wrapper').addClass('loaded');
      $('.pagebody .box').each(function(i){
        var box = $(this);
        setTimeout(function(){
         
          box.toggleClass('animatedbox', !box.hasClass('animatedbox'));
          }, 200*i);
            
      });
    
$(function(){

    var url = window.location.pathname, 
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
        // now grab every link from the navigation
        $('nav a').each(function(){
            // and test its normalized href against the url pathname regexp
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('active');
            }
        });

});

});

  $(window).scroll(function(){  
        posScroll = $(document).scrollTop();  
        if(posScroll >=60){  
              $('.home-header, .pagebody .main-header').addClass('scrollhead');
              $('.homebody .box').addClass('animatedbox');
              $('.menu-page').addClass('fixed');
        }else{  
            $('.home-header, .pagebody .main-header').removeClass('scrollhead');
            $('.homebody .box').removeClass('animatedbox');
            $('.menu-page').removeClass('fixed');
        }
  });  

$('.openclose').click(function(){
  $(this).toggleClass('opened');
  $('.navbar').toggleClass('opened');
});