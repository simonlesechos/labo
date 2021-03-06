//CODE DU MENU

$(document).ready(function(){
  
       
      $('body').prepend('<div class="deployer"><a class="header-logo" href="/"><img src="/uploads/assets/logofull-purple.png" alt="Logo du cabinet"/></a><div class="pull-right deployer-btn"><i class="icon-reorder"></i><span>Menu</span></div></div>');
      
      $('.large-list li ul').each(function(){
          function isEmpty( el ){
              return !$.trim(el.html())
          }

          if (isEmpty($(this))) {
                //console.log('un ul est vide!');
                $(this).remove();
          }

          
      });
 
      var linkWithDeployer = $('.newmenu nav > ul > li').has('ul').children('a');
  
      console.log(linkWithDeployer);

      $('<a href="javascript:;" class="mobile-deployer"><i class="icon-chevron-down"></i></a>').insertAfter(linkWithDeployer);

      transformMenu();



       $('.deployer-btn').click(function(event){
      
         
         event.stopPropagation();
         //event.preventDefault();
     $('.newmenu').toggleClass('visible');
       
         //var getOffset = $(window).scrollTop();
         //console.log(getOffset);

        if($('.newmenu').hasClass('visible')){
          $('body').prepend('<div class="newmenu-overlay"></div>');
            
            $('.newmenu-overlay').on('touchmove',function(event){
            event.preventDefault();
             
            });
      
            $('html, body, #dm_page').addClass('hide-overflow');  
          
         
          $('.deployer i').removeClass('icon-reorder').addClass('icon-remove');
                
         
          //$('html,body').scrollTop(getOffset);
          //$('#dm_page').addClass('scale-body');
         
        }else{
     
          $('.deployer i').removeClass('icon-remove').addClass('icon-reorder');
        $('.newmenu-overlay').remove();
          $('html, body, #dm_page').removeClass('hide-overflow');

          //$('html, body, #dm_page').scrollTop(getOffset);
          //$('#dm_page').removeClass('scale-body');
        
        }

      }); 

  $('.deployer .header-logo a').click(function(){
    
      window.location.href = $(this).attr('href');
      
  });
      
      $('.mobilemenu ul li ul').removeClass('list-opened');

    
      $('.mobile-deployer').click(function(event){
      event.stopPropagation();
          event.preventDefault();
            $(this).children('i.icon-chevron-down').toggleClass('rotate');

            $('i.icon-chevron-down').not($(this).children()).removeClass('rotate');

            $(this).next('ul').toggleClass('list-opened'); 
            $('.mobilemenu ul li > ul').not($(this).next('ul')).removeClass('list-opened');

      });


      $('.mobilemenu').click(function(event){
      event.stopPropagation();
      //event.preventDefault();

      });

      $('html, body, .newmenu-overlay').on('click', function(){
        $('.newmenu').removeClass('visible');
        $('.deployer i').removeClass('icon-remove').addClass('icon-reorder');
      $('html, body, #dm_page').removeClass('hide-overflow');
        $('.newmenu-overlay').remove();
        //$('#dm_page').removeClass('scale-body');
      });
  
      
      var id;
      $(window).resize(function() {
          clearTimeout(id);
          id = setTimeout(transformMenu, 500);
          $('.newmenu-overlay').remove();
          
      });



     
    function showmobilemenu(){
      


      $('.newmenu').addClass('mobilemenu').removeClass('visible');
      $('body').prepend($('.mobilemenu'));

      $('.large-list-deployer').removeClass().addClass('mobile-large-list-deployer');

      $('.deployer i').removeClass('icon-remove').addClass('icon-reorder');

      $('.mobilemenu ul li > ul').removeClass('list-opened').addClass('test');

      $('.large-list').appendTo('.mobile-large-list-deployer'); 

      $('.large-list li').removeClass('large-list-group');

      $('.large-list-alone').removeClass().appendTo('.large-list');

      $('.nm-large-list-container').hide();    

     
    }



function transformMenu(){  


  if($('.deployer').css('display') == "none"){
    
    $('.newmenu-wrapper').prepend($('.mobilemenu'));  
    $('.newmenu').removeClass('mobilemenu');
    
    $('.mobile-deployer').hide();
    
    $('.mobilemenu ul li > ul').show();
    
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
      $('.mobilemenu ul li > ul').removeClass('list-opened').addClass('test');
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


$(function(){
    var currentPageLink = dm.currentPage.pagelink;
    currentPageLink = currentPageLink.replace('/dev.php', '');
    currentPageLink.indexOf(1);
  currentPageLink = currentPageLink.split("/")[1];
  currentPageLink = new RegExp(currentPageLink);
  
  
    $('.newmenu nav > ul > li > a').each(function(){
 
      if(currentPageLink.test(this.href)){
                $(this).addClass('active');
                $(this).parents('li').addClass('active');
      }
     

    });
  
});

/*FIN DU CODE DU MENU*/