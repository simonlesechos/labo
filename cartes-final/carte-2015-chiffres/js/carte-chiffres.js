function resizer(){


        $('.chiffres').children().each(function(){
        var elemwidth = $(this).width();
        var elemheight = $(this).height();
        var contwidth = $('.chiffres').width();
        var contheight = $('.chiffres').height();
        
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


var tl = new TimelineMax({onComplete:timelineDone});
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();

//var eachdelay = 0.042; 

//tl.to($('.carte-bg'), 20, {scale: 1.1, ease: Power2.easeOut},0); remettre pour faire bouger lentement le background
tl.from($('.votre-expert'), 1.2, {left: "-100%", ease:Power2.easeOut});
tl.from($('.y2015'), 2.7, {bottom: "100%", scale:0, opacity:0, ease: Elastic.easeOut},0.5);
tl.from($('.ombre'), 0.7,{opacity:0, scaleX: 0.5, ease:Quad.easeOut},0.5);

/*$($('.chiffres div').get().reverse()).each(function(){



  tl3.from($(this), 0.5, {opacity:0, scale:0, ease: Power2.easeOut, delay: eachdelay});
  eachdelay-=0.005;
console.log(eachdelay);


});
*/
var rotation = Math.floor(Math.random() * 180) + 180;

tl.from($('.chiffre1'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Quad.easeOut}, 5.84);
tl.from($('.chiffre2'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 5.82);
tl.from($('.chiffre3'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Quad.easeOut}, 5.8);
tl.from($('.chiffre4'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 5.78);
tl.from($('.chiffre5'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Strong.easeOut}, 5.76);
tl.from($('.chiffre6'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 5.74);
tl.from($('.chiffre7'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 5.72);
tl.from($('.chiffre8'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 5.70);
tl.from($('.chiffre9'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Strong.easeOut}, 5.65);
tl.from($('.chiffre10'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 5.6);
tl.from($('.chiffre11'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Quad.easeOut}, 5.55);
tl.from($('.chiffre12'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Strong.easeOut}, 5.5);
tl.from($('.chiffre13'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 5.45);
tl.from($('.chiffre14'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 5.4);
tl.from($('.chiffre15'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Power2.easeOut}, 5.35);
tl.from($('.chiffre16'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 5.3);
tl.from($('.chiffre17'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 5.25);
tl.from($('.chiffre18'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 5.2);
tl.from($('.chiffre19'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Quad.easeOut}, 5.15);
tl.from($('.chiffre20'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 5.1);
tl.from($('.chiffre21'), 0.7, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 5);
tl.from($('.chiffre22'), 0.7, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 4.9);
tl.from($('.chiffre23'), 0.7, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 4.8);
tl.from($('.chiffre24'), 0.7, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 4.7);
tl.from($('.chiffre25'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Power2.easeOut}, 4.6);
tl.from($('.chiffre26'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 4.5);
tl.from($('.chiffre27'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 4.4);
tl.from($('.chiffre28'), 0.4, {opacity:0, scale:0, ease:Elastic.easeOut}, 4.2);
tl.from($('.chiffre29'), 0.4, {opacity:0, scale:0, ease:Quad.easeOut}, 4);
tl.from($('.chiffre30'), 0.4, {opacity:0, scale:0, ease:Elastic.easeOut}, 3.9);
tl.from($('.chiffre31'), 0.4, {opacity:0, scale:0, ease:Elastic.easeOut}, 3.8);
tl.from($('.chiffre32'), 0.4, {opacity:0, scale:0, ease:Elastic.easeOut}, 3.7);
tl.from($('.chiffre33'), 0.4, {opacity:0, scale:0, ease:Quad.easeOut}, 3.6);
tl.from($('.chiffre34'), 0.4, {opacity:0, scale:0, ease:Elastic.easeOut}, 3.4);
tl.from($('.chiffre35'), 0.4, {opacity:0, scale:0, ease:Elastic.easeOut}, 3.2);
tl.from($('.chiffre36'), 0.4, {opacity:0, scale:0, ease:Power2.easeOut}, 3);
tl.from($('.chiffre37'), 0.4, {opacity:0, scale:0, ease:Elastic.easeOut}, 2.8);
tl.from($('.chiffre38'), 0.5, {opacity:0, scale:0, ease:Power3.easeOut}, 2.5);
tl.from($('.chiffre39'), 0.6, {opacity:0, scale:0, ease:Elastic.easeOut}, 2);
tl.from($('.chiffre40'), 0.7, {opacity:0, scale:0, ease:Elastic.easeOut}, 1.5);
tl.from($('.chiffre41'), 0.7, {opacity:0, scale:0, left: "50%", ease:Power2.easeOut}, 1);

/*
tl.from($('.chiffre1'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Quad.easeOut}, 1);
tl.from($('.chiffre2'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 1.5);
tl.from($('.chiffre3'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Quad.easeOut}, 2);
tl.from($('.chiffre4'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 2.5);
tl.from($('.chiffre5'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Strong.easeOut}, 2.8);
tl.from($('.chiffre6'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 3);
tl.from($('.chiffre7'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 3.2);
tl.from($('.chiffre8'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 3.4);
tl.from($('.chiffre9'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Strong.easeOut}, 3.6);
tl.from($('.chiffre10'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 3.7);
tl.from($('.chiffre11'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Quad.easeOut}, 3.8);
tl.from($('.chiffre12'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Strong.easeOut}, 3.9);
tl.from($('.chiffre13'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 4);
tl.from($('.chiffre14'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 4.2);
tl.from($('.chiffre15'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Power2.easeOut}, 4.4);
tl.from($('.chiffre16'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 4.5);
tl.from($('.chiffre17'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 4.6);
tl.from($('.chiffre18'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 4.7);
tl.from($('.chiffre19'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Quad.easeOut}, 4.8);
tl.from($('.chiffre20'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 4.9);
tl.from($('.chiffre21'), 0.7, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 5);
tl.from($('.chiffre22'), 0.7, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 5.1);
tl.from($('.chiffre23'), 0.7, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 5.15);
tl.from($('.chiffre24'), 0.7, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 5.2);
tl.from($('.chiffre25'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Power2.easeOut}, 5.25);
tl.from($('.chiffre26'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 5.3);
tl.from($('.chiffre27'), 0.4, {opacity:0, scale:0, rotation: rotation, ease:Elastic.easeOut}, 5.35);
tl.from($('.chiffre28'), 0.4, {opacity:0, scale:0, ease:Elastic.easeOut}, 5.4);
tl.from($('.chiffre29'), 0.4, {opacity:0, scale:0, ease:Quad.easeOut}, 5.45);
tl.from($('.chiffre30'), 0.4, {opacity:0, scale:0, ease:Elastic.easeOut}, 5.5);
tl.from($('.chiffre31'), 0.4, {opacity:0, scale:0, ease:Elastic.easeOut}, 5.55);
tl.from($('.chiffre32'), 0.4, {opacity:0, scale:0, ease:Elastic.easeOut}, 5.6);
tl.from($('.chiffre33'), 0.4, {opacity:0, scale:0, ease:Quad.easeOut}, 5.65);
tl.from($('.chiffre34'), 0.4, {opacity:0, scale:0, ease:Elastic.easeOut}, 5.7);
tl.from($('.chiffre35'), 0.4, {opacity:0, scale:0, ease:Elastic.easeOut}, 5.72);
tl.from($('.chiffre36'), 0.4, {opacity:0, scale:0, ease:Power2.easeOut}, 5.74);
tl.from($('.chiffre37'), 0.4, {opacity:0, scale:0, ease:Elastic.easeOut}, 5.76);
tl.from($('.chiffre38'), 0.5, {opacity:0, scale:0, ease:Power3.easeOut}, 5.78);
tl.from($('.chiffre39'), 0.6, {opacity:0, scale:0, ease:Elastic.easeOut}, 5.8);
tl.from($('.chiffre40'), 0.7, {opacity:0, scale:0, ease:Elastic.easeOut}, 5.82);
tl.from($('.chiffre41'), 0.7, {opacity:0, scale:0, left: "50%", ease:Power2.easeOut}, 5.84);
*/
$('.chiffres div').each(function(){
  tl.to($(this), 3.7, {scale:0, ease: Strong.easeOut, delay: 0.2}, 10);
});

tl.to($('.carte .y2015'), 3.7, {scale:2, opacity:0, ease:Elastic.easeOut}, 11);
tl.to($('.carte .y2015 img'), 3.7, {scale:2, opacity:0, ease:Elastic.easeOut}, 11);



tl.to($('.couleur-bas'), 0.7, {bottom:0, ease: Strong.easeOut}, 12);
tl.to($('.perso-cabinet'), 0.7, {top: 0, ease: Strong.easeOut}, 12.2);
tl.from($('.y20152'), 1.7, {left: "-100%", ease: Bounce.easeOut }, 12.3);
tl.from($('.perso-cabinet h3'), 1.7, {top: "40px", opacity:0, ease: Power2.easeOut}, 12.5);
tl.from($('.perso-cabinet p'), 1.7, {top: "40px", opacity:0, ease: Power2.easeOut}, 12.6);


tl.to($('.carte-back'), 0.7, {top:0, ease: Quad.easeOut}, 22);
tl.to($('.carte-back .y2015'), 0.7, {bottom: "50%", scale:1, opacity:1, ease: Elastic.easeOut},22);
tl.to($('.carte-back .ombre'), 0.7,{bottom: "50%", opacity:1, scaleX: 1, ease:Quad.easeOut},22);
tl.from($('.fdf'), 0.7, {scale: 0, opacity: 0, ease: Strong.easeOut}, 23.7);
tl.from($('.fdf-desc'), 1.2, {opacity: 0, ease: Quad.easeOut}, 24.2);

tl.to($('.couleur-bas2'), 0.7, {bottom:0, ease: Strong.easeOut},30);
tl.to($('.perso-cabinet2'), 0.7, {top: 0, ease: Strong.easeOut},30.1);
tl.to($('.logo-cabinet'),0.7,{opacity:1, ease: Quad.easeOut}, 30.2);


tl.timeScale(1.1);//!!!remettre à 1.1!!!
tl2.timeScale(1);
//tl3.timeScale(5);
tl.pause();



$(document).ready(function(){
tl.play();
tl2.play();
});


$('.colreplay').click(function(){

  tl.restart();


});


$('.restart-btn').click(function(){

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
     tl2.restart();
   }, 7000);
     
}

//fermer le menu

$('.colclose').click(function(){
  $('.controls').fadeOut('fast');
});
