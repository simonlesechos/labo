<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <title>C'est fait | Maquette Expert</title>

  <link href="../css/bootstrap.css" rel="stylesheet" media="screen">
  <link href="../css/expert.css" rel="stylesheet" media="screen">
</head>

<body class="page-contenu page">

<?php include('includes/header.php');?>

<header class="accroche-rubrique">
    <h1>C’est fait !</h1>
    
    <h5>Votre demande au cabinet Nomducabinet a bien été envoyée. Nous vous remercions de nous avoir contactés.<br />
        Nous revenons vers vous dans les 48h. En attendant, nous vous invitons à continuer votre visite sur le site : retour à l’accueil</h5>
</header> 
<section class="main-content">
    
    <div class="container">
      
      <div class="row">
        <div class="span12">
          <div class="fildarianne">
            <span><a href="index.php">Accueil</a>/ C'est fait</span>
          </div>  
        </div>

        <div class="span8 main-content-left">
         
         <section class="home-article-alone home-left-widget">
            <article>             
                <div class="row">
                  <img class="span4" src="<?php echo $img;?>comptafiscal.jpg"/>
                  <div class="article-content span4">
                      <h3>Nos Missions</h3>
                      <p>Pour vous suivre et vous conseiller durant toute la vie de votre entreprise, le Cabinet LE NOM DU CABINET, met à votre disposition des compétences étendues et un savoir-faire spécifique en matière financière, fiscale, sociale, juridique, informatique et de gestion.</p>
                  </div>           
                 </div>
            </article>
            <a class="sectionlink buttonlink" href="<?php echo $siteroot; ?>nos-missions/nos-missions.php">Découvrir nos missions</a>
          </section><!-- fin de .home-article-alone -->

          <section class="home-article-alone home-left-widget">
                <article>
                  <div class="row">
                    <img class="span4" src="<?php echo $img;?>image-cabinet1-notre-cabinet.jpg"/>
                    <div class="article-content span4">
                      <h3>Le cabinet se présente</h3>
                      <p>Le nom du cabinet est une société d'expertise-comptable et de commissariat aux comptes implantée dans le département de la Vienne sur 3 sites : Poitiers, Chatellerault et Civray. Fort de plus de 600 clients, Le nom du cabinet intervient dans tous les secteurs d'activité : commerce, industrie, professions libérales, associations...</p>
                  </div>           
                 </div>
            </article>
            <a class="sectionlink buttonlink" href="<?php echo $siteroot; ?>le-cabinet/presentation-du-cabinet.php">Découvrir le cabinet</a>
          </section><!-- fin de .home-article-alone -->
    
        </div><!-- fin de .main-content-left -->
        
 <?php include('includes/sidebar-home.php');?>
      
      </div><!-- fin de .row -->
     
    </div><!-- fin de .container -->

</section><!-- fin de .main-content -->



<?php include('includes/footer.php'); ?>
</body>

</html>