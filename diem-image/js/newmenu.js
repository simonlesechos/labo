//CODE DU MENU

$(document).ready(function(){
  
       
      $('body').prepend('<div class="deployer"><a class="header-logo" href="/"><img src="/uploads/assets/logofull-purple.png" alt="Logo du cabinet"/></a><i class="icon-reorder"></i><span>Menu</span></div>');
      
      $('.large-list li ul').each(function(){
          function isEmpty( el ){
              return !$.trim(el.html())
          }

          if (isEmpty($(this))) {
                //console.log('un ul est vide!');
                $(this).remove();
          }

          
      });

      var linkWithDeployer = $('.large-list > li:has(ul) > a');

      $('<a href="javascript:;" class="mobile-deployer"><i class="icon-chevron-down"></i></a>').insertAfter(linkWithDeployer);

      transformMenu();



    
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


  
  
      var id;
      $(window).resize(function() {
          clearTimeout(id);
          id = setTimeout(transformMenu, 500);
          
      });



     
    function showmobilemenu(){
      


      $('.newmenu').addClass('mobilemenu').removeClass('visible');

      $('.large-list-deployer').removeClass().addClass('mobile-large-list-deployer');

      $('.deployer i').removeClass('icon-remove').addClass('icon-reorder');

      $('.mobilemenu ul li ul li ul').removeClass('list-opened').addClass('test');

      $('.large-list').appendTo('.mobile-large-list-deployer'); 

      $('.large-list li').removeClass('large-list-group');

      $('.large-list-alone').removeClass().appendTo('.large-list');

      $('.nm-large-list-container').hide();    

     
    }



function transformMenu(){  


  if($('.deployer').css('display') == "none"){
    
      
    $('.newmenu').removeClass('mobilemenu');
    
    $('.mobile-deployer').hide();
    
    $('.newmenu ul li ul li ul').show();
    
    $('i.icon-chevron-down').removeClass('rotate');
    
    $('.mobile-large-list-deployer').removeClass().addClass('large-list-deployer');
  
    $('.nm-large-list-container').show(); 
   
    $('.large-list').appendTo('.nm-large-list-container .container .row');


 
    $('.large-list li').has('ul').addClass('large-list-group span2'); 
    


    $('.large-list > li').not(':has(ul)').addClass('large-list-alone').appendTo('.large-button-list');
    

    

    
  }
  
  if(!$('html').hasClass('no-touch')){

      $('html').addClass('touch-screen');
      //alert('Cest une tablette !');
      $('.deployer').css('display', 'block');
      $('.newmenu').addClass('mobilemenu').removeClass('visible');
      $('.nm-large-list-container').hide();    
      $('.deployer i').removeClass('icon-remove').addClass('icon-reorder');
      $('.mobilemenu ul li ul li ul').removeClass('list-opened').addClass('test');
  } 
  
  if($('.deployer').css('display') == "block"){
    

    
    showmobilemenu();
     

  
  }


}



/*Survol des li 'large-list' déplient la div 'large-list-container'*/
       
      $('.large-list-deployer, .nm-large-list-container').mouseover(function(){
    
      $('.nm-large-list-container').addClass('showed');
      $('.large-list-deployer').addClass('active');
        
      });
      
      $('.large-list-deployer, .nm-large-list-container').mouseout(function(){
    
      $('.nm-large-list-container').removeClass('showed');
      $('.large-list-deployer').removeClass('active'); 
        
      });



      $('html').click(function() {
      //Hide the menus if visible
       
       
        //alert('Cliqué.');
        
        if($('.newmenu').hasClass('visible')){
          
          $('.newmenu').removeClass('visible'); 
        
        }
     
      });

      $('.mobilemenu, .deployer, .mobile-deployer').click(function(event){
          event.stopPropagation();
      });
     
});

/*
var lapage =  dm.currentPage.pagelink;
var lapagemere =  dm.parentCurrentPage.pagelink;
var lapagegrandmere =  dm.grandParentCurrentPage.pagelink;
var lapagearrieregrandmere =  dm.rearGrandParentCurrentPage.pagelink;

console.log(lapagearrieregrandmere +' || '+ lapagegrandmere +' || ' + lapagemere +' || '+ lapage +' || ')
*/

$(function(){
    var currentPageLink = dm.currentPage.pagelink;
  currentPageLink.indexOf(1);
  currentPageLink = currentPageLink.split("/")[1];
  currentPageLink = new RegExp(currentPageLink);
    var menuActiveLink = $(this).attr('href');
  
  
    $('.newmenu nav > ul > li > a').each(function(){
 
      if(currentPageLink.test(this.href)){
                $(this).addClass('active');
                $(this).parents('li').addClass('active');
      }
     

    });
  
});

/*FIN DU CODE DU MENU*/