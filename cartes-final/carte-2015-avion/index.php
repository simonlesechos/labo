<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <title>Carte Avion</title>

  <link rel="stylesheet" href="css/reset.css">

  <link rel="stylesheet" href="css/style.css" media="screen" type="text/css" />
  <link rel="stylesheet" href="fonts/stylesheet.css" type="text/css" />
  <link href='http://fonts.googleapis.com/css?family=Over+the+Rainbow|Amatic+SC' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="../index.css" type="text/css" />  
</head>

<body>
<?php include('../menu-cartes.php');?>
<div class="carte-wrapper">

<div class="carte-bg"></div>


  
   <div class="perso-cabinet">
   
          <h3>Le nom du cabinet</h3>
          <br>
          <p>vous remercie de votre confiance témoignée au cours de l’année écoulée, </p> 
          <p>et vous présente ses meilleurs vœux pour cette nouvelle année.
          </p>
      

    </div>

    <!-- FACE 3 -->
    <div class="carte-back">
        
        <div class="avion2">
        <img src="img/avion.png">

          <div class="helice">
            <img src="img/helice.png">
          </div>
                 
        </div>
          
          <div class="fdf-container">

              <div class="fdf">
                <div class="fdf-text">Fondation de France</div>
              </div>

              <div class="text-group-back">

                <div class="fdf-desc">
                   <p>Nous soutenons l'opération " Plus de chances pour l'emploi " menée avec la Fondation de France.</p>
                   <br/>
                   <a href="http://www.fondationdefrance.org" class="fdf-link" target="_blank">www.fondationdefrance.org</a>
                </div>

              </div>  

      </div>

      

      </div>

    <div class="couleur-bas">
        <div class="avion">
        <img src="img/avion.png">

          <div class="helice">
            <img src="img/helice.png">
          </div>
                 
        </div>

            <div class="votre-expert">
              <span class="expert-text expert-2">à vos côtés en</span>
              <div class="y2015">2015</div>
            </div>
    </div>

   <!-- FACE 1 -->
    <div class="carte">
    <div class="citation">
      <span class="cit-1">" Fais de ta vie un rêve,</span>
      <span class="cit-2"> et d'un rêve,</span>
      <span class="cit-3"> une réalité. "</span>
    </div>
    <div class="st-ex">
      Antoine de Saint-Exupéry
    </div>

    <div class="aviateur">
      <img src="img/aviateur.png">
    </div>

    <div class="votre-expert">
      <span class="expert-text expert-1">Votre expert comptable</span>

      <span class="expert-text expert-2">à vos côtés en</span>
      <div class="y2015">2015</div>
    </div>
        
    </div><!-- Fin de la div '.carte' (FACE 1)-->
 
    <!-- DERNIERE FACE -->
    <div class="perso-cabinet2">
        <div class="perso2">
          <div class="logo-cabinet">
            <img src="img/logofull2.png">  
          </div>
          <h4>Pour en savoir plus :</h4>
          <p>Tél : 05 49 60 26 47</p>
          <p>Email : contact@expertinfos.com</p>
          <p>Web : www.expertinfos.com</p>
        </div>

      </div>
      <div class="couleur-bas2">

      </div>

  </div><!-- Fin de la div .carte-wrapper -->

  <section class="controls"><!-- Menu de selection des couoleurs -->
 <div class="colreplay"></div>
  <div class="colplay hidden">
    <span></span>
  </div>
  <div class="colpause">
    <span class="colpause01"></span>
    <span class="colpause02"></span>
  </div>
  <div class="colclose"></div>

</section><!-- Fin du menu de selection des couleurs -->

    <script src="js/jquery.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
    <script src='js/carte-avion.js'></script>
    <script type="text/javascript" src="../ressources/menu-cartes.js"></script>


</body>

</html>