$('.simulateurs-selector a').click(function(e){
  e.preventDefault();
  var select = $(this).data('select');
  $('.simulateurs-selector a').not(this).parents('li').removeClass('active');
  $(this).parents('li').addClass('active');
  
 
  
  $('.simulateur').each(function(){

      var classe = $(this).data('classe');

      if(classe == select){
         $(this).fadeIn().removeClass('filter-hide');

      }else if(select == '*'){
          $('.simulateur').show().removeClass('filter-hide');
      }else{
          $(this).fadeOut(300).addClass('filter-hide');
      }
     

  });


});