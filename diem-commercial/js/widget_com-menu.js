$(document).ready(function(){

  comMenuConstruct();
  comMenutitleCalculMargin();

});


function comMenuConstruct(){


  $('.topmenu .menu-navbar').prepend('<li class="pull-left"><a href="javascript:;" id="open-left"><span class="littlebar ltb1"></span><span class="littlebar ltb2"></span><span class="littlebar ltb3"></span></a></li>');

  $('.topmenu nav').prepend('<a href="javascript:;" id="open-left-mobile"><span class="littlebar"></span><span class="littlebar"></span><span class="littlebar"></span></a>');



  $('#open-left, #open-left-mobile').click(function(event){
      
      event.stopPropagation();
    
      toggleComMenu();

  });


  $('.close-left-menu').click(function(event){
    
      event.stopPropagation();  
    
      closeComMenu();

  });

  
  $('.com-menu').click(function(event){
    event.stopPropagation();
  });
  
  
  $('html').click(function(){
    
    if($('.com-menu').hasClass('com-menu-visible')){
      closeComMenu();
      }
    
  });
  
  




  var cm_dployerLink = $('.com-menu ul li').has('ul');
  var cm_deployerLinkLi = cm_dployerLink.children('a');
  var deployer = '<span class="deployer"></span>'
  $(deployer).insertAfter(cm_deployerLinkLi);


  $('.com-menu .deployer').append('<i class="icon-chevron-down"></i>'); 

  $('.com-menu ul li ul').removeClass('deployed');

  $('.com-menu .deployer').click(function(event){
    event.stopPropagation();
    
    if($(this).next('ul').hasClass('deployed')){
     
      $(this).children('i').removeClass('icon-chevron-up').addClass('icon-chevron-down');
      $(this).prev('a').removeClass('active');
      $(this).next('ul').removeClass('deployed').slideUp('fast');
      
    
    }else{
      
    $(this).children('i').removeClass('icon-chevron-down').addClass('icon-chevron-up');
    $(this).prev('a').addClass('active');
    $(this).next('ul').addClass('deployed').slideDown('fast');
    $('.com-menu ul li ul').not($(this).next('ul')).removeClass('deployed').slideUp('fast');
    $('.com-menu ul li ul').not($(this).next('ul')).parent('li').children('a').removeClass('active');
    $('.deployer').not($(this)).children('i').removeClass('icon-chevron-up').addClass('icon-chevron-down');
    }
                              
  });



}



var id;
  $(window).resize(function() {
  clearTimeout(id);
  id = setTimeout(comMenutitleCalculMargin, 200);
            
});





/*FONCTIONS*/

function toggleComMenu(){
    
 
    if($('.com-menu').hasClass('com-menu-visible')){
       closeComMenu();
    
    }else{
       $('.com-menu').addClass('com-menu-visible');
       $('#open-left, #open-left-mobile').addClass('closemenu');
    }

}

function closeComMenu(){

  $('.com-menu').removeClass('com-menu-visible');
    $('#open-left, #open-left-mobile').removeClass('closemenu');
}




function comMenutitleCalculMargin(){
  var topMenuOffset = $('.topmenu .dm_widget_inner').offset();
  var topMenuOffsetTop = topMenuOffset.top;
  var comMenuSearchBarHeight =  $('.com-menu .search').height();

  console.log(topMenuOffsetTop);
  console.log(comMenuSearchBarHeight);
 
 
  
  if($('.com-menu .search').css('display') == 'none'){
      $('.com-menu h4').css('margin-top', topMenuOffsetTop + 'px');
     
  }else{
      
      $('.com-menu h4').css('margin-top', topMenuOffsetTop - comMenuSearchBarHeight + 'px')
  }

}

$(function(){

    var url = window.location.pathname, 
        urlRegExp = new RegExp(url == '/' ? window.location.origin + '/?$' : url.replace(/\/$/,'')); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
        // now grab every link from the navigation
        $('.com-menu a').each(function(){
            // and test its normalized href against the url pathname regexp
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('current');
                $(this).parent('li').parent('ul').parent('li').children('a').addClass('active');
            }
        });

});