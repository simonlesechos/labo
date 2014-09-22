function resizer(){


        $('.carte').children().each(function(){
        var elemwidth = $(this).width();
        var elemheight = $(this).height();
        var contwidth = $('.carte').width();
        var contheight = $('.carte').height();
        
        var elemPosX = $(this).position().left;
        var elemPosY = $(this).position().top;


        
        var newwidth = (elemwidth / contwidth) * 100 + "%";
        var newheight = (elemheight / contheight) * 100 + "%";
        
        var newposX = (elemPosX/contwidth) * 100 + "%";
        var newposY = (elemPosY/contheight) * 100 + "%";
         
        var classe = $(this).attr('class'); 
          
        /*$(this).css('width', newwidth);
        $(this).css('height', newheight);
        $(this).css('left', newposX);
        $(this).css('top', newposY);*/
        
        console.log(
        '.'+ classe + '{' + '\n' +	
        'top: ' + newposY + ';' + '\n' +
        'left: ' + newposX + ';' + '\n' +	
        'width: ' + newwidth + ';' + '\n' +	
        'height: ' + newheight + ';' + '\n' +
        '}'
        );

     
        }); 

}

resizer();


/////////////////////////////////////////////////////////////////////////////////////
//Animations//
/////////////////////////////////////////////////////////////////////////////////////
var tl = new TimelineMax({onComplete:timelineDone});


//Face 1 :
tl.to($('.perso-face'),0.1, {rotation:0});
tl.to($('.carte-bg'), 20, {scale: 1.3, ease: Power2.easeOut},0);
tl.from($('.perso-face'), 1.2, {opacity: 0, rotation:0, top: "-100%", ease: Power2.easeOut}, 0.2);
tl.from($('.vous'), 1.2, {opacity: 0, scale: 0, left: "-100%", ease: Power2.easeOut}, 0.5);
tl.from($('.souhaite'), 1.2, {opacity: 0, left: "100%", ease: Power2.easeOut}, 1.5);
tl.from($('.une'), 1.4, {opacity: 0, top: "-100%", ease: Power2.easeOut}, 1.8);
tl.from($('.annee'), 1.4, {opacity: 0, scale: 0, ease: Power2.easeOut}, 2);
tl.from($('.y2015'), 1.7, {opacity: 0, scale: 0, top: "-100%", ease: Bounce.easeOut}, 2.4);
tl.from($('.innovante'), 1.4, {opacity: 0, left: "-100%", ease: Quad.easeOut}, 2.8);
tl.from($('.agreable'), 1.4, {opacity: 0, left: "100%", ease: Power2.easeOut}, 3);
tl.from($('.foisonnante'), 1.7, {opacity: 0, scale: 0, ease: Power2.easeOut}, 3.4);
tl.from($('.palpitante'), 1.7, {opacity: 0, scale: 0, ease: Bounce.easeOut}, 3.7);
tl.from($('.gratifiante'), 1.4, {opacity: 0, scale:0, ease: Power2.easeOut}, 4);
tl.from($('.exaltante'), 1.7, {opacity: 0, scale: 0, ease: Bounce.easeOut}, 4.4);
tl.from($('.brillante'), 1.4, {opacity: 0, top: "100%", ease: Power2.easeOut}, 4.7);
tl.from($('.triomphante'), 1.7, {opacity: 0, scale: 0, ease: Power2.easeOut}, 5);
tl.from($('.petillante'), 1.4, {opacity: 0, left: "100%", ease: Bounce.easeOut}, 5.3);
tl.from($('.epatante'), 1.7, {opacity: 0, top: "100%", ease: Power2.easeOut}, 5.7);
tl.from($('.performante'), 1.4, {opacity: 0, scale: 0, ease: Quad.easeOut}, 6);
tl.from($('.etincelante'), 1.2, {opacity: 0, scale: 0, rotation: 15, ease: Power2.easeOut}, 6.3);
tl.from($('.poetique'), 1.7, {opacity: 0, scale: 0, ease: Power2.easeOut}, 6.7);
tl.from($('.attrayante'), 1.4, {opacity: 0, scale: 0, top: "100%", ease: Power2.easeOut}, 7.2);
tl.from($('.passionnante'), 1.7, {opacity: 0, ease: Quad.easeOut}, 7.6);
tl.from($('.merveilleuse'), 1.2, {opacity: 0, left: "100%", ease: Quad.easeOut}, 8);

$('.carte div').each(function(){
	var rotation = Math.floor(Math.random() * 180) + 180;
	console.log(rotation);
	tl.to($(this), 2, {rotation: rotation, opacity: 0, scale: 2, top: "-100%", ease: Quad.easeOut}, 14);
});

//Face 2 :
tl.to($('.couleur-bas'), 0.7, {bottom:0, ease: Strong.easeOut}, 15);
tl.to($('.y2015-bas'), 1.2, {right: '10px', opacity:1, ease: Power2.easeOut},15.1);
tl.to($('.perso-cabinet'), 0.7, {top: 0, ease: Strong.easeOut}, 15.2);

tl.from($('.perso-cabinet h3'), 1.7, {top: "40px", opacity:0, ease: Power2.easeOut}, 15.5);
tl.from($('.perso-cabinet p'), 1.7, {top: "40px", opacity:0, ease: Power2.easeOut}, 15.6);

//Face 3 :
tl.to($('.carte-back'), 0.7, {top:0, ease: Quad.easeOut}, 25);
tl.to($('.logo-cabinet'),0.7,{opacity:1, ease: Quad.easeOut}, 25);
tl.from($('.mots-back'),2.2, {opacity:0, scaleY:0, ease: Bounce.easeOut},25.5);
tl.from($('.fdf'), 0.7, {scale: 0, rotation: 120, opacity: 0, ease: Quad.easeOut}, 26.7);
tl.from($('.fdf-desc'), 1.2, {opacity: 0, ease: Quad.easeOut}, 27.2);

tl.to($('.couleur-bas2'), 0.7, {bottom:0, ease: Strong.easeOut},33);
tl.to($('.perso-cabinet2'), 0.7, {top: 0, ease: Strong.easeOut},33.1);
tl.to($('.logo-cabinet'),0.7,{opacity:1, ease: Quad.easeOut}, 33.2);
tl.to($('.bandeau-texte'), 7.7,{right: 0, opacity: 1, ease:Quad.easeOut},33.2);



tl.timeScale(1.2);

tl.pause();


$('.restart-btn').click(function(){

  tl.restart();


});


$('.colreplay').click(function(){

  tl.restart();


});

$('.reverse-btn').click(function(){

  tl.reverse();


});


$('.play-btn').click(function(){

  tl.play();



});

$('.pause-btn').click(function(){

  tl.pause();



});

function timelineDone() {
  setTimeout(function(){
     tl.restart();
   }, 7000);
     
}


$(document).ready(function(){

  //calculer la taille de police sur la face 1 en fonction de la largeur de la carte
  //(ici pour environ 32px -> 680/32 = 21.25, donc pour avoir 32px on divise la largeur de la carte par 21.25)
  var fontsize = $('.carte').width()/21.25 + "px";
  $('.perso-face').css('font-size', fontsize);
  
  //lancer la timeline
  tl.play();


});

//au redimensionnement de la fenêtre
$(window).resize(function(){
   //calculer la taille de police sur la face 1 en fonction de la largeur de la carte
          var fontsize = $('.carte').width()/21.25 + "px";
        $('.perso-face').css('font-size', fontsize);
});
 

/////////////////////////////////////////////////////////////////////////// MENUS PERMETTANT DE TESTER (texte et couleurs) 


//Menu de choix des couleurs

$('.colorspot').click(function(){
  var bgimage = $(this).data('bg');
  var bgnew = 'url(' + bgimage + ') repeat';
  $('.colorspot').not(this).removeClass('active');
  $(this).addClass('active');
  $('.carte-bg').css('background', bgnew);
  $('.carte-back').css('background', bgnew);
  $('.couleur-bas, .couleur-bas2').css('background', bgnew);
});

//fermer le menu des couleurs

$('.colclose').click(function(){
  $('.controls').fadeOut('fast');
});

//menu pour le dev

$('.colmenu').click(function(){
   $('#control-menu').toggleClass('show');
});


//Fermer et ouvrir le menu

$('#control-menu .close').click(function(){

	if($(this).hasClass('menu')){
		$(this).removeClass('menu');
		$('#control-menu').removeClass('hidden');
	}else{
		$(this).addClass('menu');
		$('#control-menu').addClass('hidden');
	}	

});

//Selection du background de la carte dans le menu

function displayVals() {
  var singleValues = $( "#bgcolor-selector" ).val();

  $( ".carte-bg" ).css( "background-image", "url(img/fonds/fond-" + singleValues + ".jpg)");
  $( ".carte-back" ).css( "background-image", "url(img/fonds/fond-" + singleValues + ".jpg)");
  $( ".couleur-bas" ).css( "background-image", "url(img/fonds/fond-" + singleValues + ".jpg)");
}

$( "select" ).change( displayVals );

displayVals();

//Pour changer le texte perso du cabinet

$( "#texte-perso" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".perso-face" ).text( value );
  })
  .keyup();

//perso 2

$( "#perso-cab-1" )
  .keyup(function() {
    var value = $( this ).val();
    $( "p.perso-cab-1" ).text( value );
  })
  .keyup();

  $( "#perso-cab-2" )
  .keyup(function() {
    var value = $( this ).val();
    $( "p.perso-cab-2" ).text( value );
  })
  .keyup();

  $( "#perso-cab-3" )
  .keyup(function() {
    var value = $( this ).val();
    $( "p.perso-cab-3" ).text( value );
  })
  .keyup();

    $( "#perso-cab-4" )
  .keyup(function() {
    var value = $( this ).val();
    $( "p.perso-cab-4" ).text( value );
  })
  .keyup();

  $( "#perso-cab-5" )
  .keyup(function() {
    var value = $( this ).val();
    $( "p.perso-cab-5" ).text( value );
  })
  .keyup();


