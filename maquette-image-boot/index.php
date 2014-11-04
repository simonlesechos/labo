<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, user-scalable=no">
  <title>Image v4</title>
 <link href="css/image.css" rel="stylesheet" media="screen">
</head>

<body class="homebody accueil-2">

  <div class="wrapper">
  <header class="main-header home-header">
    <?php include('includes/header.php'); ?>
  </header>

  <div class="bighead parallax" data-velocity="-.2">
        <div class="bighead-bg-container">
        <div class="brand">
        <i class="icon-star animateScale" style="font-size: 80px; color: white;"></i>
          <div class="logo">
            <img src="img/logofull-white.png"/>
            <h1>Le nom du cabinet</h1>
          </div>
        </div>
        <div class="scrollarrow">
          <div class="scrollbtn"></div>
          <div class="scrollshadow"></div>
        </div>
        <div class="filter"></div>
      </div>
  </div>



  <div class="content">
    <div class="full-width vedette-container">
      <div class="max-width">
              <h1 class="bigh1" id="topcontent">L’expertise de 170 collaborateurs au service de votre gestion</h1>
              <div class="vedette-content">
            
                  <div class="vedette-title">
                    <h2>Le Cabinet</h2>
                  </div>
          
                  <div class="vedette-img">
                    <img src="img/background-home3.jpg">
                  </div>
                  <div class="vedette-text">
                   
                    <p>Le cabinet Nomducabinet sont implantés à Paris et Poitiers depuis plus de 15 ans. Notre métier ? Assister et accompagner la gestion et le management des entreprises de nos clients.</p>
                  
                    <a class ="button" href="le-cabinet.php">En savoir plus sur notre cabinet</a>
                  </div>
                  <div class="clear"></div>
              </div>
      </div>
    </div>

    <div class="container">



    <div class="littlebox-container row">
            <div class="box littlebox littlebox1 span4">
                <div class="boxoverlay">
                    <div class="box-legend">
                      
                       <div class="box-title">
                          <h3>Nos expertises</h3>
            
                       </div>
                       <div class="preview">
                              <h4>Le cabinet accompagne le quotidien de votre entreprise en comptabilité, social et RH, fiscalité</h4>
                             
                              <a class ="button" href="nos-expertises.php">En savoir +</a>
                       </div> 
        
                  </div>
                </div> 


            </div>
            <div class="box littlebox littleboxBureaux span4">
                <div class="boxoverlay" href="#">
                    <div class="box-legend">
                      
                       <div class="box-title">
                          <h3>Nos bureaux</h3>
            
                       </div>
                       <div class="preview">
                              <h4>Le cabinet est présent sur 6 implantations en Poitou Charentes</h4>
                             <a class ="button" href="le-cabinet/nos-bureaux.php">En savoir +</a>
                             
                       </div> 
                    </div>                  

                </div>

                 
                 
            </div>
            <div class="box littlebox littleboxPratique span4">
                <div class="boxoverlay">
                    <div class="box-legend">
                      
                       <div class="box-title">
                          <h3>Votre information</h3>
            
                       </div>
                       <div class="preview">
                              <h4>Le cabinet vous informe de l'actualité gestion et management des entreprises : social, fiscal, juridique</h4>
                             
                              <a class ="button" href="pratique.php">En savoir +</a>
                       </div> 
        
                  </div>
                </div> 
            </div>
            <div class="box littlebox littleboxReferences span4">
                <div class="boxoverlay">
                    <div class="box-legend">
                      
                       <div class="box-title">
                          <h3>Références</h3>
            
                       </div>
                       <div class="preview">
                              <h4>Nos clients témoignent</h4>
                             
                              <a class ="button" href="le-cabinet/nos-clients-temoignent.php">En savoir +</a>
                       </div> 
        
                  </div>
                </div> 
            </div>

            <div class="box littlebox littleboxReseau span4">
                <div class="boxoverlay">
                    <div class="box-legend">
                      
                       <div class="box-title">
                          <h3>Notre réseau</h3>
            
                       </div>
                       <div class="preview">
                              <h4>Le cabinet s'appuie sur le maillage de compétences des cabinets membres du NOM DU GROUPEMENT</h4>
                             
                              <a class ="button" href="le-cabinet/notre-reseau.php">En savoir +</a>
                       </div> 
        
                  </div>
                </div> 
            </div>

            <div class="box littlebox littleboxActualite span4">
                <div class="boxoverlay">
                    <div class="box-legend">
                      
                       <div class="box-title">
                          <h3>L'actualité du cabinet</h3>
            
                       </div>
                       <div class="preview">
                              <h4>Le cabinet est en mouvement : portes ouvertes, nouveaux services, informations clients...</h4>
                             
                              <a class ="button" href="le-cabinet/actualite-du-cabinet.php">En savoir +</a>
                       </div> 
        
                  </div>
                </div> 
            </div>

      </div><!-- Fin de .littlebox-container -->
    </div>
  </div>
  <div class="carte-de-voeux">
  <a class="pull-left biglink" href="http://ec-commercial.expert-infos.com/carte-2015-etoile/index.php?ref=image"><strong>Bonne année 2015 !</strong><br>Découvrez notre carte de voeux animée....</a>
  <a class="pull-right" href="http://ec-commercial.expert-infos.com/carte-2015-etoile/index.php?ref=image"><img src="img/carte-miniature.jpg"></a>
  <div class="clear"></div>
  </div>
<?php include('includes/footer.php'); ?>
</div>


  <script>
  /*$('.navbar a').click(function(){
    var lien = $(this).attr('href');
      $('.wrapper').addClass('slideout');
      window.location.href = lien;
    });*/
    //$('.parallax').scrolly({bgParallax: true});
if ($('.bighead').height() < $(window).height()){
$('.bighead').css('height', $(window).height()+'px');
}
  </script> 

</body>

</html>