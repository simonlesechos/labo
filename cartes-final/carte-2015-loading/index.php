<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <title>Carte telechargement</title>

  <link rel="stylesheet" href="css/reset.css">

    <link rel="stylesheet" href="css/style.css" media="screen" type="text/css" />
    <link rel="stylesheet" href="../index.css" type="text/css" />  
</head>

<body>
<?php include('../menu-cartes.php');?>
<div class="carte-wrapper">

<div class="carte-groupe">
      

      <div class="perso-cabinet">
        <div class="perso1">
          <h3>Le nom du cabinet</h3>
          <br>
          <p>vous remercie de votre confiance témoignée au cours de l’année écoulée,</p> 
          <p>et vous présente ses meilleurs vœux pour cette nouvelle année.
          </p>
        </div>

      </div>
      
      <div class="carte-back">

          
              <div class="y2015-3">2015</div>
          
          
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
        <div class="y2015-bas">2015</div>
      </div>



       <div class="carte">
        
        <div class="y2015">2015</div>
        
          <div class='spinner-bars'>
            <div class='bar-1'></div>
            <div class='bar-2'></div>
            <div class='bar-3'></div>
            <div class='bar-4'></div>
            <div class='bar-5'></div>
            <div class='bar-6'></div>
            <div class='bar-7'></div>
            <div class='bar-8'></div>
            <div class='bar-9'></div>
            <div class='bar-10'></div>
            <div class='bar-11'></div>
            <div class='bar-12'></div>
            <div class='bar-13'></div>
            <div class='bar-14'></div>
            <div class='bar-15'></div>
            <div class='bar-16'></div>
            <div class='bar-17'></div>
            <div class='bar-18'></div>
            <div class='bar-19'></div>
            <div class='bar-20'></div>
            <div class='bar-21'></div>
            <div class='bar-22'></div>
            <div class='bar-23'></div>
            <div class='bar-24'></div>
            <div class='bar-25'></div>
            <div class='bar-26'></div>
            <div class='bar-27'></div>
            <div class='bar-28'></div>
            <div class='bar-29'></div>
            <div class='bar-30'></div>
            <div class='bar-31'></div>
            <div class='bar-32'></div>
            <div class='bar-33'></div>
            <div class='bar-34'></div>
            <div class='bar-35'></div>
            <div class='bar-36'></div>

            <span id="loader-text"></span>

         </div>


         <div class="text-group-face1">
            
           <div class="maj">Mise à jour de la nouvelle année</div>
           <div class="wait">Téléchargement en cours</div>
           <div class="waitcomplete">Téléchargement terminé</div>

         </div>
      </div><!-- Fin de la div '.carte' -->

      <!-- DERNIERE FACE -->
      <div class="perso-cabinet2">
        <div class="perso2">
          <div class="logo-cabinet">
            <img src="img/logofull-black.png">  
          </div>
          <h4>Pour en savoir plus :</h4>
          <p>Tél : 05 49 60 26 47</p>
          <p>Email : contact@expertinfos.com</p>
          <p>Web : www.expertinfos.com</p>
        </div>

      </div>
      <div class="couleur-bas2">
        <div class="telechargement2">
          Téléchargement terminé.
        </div>
      </div>

</div>

  


  </div><!-- Fin de la div .carte-wrapper -->

<section class="controls"><!-- Menu de selection des couoleurs -->
  <div class="colorspot col1" data-bg="#410038" data-color="#cadb2a" data-color2="#fff"></div>
  <div class="colorspot col2" data-bg="#118acb" data-color="#cadb2a" data-color2="#fff"></div>
  <div class="colorspot col3" data-bg="#575559" data-color="#6dcff6" data-color2="#fff"></div>
  <div class="colorspot col4" data-bg="#9d0520" data-color="#ffdd00" data-color2="#fff"></div>
  <div class="colorspot col5" data-bg="#f16531" data-color="#6dcff6" data-color2="#fff"></div>
  <div class="colorspot col6" data-bg="#87b964" data-color="#fff" data-color2="#231f20" data-color3="#231f20"></div>
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
    <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.13.1/TweenMax.min.js"></script>
    <script src='js/carte-loader.js'></script>
    <script src='js/totalstorage.js'></script>
    <script type="text/javascript" src="../ressources/menu-cartes.js"></script>
</body>

</html>