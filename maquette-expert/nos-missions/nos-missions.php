<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <title>Nos Missions | Maquette Expert</title>

  <link href="../css/bootstrap.css" rel="stylesheet" media="screen">
  <link href="../css/expert.css" rel="stylesheet" media="screen">
</head>

<body class="page-contenu page">

<?php include('../includes/header.php'); ?>
<header class="accroche-rubrique">
    <h1>Nos Missions </h1>
    <h5>Le cabinet d’expertise comptable LE NOM DU CABINET accompagne toute la gestion de votre entreprise de sa création à sa transmission : comptabilité, RH et social, patrimoine, fiscalité…</h5>
</header> 
<section class="main-content">
    
    <div class="container">
      
      <div class="row">
        <div class="span12">
          <div class="fildarianne">
            <span><a href="../index.php">Accueil</a>/Nos Missions</span>
          </div>  
        </div>

        <div class="span8 main-content-left">
         
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
                  <img class="span4" src="<?php echo $img;?>conseil-gestion.jpg"/>
                  <div class="article-content span4">
                      <h3>Conseil et gestion</h3>
                      <p>Les collaborateurs du cabinet LE NOM DU CABINET assurent un suivi et une assistance à la performance de votre entreprise. Le cabinet LE NOM DU CABINET conçoit notamment pour vous des outils pour piloter votre activité : prévisionnels, tableaux de bord, suivi continu des indicateurs de rentabilité…</p>
                  </div>           
                 </div>
            </article>
            <a class="sectionlink buttonlink" href="<?php echo $siteroot; ?>nos-missions/conseil-gestion.php">Découvrir notre accompagnement en Conseil et gestion</a>
          </section><!-- fin de .home-article-alone -->

          <section class="home-article-alone home-left-widget">
            <article>             
                <div class="row">
                  <img class="span4" src="<?php echo $img;?>creation.jpg"/>
                  <div class="article-content span4">
                      <h3>Création d’entreprise</h3>
                      <p>Le Cabinet LE NOM DU CABINET accompagne la création de votre entreprise : plan de financement, formalités administratives, définition de votre statut, etc.</p>
                  </div>           
                 </div>
            </article>
            <a class="sectionlink buttonlink" href="<?php echo $siteroot; ?>nos-missions/creation-entreprise.php">En savoir plus la création d’entreprise</a>
          </section><!-- fin de .home-article-alone -->
    
        </div><!-- fin de .main-content-left -->
        
   <?php include('../includes/sidebar-cabinet-missions.php'); ?>
      </div><!-- fin de .row -->
     
    </div><!-- fin de .container -->

</section><!-- fin de .main-content -->

<?php include('../includes/footer.php'); ?>
</body>

</html>