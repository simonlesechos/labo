<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <title>Toutes les cartes</title>
  <link rel="stylesheet" href="../index.css" type="text/css" />  
  <link rel="stylesheet" href="../ressources/reset.css" />
  <link rel="stylesheet" href="toutes-les-cartes.css" />

</head>

<body>

<?php include('../menu-cartes.php');?>

<div class="toutes-header">
	<h1>Cartes de voeux 2015</h1>
</div>

	<div class="max-width">

		<div class="iframe-container">
			<div class="iframe-container-inner">
				<div class="iframe-overlay">
					<h2>Étoile</h2>
					<a href="../carte-2015-etoile/index.php">Voir la carte</a>
				</div>
				<iframe src="../carte-2015-etoile/index.php"></iframe>
			</div>
		</div>

		<div class="iframe-container">
			<div class="iframe-overlay">
				<h2>Téléchargement</h2>
				<a href="../carte-2015-loading/index.php">Voir la carte</a>
			</div>
			<iframe src="../carte-2015-loading/index.php"></iframe>
		</div>

		<div class="iframe-container">
			
			<div class="iframe-overlay">
			<h2>Aviateur</h2>
				<a href="../carte-2015-avion/index.php">Voir la carte</a>
			</div>
			<iframe src="../carte-2015-avion/index.php"></iframe>
		</div>


		<div class="iframe-container">
			
			<div class="iframe-overlay">
			<h2>Chiffres</h2>
				<a href="../carte-2015-chiffres/index.php">Voir la carte</a>
			</div>
			<iframe src="../carte-2015-chiffres/index.php"></iframe>
		</div>

		<div class="iframe-container">
			<div class="iframe-overlay">
			<h2>Typo</h2>
				<a href="../carte-2015-typo/index.php">Voir la carte</a>
			</div>
			<iframe src="../carte-2015-typo/index.php"></iframe>
		</div>

	</div>
  <script type="text/javascript" src="../ressources/jquery.js"></script>
  <script type="text/javascript" src="../ressources/menu-cartes.js"></script>

  <script type="text/javascript">
	$(document).ready(function() {
   $("iframe").each(function(){
      var ifr_source = $(this).attr('src');
      var wmode = "wmode=transparent";
      if(ifr_source.indexOf('?') != -1) $(this).attr('src',ifr_source+'&'+wmode);
      else $(this).attr('src',ifr_source+'?'+wmode);
	   });
	});

	</script>
	
</body>

</html>