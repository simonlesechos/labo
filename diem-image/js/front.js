(function($)
{

  // Here is the entry point for your front javascript

//Au clic sur la petite flèche sur la page d'accueil, le navigateur "scrolle" jusqu'au contenu principal de la page (avec l'ID "#topcontent")
$('.scrollbtn, .scrollshadow').click(function(){
   $("html,body").animate({
         scrollTop: $("#topcontent").offset().top-80
     }, 1000);

//ajout de la classe "scrollhead" au header pour que le fond du menu s'opacifie et faire apparaître le logo   
  $('.main-header').addClass('scrollhead');
 
});
//ajout de la classe "scrollhead" au header pour que le fond du menu s'opacifie et faire apparaître le logo   
  $('.pagebody-cab .main-header').addClass('scrollhead');

$(document).ready(function(){





//Todo : cas sans ajax
//resizeBoxes();

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






//insertion d'une DIV sous le header pour créer une marge permanente de la hauteur deu header
//permet d'éviter que le contenu soit en dessous du menu qui est fixe en permanence
//si le menu change de hauteur, penser à changer la hauteur de la DIV de classe .spacer44 en fonction de la hauteur souhaitée
$('<div class="spacer44"></div>').insertAfter('#dm_header');
   
//Lancer l'animation d'apparition des littlebox (Les blocs dans les menus/images de chaque page sous-home)
//Décaler l'animation de chacune des box de 60 millisecondes  
$('.pagebody .littlebox').each(function(i){
        var box = $(this);
        setTimeout(function(){
         
          box.toggleClass('animatedbox', !box.hasClass('animatedbox'));
          }, 60*i);
            
});

//Regex permettant d'appliquer la classe active aux li en fonction de la correspondance de l'URL dans la barre d'adresse avec le lien contenu par la balise li
    
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
                $(this).parent('li').addClass('active');
                $('.homebody nav li').removeClass('active');
                $('.homebody nav a').removeClass('active');
            }

        });


});



//Redimensionnement automatique des titres dans les box-menus (pages sous-home) en fonction nde la longueur du texte et de la largeur de la box

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
    $(this).css('font-size', '24px');
}

});


});

//Lors du scroll, à partir de 160 pixels de distance avec le haut du document 

$(window).scroll(function(){  
        posScroll = $(document).scrollTop();  
        if(posScroll >=160){  
              
              $('.main-header').addClass('scrollhead');
              $('.homebody .box').addClass('animatedbox');// animation des box dans les box menus
              $('.menu-page').addClass('fixed');
              $('.bighead-bg-container').addClass('reduct');
              // Ajout d'une classe à l'image plein écran de l'accueil,
              //cette classe lançant l'animation qui crée l'effet parallaxe.

        }else{  

            //sinon faire l'inverse
            
            $('.main-header').removeClass('scrollhead');
            $('.homebody .box').removeClass('animatedbox');
            $('.menu-page').removeClass('fixed');
            $('.bighead-bg-container').removeClass('reduct');
        }
  });  


//Transformation des liens de partage réseaux sociaux

function SocialbtnsWidth(){
$('.bs-social-buttons').each(function(){
     var btnHidden = $(this).children('li').filter(function() {
          return $(this).css('display') == 'none';
     });
     var bssBtnHidden = btnHidden.length;
     var bssbBtnNumber = $(this).children('li').length - bssBtnHidden;

     //console.log(btnHidden);
     //console.log(bssBtnHidden);
     //console.log(bssbBtnNumber);



     $('.bs-social-buttons li').css('width',  (100 / bssbBtnNumber) + '%');
     $('.bs-social-buttons li').css('margin-left',  0);
     $('.bs-social-buttons').css({
      padding :"0",
      marginLeft : "0",
      marginRigth: "0"
     });

  });

}



SocialbtnsWidth();


// CALCUL DYNAMIQUE DES HAUTEURS DES BLOCS DANS LES LISTES D'ARTICLES

function setElementsHeight(){

//console.log('fonction de base');

// Récupère dans un tableau les hauteurs des blocs 

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
     




// Pour le responsive, au redimensionnement de la page lorsque la largeur de la fenetre est inférieure à 960px, la hauteur des blocs passe en automatique,
// sinon on ré-exécute la fonction de calcul de hauteur
// permet de prévoir le cas des tablettes qui passent de portrait à paysage 



//Si il n'y a pas de contenu dans le lien general en bas des news, alors on supprime la balise de classe "generallink"
if($('.generallink a').html() == ''){
  $('.generallink').remove();
}

//Changement de place d'input "Votre courriel" dans le fomulaire de contact principal

/*
var inputTomove = $('.main-contact-form fieldset .control-group').first();

$('.control-group-container').prepend(inputTomove);

$('.main-contact-form .captcha').parents('.control-group').wrap('<div class="control-group-container-center"></div>');

*/

//Ajout d'une classe au parent du container du pack créa pour y appliquer un background de couleur


$('.colored-back-crea-1 .dm_widget_inner').addClass('containercrea');

  
//Detection du focus dans le formulaire principal et masquage du label correspondant
/*
  $('.main-contact-form').find('input, textarea').focus(function(){
  $(this).parents('.control-group').find('label').addClass('hidden');
});

$('.main-contact-form').find('input, textarea').focusout(function(){

if($(this).val() <= 0){
    $(this).parents('.control-group').find('label').removeClass('hidden');
}else{
    $(this).parents('.control-group').find('label').addClass('hidden');
}


});
*/




})(jQuery);



///////////////////////////////////////////////////////////////////////////////////////////////
