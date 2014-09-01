//Fonction pour redimensionner dinamyquement les elements

function resizer(){


        $('.resizebox').children().each(function(){
        var elemwidth = $(this).width();
        var elemheight = $(this).height();
        var contwidth = $('.resizebox').width();
        var contheight = $('.resizebox').height();
        
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

$(window).resize(calculheight);
$(document).ready(calculheight);

function calculheight(){

    //calcul de la taille générale de l'anim :

    var wrapperheight = $('.anim-wrapper').width();
    var animheight = wrapperheight/3;


    //calcul de la taille de la police :
    var textheight = animheight/12 +'px';
    var lineheight = (animheight/11)+'px';
    var cabTextheigt = (animheight/9.75)+'px';   
    //mise a jour de la taille de l'anim
    $('.anim-wrapper').height(animheight);
    //mise à jour de la taille de la police
    $('.t-box').css('font-size', textheight);
    $('.t-box').css('line-height', lineheight);
    $('.cab-text').css('font-size', cabTextheigt);
    $('.cab-text').css('line-height', cabTextheigt);
    $('.cab-contact-btn').css('font-size', cabTextheigt);
    $('.cab-contact-btn').css('line-height', cabTextheigt);  
}


/////////////////////////////////////////////////////////////////////////////////////
//Animations//
/////////////////////////////////////////////////////////////////////////////////////
var tl = new TimelineMax();
var tl2 = new TimelineMax({onComplete: addClasses});
var tl3 = new TimelineMax({onComplete:timelineDone});
var c = 7;

$('.c-box').each(function(){
//var prev = $(this).prev('.c-box');
var last = $('.c-box:last-child');
c +=7;
var newpos = c+"%";
var n = Math.floor(Math.random() * 95) + 5;
var percent = n+'%';

tl.from($(this), 1.2, {left: percent, rotation: percent , top: '185%', scale:1.2, opacity:0, ease: Quad.easeOut, delay:0.4});
tl.to($(this), 0.7, {left: ""+newpos, scale: 0.5, opacity: 0.7, ease: Quad.easeOut, delay: 2});
});

$('.c-box').each(function(){

tl.to($(this), 0.3, {scale: 1, opacity: 1, top: "45%", ease: Quad.easeOut});
tl.to($(this), 0.3, {scale: 0.5, top: "55%", ease: Power2.easeOut});
});


$('.t-box').each(function(){

//var prev = $(this).prev('.t-box');

tl2.from($(this), 1, {opacity:0, scale:0, ease: Quad.easeOut, delay: 0.6});
tl2.to($(this), 0.5, {opacity:0, scale: 1.2, ease: Quad.easeOut, delay: 2.2});

});

$('.cab-text').each(function(){

  tl3.from($(this), 1.7, {opacity: 0, scale:0, ease: Strong.easeOut});
  tl3.to($(this), 0.7, {opacity: 0, scale:1.5, ease: Strong.easeOut, delay: 3});
});

tl3.to($('.cab-text.lasttext'), 0, {opacity:1, scale:1});

//tl3.to($('.overlay'),0.7, {opacity: 1});
tl3.to($('.cab-contact-btn'), 1.2, {opacity: 1, ease: Power2.easeOut});


tl.timeScale(4);
tl2.timeScale(4);
tl3.timeScale(2);

tl.pause();
tl2.pause();
tl3.pause()

$('.restart-btn').click(function(){

  tl.restart();


});

$('.reverse-btn').click(function(){

  tl.reverse();



});


$('.play-btn').click(function(){

 tl.play();
 tl2.play();


});

$('.pause-btn').click(function(){

  tl.pause();



});

function timelineDone() {
  setTimeout(function(){
     tl.restart();
     tl2.restart();
     tl3.restart();
   }, 7000);
     
}

function addClasses() {
$('.cab-text.lasttext').addClass('textanim');
$('.c-box').each(function(){
tl.to($(this), 0.7, {top: "80%", ease: Power2.easeOut});
});
}


$(document).ready(function(){

$('.cab-text.lasttext').removeClass('textanim');
  tl.play();
  tl2.play();
  tl3.play();

});


 ///////////////////////////////////////////////////////////////////////////


