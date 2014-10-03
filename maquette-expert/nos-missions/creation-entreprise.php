<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <title>Création d’entreprise | Maquette Expert</title>

  <link href="../css/bootstrap.css" rel="stylesheet" media="screen">
  <link href="../css/expert.css" rel="stylesheet" media="screen">
 
</head>

<body class="page-contenu page">

<?php include('../includes/header.php'); ?>

<section class="main-content">
    
    <div class="container">
      
      <div class="row">
        <div class="span12">
          <div class="fildarianne">
            <span><a href="../index.php">Accueil</a>/<a href="../nos-missions/nos-missions.php">Nos missions</a>/Création d’entreprise</span>
          </div>  
        </div>

        <div class="span8 main-content-left">
          
        <section class="home-left-widget">
          <div class="left-widget-inner">
            <img src="<?php echo $img;?>creation.jpg">
              <h1>Création d’entreprise</h1>
              <div class="paceholder-big">               
                <p>Les collaborateurs du cabinet LE NOM DU CABINET  vous assistent dès le démarrage de votre projet de création d’entreprise</p> 
                  <ul>
                    <li>Analyse secteur d'activité&nbsp;;</li>
                    <li>Choix de la forme juridique&nbsp;;</li>
                    <li>Régime fiscal du chef d'entreprise&nbsp;;</li>
                    <li>Régime social du chef d'entreprise&nbsp;;</li>
                    <li>Business plan&nbsp;;</li>
                    <li>Financement (choix des modes de financement, recherches d'aides à la création)&nbsp;;</li>
                    <li>Formalités de création&nbsp;;</li>
                    <li>Etablissement d'un plan comptable adapté à l'entreprise.</li>
                  </ul>
             </div>
          </div>

                  <section class="autres-articles">
                        
                            <div class="article-list-title">
                             <h2 class="grey-title double-line-title"><span>Nos autres missions pour la gestion de votre entreprise</span></h2>
                            </div>
                                   <article class="listed-article">
                                          <header>
                                            <a href="<?php echo $siteroot; ?>nos-missions/comptabilite.php"><img src="<?php echo $img;?>comptafiscal.jpg"/></a>
                                          </header>
                                          <div class="sidebar-article-title article-content">
                                              <a href="<?php echo $siteroot; ?>nos-missions/comptabilite.php"><h4>Comptabilité</h4></a>
                                              <div class="article-extrait">
                                                <p>Le NOM DU CABINET peut vous assister simplement dans la tenue de vos comptes ou prendre en charge l’ensemble de vos obligations comptables et fiscales.</p>
                                              </div>
                                                <div class="sidebar-article-meta">
                                                  <a class="article-meta-link" href="<?php echo $siteroot; ?>nos-missions/comptabilite.php"><span class="article-date"><i class="icon-calendar"></i><small>15 septembre 2014</small></span></a>
                                                  
                                                </div>  
                                                <a href="<?php echo $siteroot; ?>nos-missions/comptabilite.php">Découvrir notre expertise Comptabilité</a>
                                          </div>

                                    </article> 
                                    <article class="listed-article">
                                          <header>
                                            <a href="<?php echo $siteroot; ?>nos-missions/social-rh.php"><img src="<?php echo $img;?>socialrh.jpg"/></a>
                                          </header>
                                          <div class="sidebar-article-title article-content">
                                              <a href="<?php echo $siteroot; ?>nos-missions/social-rh.php"><h4>Social et RH</h4></a>
                                              <div class="article-extrait">
                                                <p>Le cabinet LE NOM DU CABINET suit le volet RH et social de votre entreprise depuis la gestion de la paie jusqu’à l’audit social mais peut également intervenir sur vos accords d’entreprise, assister vos embauches.</p>
                                              </div>
                                                <div class="sidebar-article-meta">
                                                  <a class="article-meta-link" href="<?php echo $siteroot; ?>nos-missions/social-rh.php"><span class="article-date"><i class="icon-calendar"></i><small>15 septembre 2014</small></span></a>
                                                  
                                                </div>  
                                                <a href="<?php echo $siteroot; ?>nos-missions/social-rh.php">Découvrir notre expertise en social RH</a>
                                          </div>

                                    </article>   
 
                                  <article class="listed-article">
                                          <header>
                                            <a href="<?php echo $siteroot; ?>nos-missions/conseil-gestion.php"><img src="<?php echo $img;?>conseil-gestion.jpg"/></a>
                                          </header>
                                          <div class="sidebar-article-title article-content">
                                              <a href="<?php echo $siteroot; ?>nos-missions/conseil-gestion.php"><h4>Conseil et gestion</h4></a>
                                              <div class="article-extrait">
                                                <p>Les collaborateurs du cabinet LE NOM DU CABINET assurent un suivi et une assistance à la performance de votre entreprise. Le cabinet LE NOM DU CABINET conçoit notamment pour vous des outils pour piloter votre activité : prévisionnels, tableaux de bord, suivi continu des indicateurs de rentabilité…</p>
                                              </div>
                                                <div class="sidebar-article-meta">
                                                  <a class="article-meta-link" href="<?php echo $siteroot; ?>nos-missions/conseil-gestion.php"><span class="article-date"><i class="icon-calendar"></i><small>15 septembre 2014</small></span></a>
                                                  
                                                </div>  
                                                <a href="<?php echo $siteroot; ?>nos-missions/conseil-gestion.php">Découvrir notre accompagnement</a>
                                          </div>
                                    </article> 
                                    
                  </section>
        </section>



    
        </div><!-- fin de .main-content-left -->
        
  <?php include('../includes/sidebar-cabinet-missions.php'); ?>
      
      </div><!-- fin de .row -->
     
    </div><!-- fin de .container -->

</section><!-- fin de .main-content -->


<?php include('../includes/footer.php'); ?>
</body>

</html>