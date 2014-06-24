$(document).ready(function(){

		// Définition du premier format d'écran dans lequel le site s'affiche
		// Changer la classe de #iframe-container pour 'mobile', 'mPaysage' (mobile paysage), 'tPortrait' (tablette portrait) 
		// ou 'full' suivant le premier affichage souhaité.
		$('#tablette').addClass('active');//ajout de la class 'active' à l'icone tablette dans le menu
		$('#iframe-container').addClass('tablette'); 
		
		// Apparition / disparition des infos-bulle au survol des icones dans le menu de selection du type d'écran
		$('nav ul li a').mouseenter(function(){

			$(this).find('span').fadeIn(50);
		});

		$('nav ul li a').mouseleave(function(){

			$(this).find('span').fadeOut(150);
		});

		//Attribution d'un format d'écran en fonction du lien cliqué
		$('nav ul li a').click(function(){
				//Récupération de l'id du lien qu'on appelle 'format'
				var format = $(this).attr('id');
				
				$('nav ul li a').not(this).removeClass('active');
    			$(this).toggleClass('active');
    			// On enlève toutes les classes de la div '#iframe-container' 
    			// puis on y ajoute la classe issue de l'id récupérée dans 'format' 
    			$('#iframe-container').removeClass().addClass(format);
    			
    			
		});

		// Au clic sur l'icone "Écran de bureau" on enlève toutes les classes de '#iframe-container'
		// ce qui a pour effet de redonner à la section ses dimensions par défaut, soit 100% de la largeur de la fenêtre du navigateur 	
		$('#full').click(function(){
		
		$('#iframe-container').removeClass();
		
		});

		//Lorsque l'on tape du texte dans la zone input du formulaire
		//on récupère automatiquement ce que contient son attribut 'value'
		// et on le stocke dans une variable nommée value		
		$( "#zone-texte" )
		.keyup(function() {

		var value = $( this ).val();

			//Puis, au clic sur le Bouton 'TESTER' ('div#validation')
			//on injecte cette variable dans l'attribut 'src' de la balise <iframe>
			$('#validation').click(function(){
					$( "#iframe01" ).attr('src', value);
			})
		
		});

		// On ferme le menu en cliquant sur la croix ('div.close'), 
		// on le fait glisser rapidemment de 1000px sur la gauche
		// tout en faisant faire un fondu
		// on fait apparaitre le bouton Menu à la place en fondu aussi ('#menu-trigger2')
		$('.close').click(function(){
			
		$('.top-menu-container').animate({left: '-1000px'}).fadeOut('fast');

		 	$('#menu-trigger2').fadeIn('fast');
		});


		$('#menu-trigger2').click(function(){
			$('.top-menu-container').css({left: '0px'}).fadeIn('fast');
				
			$('#menu-trigger2').fadeOut('fast');
		});




});//fin de document ready