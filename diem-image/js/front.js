(function($)
{

  // Here is the entry point for your front javascript

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
        if(posScroll >=160){  
              $('.main-header').addClass('scrollhead');
              $('.homebody .box').addClass('animatedbox');
              $('.menu-page').addClass('fixed');
              $('.bighead-bg-container').addClass('reduct');
        }else{  
            $('.main-header').removeClass('scrollhead');
            $('.homebody .box').removeClass('animatedbox');
            $('.menu-page').removeClass('fixed');
             $('.bighead-bg-container').removeClass('reduct');
        }
  });  

$('.openclose').click(function(event){
  event.preventDefault();
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



var bodywidth = $('body').width();

console.log(bodywidth);

if(bodywidth <= 780 ){
  console.log('Oui');
  $('.menu-page').appendTo('.navbar nav');
  $('.menu-page').removeClass('fixed');
}

//Transformation des liens de partage réseaux sociaux

$('.bs-social-buttons li:first-child').addClass('facebook-back').prepend('<div class="socialbtn-overlay facebook-mask"><div><i class="icon-facebook"></i></div></div>');

$('.bs-social-buttons li:nth-child(2)').addClass('google-back').prepend('<div class="socialbtn-overlay google-mask"><div><i class="icon-google-plus"></i></div></div>');

$('.bs-social-buttons li:nth-child(3)').addClass('linkedin-back').prepend('<div class="socialbtn-overlay linkedin-mask"><div><i class="icon-linkedin"></i></div></div>');

$('.bs-social-buttons li:nth-child(4)').addClass('twitter-back').prepend('<div class="socialbtn-overlay twitter-mask"><div><i class="icon-twitter"></i></div></div>');

$('.bs-social-buttons li:nth-child(5)').addClass('viadeo-back').prepend('<div class="socialbtn-overlay viadeo-mask"><div><i class="icon-share-alt"></i></div></div>');

$('<div class="clear"></div>').insertAfter('.bs-social-buttons');


// CALCUL DYNAMIQUE DES HAUTEURS DES BLOCS DANS LES LISTES D'ARTICLES

function setElementsHeight(){

  // Récupère dans un tableau les hauteurs des blocs 
  var elementHeights = $('.colonnes-list .span4').map(function() {
    return $(this).height();
  }).get();

  // Math.max takes a variable number of arguments
  // `apply` is equivalent to passing each height as an argument
  var maxHeight = Math.max.apply(null, elementHeights);

  // Apliquer la hauteur max à chaque élément
  $('.colonnes-list .span4').height(maxHeight);
}

// n'exécute la fonction qu'une fois l'appel ajax terminé 

$('body').on('load_complete', function() {
  
  console.log('complete');
  
  
  if($('.colonnes-list .span4').find('img').length != 0){

//et les images chargées (pour prendre en compte leur hauteur)

      $('.colonnes-list .span4 img').on('load', function(){

      console.log('images chargées...');
      
      setElementsHeight();
      
      });

  }else{
       console.log("pas d'images");
       setElementsHeight();
     

  }


 
});

// Pour le responsive, au redimensionnement de la page lorsque la largeur de la fenetre est inférieure à 960px, la hauteur des blocs passe en automatique,
// sinon on ré-exécute la fonction de calcul de hauteur
// permet de prévoir le cas des tablettes qui passent de portrait à paysage 

$(window).resize(function(){
  if($(document).width() <= 960){
    $('.colonnes-list .span4').css('height', 'auto');
  }else{
    setElementsHeight();
  }
});


//Changement de place d'input "Votre courriel" dans le fomulaire de contact principal

var inputTomove = $('.main-contact-form fieldset .control-group').first();

$('.control-group-container').prepend(inputTomove);

$('.main-contact-form .captcha').parents('.control-group').wrap('<div class="control-group-container-center"></div>');



//Ajout d'une classe au parent du container du pack créa pour y appliquer un backgrund de couleur


$('.colored-back-crea-1 .dm_widget_inner').addClass('containercrea');

  
})(jQuery);