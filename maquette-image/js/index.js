$('.scrollbtn, .scrollshadow').click(function(){
   $("html,body").animate({
         scrollTop: $("#topcontent").offset().top-80
     }, 1000);
  $('.main-header').addClass('scrollhead');
  $('.little').addClass('animatedbox');
});
      $('.pagebody-cab .main-header').addClass('scrollhead');

$(document).ready(function(){


   
  
$('.pagebody .littlebox').each(function(i){
        var box = $(this);
        setTimeout(function(){
         
          box.toggleClass('animatedbox', !box.hasClass('animatedbox'));
          }, 60*i);
            
});
    
$(function(){

    var url = window.location.pathname, 
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
        // now grab every link from the navigation
        console.log(url);  
        console.log(urlRegExp);
        $('nav a').each(function(){

            // and test its normalized href against the url pathname regexp
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('active');
                $('.homebody nav a').removeClass('active');
            }

        });


});


$('.box-title h3').each(function(){
var boxtitle = $(this).text().length;
var boxsize = $('.littlebox').width();

if(boxtitle > 20){
  $(this).css('font-size', '22px');
}
if(boxtitle > 22){
  $(this).css('font-size', '20px');
}

if(boxsize = 280){
    $(this).css('font-size', '17px');
}

});


});

$(window).scroll(function(){  
        posScroll = $(document).scrollTop();  
        if(posScroll >=60){  
              $('.home-header, .pagebody .main-header').addClass('scrollhead');
              $('.homebody .box').addClass('animatedbox');
              $('.menu-page').addClass('fixed');
              $('.bighead-bg-container').addClass('reduct');
        }else{  
            $('.home-header, .pagebody .main-header').removeClass('scrollhead');
            $('.homebody .box').removeClass('animatedbox');
            $('.menu-page').removeClass('fixed');
             $('.bighead-bg-container').removeClass('reduct');
        }
  });  

$('.openclose').click(function(){
  $(this).toggleClass('opened');
  if($('.navbar').hasClass('opened')){
      console.log('opened !');
      $('.navbar').removeClass('opened');
      $('html, body').css('position', 'relative');
  }else{
      $('.navbar').addClass('opened');
      $('html, body').css('position', 'fixed');
  }
  
});

