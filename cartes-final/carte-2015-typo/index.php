<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <title>Carte Typo</title>

  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/stylepercent.css" media="screen" type="text/css" />
  <link rel="stylesheet" href="../index.css" type="text/css" />
</head>

<body>
<?php include('../menu-cartes.php');?>
<div class="carte-wrapper">

<div class="carte-bg"></div>

  
   <div class="perso-cabinet">
   
          <h3>Le nom du cabinet</h3>
          <br>
     
          <p class="perso-cab-1">vous remercie de votre confiance témoignée au cours de l’année écoulée,</p>
          <p class="perso-cab-2">et vous présente ses meilleurs vœux pour cette nouvelle année.</p>
          <p class="perso-cab-3"></p>
          <p class="perso-cab-4"></p>
          <p class="perso-cab-5"></p>
         

    </div>

    <div class="carte-back">
         
     
 
          <div class="mots-back">
                <img src="img/textes/tout.png">
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
        
  <div class="y2015-bas">
    <img src="img/textes/2015.png">
  </div>
      
    </div>
   
    <div class="carte">
       <div class="perso-face">
          Notre cabinet Nom du cabinet
        </div>


 

          <div class="vous">
            <img src="img/textes/vous.png">
          </div>
          <div class="souhaite">
            <img src="img/textes/souhaite.png">
          </div>
          <div class="une">
            <img src="img/textes/une.png">
          </div>
          <div class="annee">
            <img src="img/textes/annee.png">
          </div>
          <div class="y2015">
            <img src="img/textes/2015.png">
          </div>
          <div class="innovante">
            <img src="img/textes/innovante.png">
          </div>
          <div class="agreable">
            <img src="img/textes/agreable.png">
          </div>
          <div class="foisonnante">
            <img src="img/textes/foisonnante.png">
          </div>
          <div class="palpitante">
            <img src="img/textes/palpitante.png">
          </div>
          <div class="gratifiante">
            <img src="img/textes/gratifiante.png">
          </div>
          <div class="exaltante">
            <img src="img/textes/exaltante.png">
          </div>
          <div class="brillante">
            <img src="img/textes/brillante.png">
          </div>
          <div class="triomphante">
            <img src="img/textes/triomphante.png">
          </div>
          <div class="petillante">
            <img src="img/textes/petillante.png">
          </div>
          <div class="epatante">
            <img src="img/textes/epatante.png">
          </div>
          <div class="performante">
            <img src="img/textes/performante.png">
          </div>
          <div class="etincelante">
            <img src="img/textes/etincelante.png">
          </div>
          <div class="poetique">
            <img src="img/textes/poetique.png">
          </div>
          <div class="attrayante">
            <img src="img/textes/attrayante.png">
          </div>
          <div class="passionnante">
            <img src="img/textes/passionnante.png">
          </div>
          <div class="merveilleuse">
            <img src="img/textes/merveilleuse.png">
          </div>
  
        
    </div><!-- Fin de la div ".carte" -->

    <!-- DERNIERE FACE -->
    <div class="perso-cabinet2">
        <div class="perso2">
          <div class="logo-cabinet">
            <img src="img/logofull2.png">  
          </div>
          <h4>Pour en savoir plus :</h4>
          <p>Tél : 05 49 60 20 60</p>
          <p>Email : contact@expertinfos.com</p>
          <p>Web : www.expertinfos.com</p>
        </div>

      </div>
      <div class="couleur-bas2">
      <div class="bandeau-texte">
        <img src="img/textes/bandeau-texte.png">
      </div>
      </div>


  </div><!-- Fin de la div .carte-wrapper -->

<!-- Menu pour controler les couleurs et les textes  -->
<div id="control-menu">
  <div class="close">
    <span class="cl-1"></span>
    <span class="cl-2"></span>
  </div>
  <button class="restart-btn">restart</button>
  <button class="reverse-btn">reverse</button>
  <button class="pause-btn">pause</button>
  <button class="play-btn">play</button>

  <form>
    <h2>Zone de test</h2>
    <p>Ctrl + F5 pour remettre à zéro</p>
      <fieldset>
        <label for="bgcolor-selector">Choisir l'arrière plan :</label>
        <br/>
        <select id="bgcolor-selector">
        <option>rouge</option>
        <option>beige</option>
        <option>bleu</option>
        <option>vert</option>
        <option>mauve</option>
        <option>jaune</option>
        <option>orange</option>
        <option>rose</option>
        </select>
      </fieldset>

      <fieldset>
        <h3>Perso face 1</h3>
        <label for"texte-perso">Texte personnalisé (face 1) :</label>
        <!--<input type="textarea" id="texte-perso" value="Notre cabinet..." size="35">-->
        <textarea id="texte-perso">Notre cabinet Nom du Cabinet</textarea>
      </fieldset>

      <fieldset>
      <h3>Perso face 2</h3>
        <label for"perso-cab-1">Texte perso (face 2 - 1) :</label>
        <!--<input type="textarea" id="texte-perso" value="Notre cabinet..." size="35">-->
        <textarea id="perso-cab-1">Ce modèle de carte de voeux est réalisé pour vous</textarea>
        
        <label for"perso-cab-2">Texte perso (face 2 - 2) :</label>
        <!--<input type="textarea" id="texte-perso" value="Notre cabinet..." size="35">-->
        <textarea id="perso-cab-2">En partenariat avec la Fondation de France,</textarea>

        <label for"perso-cab-3">Texte perso (face 2 - 3) :</label>
        <!--<input type="textarea" id="texte-perso" value="Notre cabinet..." size="35">-->
        <textarea id="perso-cab-3">EXPERT INFOS - LES ECHOS PUBLISHING</textarea>
        
        <label for"perso-cab-4">Texte perso (face 2 - 4) :</label>
        <!--<input type="textarea" id="texte-perso" value="Notre cabinet..." size="35">-->
        <textarea id="perso-cab-4">vous proposent une collection de cartes de voeux originales,
        </textarea>

        <label for"perso-cab-5">Texte perso (face 2 - 5) :</label>
        <!--<input type="textarea" id="texte-perso" value="Notre cabinet..." size="35">-->
        <textarea id="perso-cab-5"> solidaires et personnalisées avec vos logo, message et coordonées.
        </textarea>    
      
      </fieldset>

  </form>
</div>

<section class="controls"><!-- Menu de selection des couoleurs -->
  <div class="colorspot col1" data-bg="img/fonds/fond-rouge.jpg"></div>
  <div class="colorspot col2" data-bg="img/fonds/fond-vert.jpg"></div>
  <div class="colorspot col3" data-bg="img/fonds/fond-bleu.jpg"></div>
  <div class="colorspot col4" data-bg="img/fonds/fond-jaune.jpg"></div>
  <div class="colorspot col5" data-bg="img/fonds/fond-mauve.jpg"></div>
  <div class="colorspot col6" data-bg="img/fonds/fond-orange.jpg"></div>
  <div class="colorspot col7" data-bg="img/fonds/fond-beige.jpg"></div>
  <div class="colorspot col8" data-bg="img/fonds/fond-rose.jpg"></div>
  <div class="colreplay"></div>
  <div class="colplay hidden">
    <span></span>
  </div>
  <div class="colpause">
    <span class="colpause01"></span>
    <span class="colpause02"></span>
  </div>
  <!--<div class="colmenu"></div> bouton pour afficher ou cacher le menu de modifs complet-->
  <div class="colclose"></div>

</section><!-- Fin du menu de selection des couleurs -->


    <script src="js/jquery.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.13.1/TweenMax.min.js"></script>
    <script src='js/carte-typo.js'></script>
    <script type="text/javascript" src="../ressources/menu-cartes.js"></script>


</body>

</html>