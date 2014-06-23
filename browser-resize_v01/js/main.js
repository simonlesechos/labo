$(document).ready(function(){
		$('#iframe-container').addClass('tablette');
		$('#tablette').addClass('active');
		$('nav ul li a').mouseenter(function(){

			$(this).find('span').fadeIn(50);
		});

		$('nav ul li a').mouseleave(function(){

			$(this).find('span').fadeOut(150);
		});

		$('nav ul li a').click(function(){
				var format = $(this).attr('id');
				

				$('nav ul li a').not(this).removeClass('active');
    			$(this).toggleClass('active');
    			$('#iframe-container').removeClass().addClass(format);
    			
    			/*var sizelog = $('#iframe01').width();
    			$('.sizelog').remove();
    			$('body').append('<div class="sizelog">' + sizelog + '</div>');*/

				
			});

				$('#full').click(function(){
				$('#iframe-container').removeClass();
				
			});

			
		
		$( "#zone-texte" )
		.keyup(function() {
		var value = $( this ).val();
		$('#validation').click(function(){
			$( "#iframe01" ).attr('src', value);
		})
		
		});


		$('.close').click(function(){
			
		$('.top-menu-container').animate({left: '-1000px'}).fadeOut('fast');

		 	$('#menu-trigger2').fadeIn('fast');
		});


		$('#menu-trigger2').click(function(){
			$('.top-menu-container').css({left: '0px'}).fadeIn('fast');
				
			$('#menu-trigger2').fadeOut('fast');
		});




});//fin de document ready