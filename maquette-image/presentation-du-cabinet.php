<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <title>Image v4 | Le Cabinet</title>

    <link rel="stylesheet" href="css/style.css" media="screen" type="text/css" />
</head>

<body class="pagebody-cab">
  <header class="main-header">
   <?php include('includes/header.php'); ?>

  </header>

  <div class="wrapper">

  <div class="header-page">
  <div class="header-page-img img-cabinet">
    <div class="color-filter filter2">
            <div class="titre-page"><h1>Présentation du cabinet</h1></div>
    </div>
  </div>
  </div>
  <?php include('includes/menu-page.php'); ?>
  <div class="content page-content">
    <div class="max-width">
      <div class="pres-cab">
        <h1 class="bigh1">Le NOM DU CABINET : technicité et proximité</h1>
          <img src="img/image-cabinet1-notre-cabinet.jpg">

          <p><strong>Le cabinet NOM DU CABINET développe depuis 1934 des expertises en accompagnement des entreprises : expertise comptable, expertise fiscale, sociale et ressources humaines, financement, création, transmission...</strong></p>
          <p>Nos 19 associés Experts Comptables et Commissaires aux Comptes inscrits au tableau de l'Ordre des Experts-Comptables, coordonnent le travail de près de 170 collaborateurs aujourd'hui. Notre valeur ajoutée est d'exiger pour chacun de nos clients une haute technicité dans les prestations que nous livrons, quelles qu'elles soient, de la tenue de comptes, aux missions spécifiques comme la transmission ou la responsabilité sociale, en passant par la gestion de la paie. Une technicité associée à une connaissance approfondie du tissu économique de la région Poitou-Charentes : nous comptons <a href="<?php echo $siteroot;?>/le-cabinet/nos-bureaux.php">6 bureaux</a> en région Poitou-Charentes (Poitiers, Angoulême, Melle, Bressiures, La Rochelle, Ruffec) qui assistent le développement de plus de 5000 entreprises, libéraux ou artisans. Nos clients attestent de la qualité de notre accompagnement et de notre proximité.</p>
          <p><a class="link-special link-special2" href="<?php echo $siteroot?>/le-cabinet/nos-clients-temoignent.php">Ils nous font  confiance</a></p>
          <p>Membre du groupement international NOM DU GROUPEMENT, nous nous appuyons aussi sur un réseau de 89 cabinets pour intervenir sur des besoins spécifiques avec les compétences adéquates et accompagner nos clients hors des frontières.</p>
      </div>
      <div class="clear"></div>
    </div>
    <div class="actu-page-widget colored-back">
    <h2>Dernières actualités du cabinet</h2>
    <div class="box-actu-container">
        <div class="box-actu">
          <div class="box-actu-img">
            <img src="img/actu1.jpg">
          </div>
          <div class="box-actu-excerpt">
            <h4>Le Cabinet est partenaire des créateurs (...)</h4>
            <p>Vous êtes partenaire d'événements ou de salons dans votre région? Faites-le savoir à vos clients et contacts en publiant l'information sur votre site Internet! Rendez-vous sur le (...)</p>
          </div>
          <a href="le-cabinet/actualite-1.php" class="button">En savoir +</a>
        </div>
         <div class="box-actu">
          <div class="box-actu-img">
            <img src="img/actu2.jpg">
          </div>
          <div class="box-actu-excerpt">
            <h4>Le Cabinet accueille un nouveau collaborateur</h4>
            <p>Vous voulez annoncer l'arrivée d'un nouveau collaborateur ? Vous venez de racheter un Cabinet ? Vous souhaitez proposer à vos clients une nouvelle offre de service ? Animez très (...)</p>
          </div>
          <a href="le-cabinet/actualite-2.php" class="button">En savoir +</a>
        </div>
         <div class="box-actu">
          <div class="box-actu-img">
            <img src="img/actu3.jpg">
          </div>
          <div class="box-actu-excerpt">
            <h4>Invitation à la réunion "Loi de finances"</h4>
            <p>Vous organisez une réunion spéciale "Loi de finances" pour vos clients? Diffusez l'information sur votre site Internet et proposez-leur de télécharger le programme ou le compte-rendu (...)</p>
          </div>
          <a href="le-cabinet/actualite-3.php" class="button">En savoir +</a>
        </div>

    </div>
  </div>
   <?php include('includes/footer.php'); ?> 
</div>


</body>

</html>