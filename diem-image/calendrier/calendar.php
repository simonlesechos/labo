<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />

	<!-- Set the viewport width to device width for mobile -->
	<meta name="viewport" content="width=device-width" />

	<title>jQuery Event Calendar Demo Page</title>
	<link rel="shortcut icon" href="images/favicon.ico" />


	<!-- Core CSS File. The CSS code needed to make eventCalendar works -->
	<link rel="stylesheet" href="css-perso/eventCalendar.css">

	<!-- Theme CSS file: it makes eventCalendar nicer -->
	<link rel="stylesheet" href="css-perso/eventCalendar_theme_responsive.css">

	<!--<script src="js/jquery.js" type="text/javascript"></script>-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" type="text/javascript"></script>

</head>
<body id="responsiveDemo">

<div class="container">

			
	
				<h2 class="h4">Échéancier</h2>
				<p class="demoDesc">Toutes les dates à retenir pour les jours à venir</p>
				<!--
				<div class="calendarStyleSelector">
					<a class='full-cal'>Full-cal</a>
					<a class='just-days'>Just Days</a>	
				</div>-->

				
				<div id="eventCalendar-fullCal"></div>
				
				<!--<div id="eventCalendar-justDays"></div>-->
			

		
	
	
</div>




</body>

<!--script src="js/jquery.timeago.js" type="text/javascript"></script-->
<!--<script src="js/jquery.eventCalendar.min.js" type="text/javascript"></script>-->
<script src="js/moment.js" type="text/javascript"></script>
<!--script src="js/jquery.eventCalendar.js" type="text/javascript"></script-->
<script src="js/jquery.eventCalendar.js" type="text/javascript"></script>

<script type="text/javascript">
		$(document).ready(function() {
		
$('#eventCalendar-justDays').css('visibility', 'hidden');
/*		
					$("#eventCalendar-justDays").eventCalendar({
										eventsLimit: 10,
										eventsjson: 'json/events.json',
										monthNames: [ "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin",
											"Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre" ],
										dayNames: [ 'Dimanche','Lundi','Mardi','Mercredi',
											'Jeudi','Vendredi','Samedi' ],
										dayNamesShort: [ 'Dim','Lun','Mar','Mer', 'Jeu','Ven','Sam' ],
										txt_noEvents: "Il n'y a pas d'évènement à cette date",
										txt_SpecificEvents_prev: "",
										txt_SpecificEvents_after: "évènements :",
										txt_next: "suivant",
										txt_prev: "précédent",
										txt_NextEvents: "Prochains évènements:",
										txt_GoToEventUrl: "Aller à l'évènement",
										showDescription: true,
										showDayAsWeeks: false
																
									});
*/
				$("#eventCalendar-fullCal").eventCalendar({
										eventsLimit: 10,										
										eventsjson: 'json/events.json',
										monthNames: [ "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin",
											"Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre" ],
										dayNames: [ 'Dimanche','Lundi','Mardi','Mercredi',
											'Jeudi','Vendredi','Samedi' ],
										dayNamesShort: [ 'Dim','Lun','Mar','Mer', 'Jeu','Ven','Sam' ],
										txt_noEvents: "Il n'y a pas d'évènement à cette date",
										txt_SpecificEvents_prev: "",
										txt_SpecificEvents_after: "évènements :",
										txt_next: "suivant",
										txt_prev: "précédent",
										txt_NextEvents: "Prochains évènements:",
										txt_GoToEventUrl: "Aller à l'évènement",
										showDescription: true,
										showDayAsWeeks: true
																
									});

		});

		
		/*CODE SIMON  CODE SIMON  CODE SIMON  CODE SIMON  CODE SIMON  CODE SIMON  CODE SIMON  CODE SIMON  CODE SIMON*/

		$('.container').on('click','.just-days',function(event){

			event.preventDefault();
			
			console.log('non');
			$('#eventCalendar-fullCal').css('visibility', 'hidden').hide();
			$('#eventCalendar-justDays').css('visibility', 'visible');
			

		});




		$('.container').on('click','.full-cal',function(event){

			
			event.preventDefault();

			console.log('oui');
			$('#eventCalendar-fullCal').css('visibility', 'visible').show();
			$('#eventCalendar-justDays').css('visibility', 'hidden');

		});

		



					
</script>




</html>
