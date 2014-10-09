<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <title>Accueil | Maquette Expert</title>

  <link href="css/bootstrap.css" rel="stylesheet" media="screen">
  
 
</head>

<body>

<?php include('includes/header.php'); ?>

<section class="home-image">
  <div class="home-image-inner">

        <div class="home-image-left">
          
        </div>
        <div class="home-image-text">
          <h1 class="text-center">"Nos expertises au service de votre entreprise"</h1>
          <a href="nos-missions/nos-missions.php" class="btn home-image-btn">Découvrez nos services</a>
        </div>
      

  </div>
</section>

<section class="main-content">
    
    <div class="container">
      
      <div class="row">
        
        <div class="span8 main-content-left">
          
          <section class="home-article-group home-left-widget">
                <article class="article-vedette">
                  <header>
                    <img src="img/image-cabinet1-notre-cabinet.jpg"/>
                  </header>
                  <div class="article-content">
                      <h2>Le cabinet vous accueille</h2>
                       <p>Le nom du cabinet est une société d'expertise-comptable et de commissariat aux comptes implantée dans le département de la Vienne sur 3 sites : Poitiers, Chatellerault et Civray. Fort de plus de 600 clients, Le nom du cabinet intervient dans tous les secteurs d'activité : commerce, industrie, professions libérales, associations...</p>
                  </div>
                </article>          
                <a class="sectionlink buttonlink" href="<?php echo $siteroot; ?>le-cabinet/presentation-du-cabinet.php">Le cabinet</a>        
          </section><!-- fin de .home-article-group --> 

          <!--<section class="home-article-alone home-left-widget">
            <article>             
                <div class="row">
                  <img class="span4" src="img/expertises.jpg"/>
                  <div class="article-content span4">
                      <h3>Nos missions</h3>
                      <p>Pour vous suivre et vous conseiller durant toute la vie de votre entreprise, le Cabinet LE NOM DU CABINET, met à votre disposition des compétences étendues et un savoir-faire spécifique en matière financière, fiscale, sociale, juridique, informatique et de gestion.</p>
                    
                  </div>

                 </div>
                 <a class="sectionlink buttonlink" href="<?php echo $siteroot; ?>nos-missions/nos-missions.php">Découvrir nos missions</a>          
            </article>
           
          </section>-->


          <section class="home-article-alone home-left-widget">
            <article>             
                <div class="row">
                  <img class="span4" src="<?php echo $img;?>comptafiscal.jpg"/>
                  <div class="article-content span4">
                      <h3>Comptabilité</h3>
                      <p>Le NOM DU CABINET peut vous assister simplement dans la tenue de vos comptes ou prendre en charge l’ensemble de vos obligations comptables et fiscales.</p>                  
                  </div>           
                 </div>
            </article>
            <a class="sectionlink buttonlink" href="<?php echo $siteroot; ?>nos-missions/comptabilite.php">Découvrir notre expertise Comptabilité</a>
          </section><!-- fin de .home-article-alone -->

          <section class="home-article-alone home-left-widget">
            <article>             
                <div class="row">
                  <img class="span4" src="<?php echo $img;?>socialrh.jpg"/>
                  <div class="article-content span4">
                      <h3>Social et RH</h3>
                      <p>Le cabinet LE NOM DU CABINET suit le volet RH et social de votre entreprise depuis la gestion de la paie jusqu’à l’audit social mais peut également intervenir sur vos accords d’entreprise, assister vos embauches.</p>                  
                  </div>           
                 </div>
            </article>
            <a class="sectionlink buttonlink" href="<?php echo $siteroot; ?>nos-missions/social-rh.php">Découvrir notre expertise en social RH</a>
          </section><!-- fin de .home-article-alone -->

          <section class="home-article-alone home-left-widget">
            <article>             
                <div class="row">
                  <img class="span4" src="<?php echo $img;?>creation.jpg"/>
                  <div class="article-content span4">
                      <h3>Création d’entreprise</h3>
                      <p>Le Cabinet LE NOM DU CABINET accompagne la création de votre entreprise : plan de financement, formalités administratives, définition de votre statut, etc. </p>                  
                  </div>           
                 </div>
            </article>
            <a class="sectionlink buttonlink" href="<?php echo $siteroot; ?>nos-missions/creation-entreprise.php">En savoir plus la création d’entreprise</a>
          </section><!-- fin de .home-article-alone -->

          <section class="home-article-alone home-left-widget">
            <article>             
                <div class="row">
                  <img class="span4" src="<?php echo $img;?>conseil-gestion.jpg"/>
                  <div class="article-content span4">
                      <h3>Conseil et gestion</h3>
                      <p>Les collaborateurs du cabinet LE NOM DU CABINET assurent un suivi et une assistance à la performance de votre entreprise. Le cabinet LE NOM DU CABINET conçoit notamment pour vous des outils pour piloter votre activité : prévisionnels, tableaux de bord, suivi continu des indicateurs de rentabilité…</p>                  
                  </div>           
                 </div>
            </article>
            <a class="sectionlink buttonlink" href="<?php echo $siteroot; ?>nos-missions/conseil-gestion.php">Découvrir notre accompagnement</a>
          </section><!-- fin de .home-article-alone -->
        
        </div><!-- fin de .main-content-left -->
        
<?php include('includes/sidebar-home.php'); ?>
      
      </div><!-- fin de .row -->
     
    </div><!-- fin de .container -->

</section><!-- fin de .main-content -->

<?php include('includes/footer.php'); ?>


</body>

</html>