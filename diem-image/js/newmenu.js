///

$('body').prepend('<div class="deployer"><i class="icon-reorder"></i><span>Menu</span></div>');
transformMenu();

// On lie l'événement resize à la fonction
//window.addEventListener('resize', transformMenuWide, false);
var id;
$(window).resize(function() {
    clearTimeout(id);
    id = setTimeout(transformMenu, 500);
    
});

/////////////////////////////////////////////////////////////////////////////////////////////

function transformMenu(){

  if($('.deployer').css('display') == "none" ){
    
      $('.newmenu').removeClass('mobilemenu');
  	  $('.mobile-deployer').hide();
      $('.newmenu ul li ul li ul').show();
      $('i.icon-chevron-down').removeClass('rotate');
      $('.mobile-large-list-deployer').removeClass().addClass('large-list-deployer');


/////////////////////////////////////////////////////////////////////////////////
    
    $('.nm-large-list-container').show(); 
  
    $('.large-list').prependTo('.nm-large-list-container');
  	
    $('.large-list li').has('ul').addClass('large-list-group');
 
    $('.large-list > li').not(':has(ul)').addClass('large-list-alone').appendTo('.large-button-list');
  
  }else{
     
     $('.newmenu').addClass('mobilemenu').removeClass('visible');
    
     $('.large-list-deployer').removeClass().addClass('mobile-large-list-deployer');
  $('.newmenu').addClass('mobilemenu').removeClass('visible');
  $('.deployer i').removeClass('icon-remove').addClass('icon-reorder');
  $('.mobilemenu ul li ul li ul').removeClass('list-opened').addClass('test');
    
     	
    $('.large-list').appendTo('.mobile-large-list-deployer'); 
  	
    $('.large-list li').removeClass('large-list-group');
 
    $('.large-list-alone').removeClass().appendTo('.large-list');
    
    $('.nm-large-list-container').hide();    
 
  
  
  }


}


////////////////////////////////////////////////////////////////////////////////////////////////////
//Survol des li 'large-list' déplient la div 'large-list-container'
     
   $('.large-list-deployer, .nm-large-list-container').mouseover(function(){
  
    $('.nm-large-list-container').addClass('showed');
    $('.large-list-deployer').addClass('active');
      
    });
    
    $('.large-list-deployer, .nm-large-list-container').mouseout(function(){
      	
          	
	$('.nm-large-list-container').removeClass('showed');
    $('.large-list-deployer').removeClass('active');
      
    });

	
 






$('.deployer').click(function(){
  $('.newmenu').toggleClass('visible');
 
  if($('.newmenu').hasClass('visible')){
  
  
  
    $('.deployer i').removeClass('icon-reorder').addClass('icon-remove');
  
  }else{
    $('.deployer i').removeClass('icon-remove').addClass('icon-reorder');
  }
  
}); 

$('.mobilemenu ul li ul li ul').removeClass('list-opened');

$('.mobile-deployer').click(function(){
  $(this).children('i.icon-chevron-down').toggleClass('rotate');
  
  $('i.icon-chevron-down').not($(this).children()).removeClass('rotate');
  
  $(this).next('ul').toggleClass('list-opened'); 
  $('.mobilemenu ul li ul li ul').not($(this).next('ul')).removeClass('list-opened');
  
});



