var counter = $('.colonnes-list').length;
//var counterimg = $('.colonnes-list img').length;
var counterTrigger = 0;
//var counterimgtotal = 0;
console.log('il y a '+ counter + ' div "colonnes-list"');
//console.log('il y a '+ counterimg + ' images');

if($('.affichage_list_by_motif').length == 0){
  console.log('il n\'y a pas un list by motif dans la page');
   resizeBoxes(); 
}




$('body').on('load_complete', function() {
  

  //console.log('il y a '+ counterimg + ' images');
  
  console.log('Ajax trigger load_complete');
  
  counterTrigger++;
  $('.colonnes-list').find('img').hide();
  
   
  if(counterTrigger >= counter){
  
    console.log(counter + ' ajax trigger load_complete reached');

    
        $(function() {
          function imageLoaded() {
             // function to invoke for loaded image
             // decrement the counter
             counter--; 
             if( counter === 0 ) {
                 // counter is 0 which means the last
                 //    one loaded, so do something else

                 //alert('Coucou ! toutes les images sont chargées');
                 $('.colonnes-list').find('img').fadeIn(500);
                 resizeBoxes();
             }
          }
          var images = $('.colonnes-list').find('img');
          var counter = images.length;  // initialize the counter

          images.each(function() {
              if( this.complete ) {
                  imageLoaded.call( this );
              } else {
                  $(this).one('load', imageLoaded);
              }
          });
      });

         

  }

  if($('.colonnes-list .span4 img').length == 0){
      resizeBoxes();
  }

});





$('.colonnes-list').each(function(){
      
      var elementHeights = $(this).find('.span4').map(function() {
      return $(this).height();
      }).get();

      // Math.max takes a variable number of arguments
      // 'apply' is equivalent to passing each height as an argument
      var maxHeight = Math.max.apply(null, elementHeights);

      // Apliquer la hauteur max à chaque élément
      var blocheight = $(this).find('.span4');
      var imgheight = $(this).next('.span4').find('img').height();
      blocheight.height(maxHeight);
      //blocheight.has('.boxWithoutImage').css('height', 'auto');
      $('.boxWithoutImage').css('padding', '0');
  

});  


  //console.log('fonction exécutée');
}


     
function resizeBoxes(){

          console.log('begin resizeBoxes !'); 
          setElementsHeight(); 

}
     