<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <title>Comptabilité | Maquette Expert</title>

  <link href="css/bootstrap.css" rel="stylesheet" media="screen">
  <link href="css/expert.css" rel="stylesheet" media="screen">
 
</head>

<body class="page-contenu page">

<?php include('includes/header.php'); ?>

<section class="main-content">
    
    <div class="container">
      
      <div class="row">
        <div class="span12">
          <div class="fildarianne">
            <span><a href="../index.php">Accueil</a>/<a href="../nos-missions/nos-missions.php">Nos missions</a>/Comptabilité</span>
          </div>  
        </div>

        <div class="span8 main-content-left">
          
        <section class="home-left-widget">
<nav class="simulateurs-selector">
  <ul>
    <li class="active"><a href="#" data-select="*"><i class="icon-th-large"></i>Tout</a></li>
    <li><a href="#" data-select="fiscal"><i class="icon-briefcase"></i>Fiscal</a></li>
    <li><a href="#" data-select="juridique"><i class="icon-archive"></i>Juridique</a></li>
    <li><a href="#" data-select="social"><i class="icon-cogs"></i>Social</a></li>
  </ul>  
</nav>

  <div class="container simulateurs-container">
    <div class="row">
      <div class="span2 simulateur" data-classe="fiscal"><i class="icon-briefcase"></i></div>
      <div class="span2 simulateur" data-classe="social"><i class="icon-cogs"></i></div>
      <div class="span2 simulateur" data-classe="juridique"><i class="icon-archive"></i></div>
      <div class="span2 simulateur" data-classe="fiscal"><i class="icon-briefcase"></i></div>

      <div class="span2 simulateur" data-classe="fiscal"><i class="icon-briefcase"></i></div>
      <div class="span2 simulateur" data-classe="juridique"><i class="icon-archive"></i></div>
      <div class="span2 simulateur" data-classe="fiscal"><i class="icon-briefcase"></i></div>
      <div class="span2 simulateur" data-classe="social"><i class="icon-cogs"></i></div>

      <div class="span2 simulateur" data-classe="fiscal"><i class="icon-briefcase"></i></div>
      <div class="span2 simulateur" data-classe="juridique"><i class="icon-archive"></i></div>
      <div class="span2 simulateur" data-classe="fiscal"><i class="icon-briefcase"></i></div>
      <div class="span2 simulateur" data-classe="social"><i class="icon-cogs"></i></div>

    </div>
  </div>
   

                  <section class="autres-articles">
                        
                            <div class="article-list-title">
                             <h2 class="grey-title double-line-title"><span>Nos autres missions pour la gestion de votre entreprise</span></h2>
                            </div>
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
                                    <article class="listed-article">
                                          <header>
                                            <a href="<?php echo $siteroot; ?>nos-missions/creation-entreprise.php"><img src="<?php echo $img;?>creation.jpg"/></a>
                                          </header>
                                          <div class="sidebar-article-title article-content">
                                              <a href="<?php echo $siteroot; ?>nos-missions/creation-entreprise.php"><h4>Création d’entreprise</h4></a>
                                              <div class="article-extrait">
                                                <p>Le Cabinet LE NOM DU CABINET accompagne la création de votre entreprise : plan de financement, formalités administratives, définition de votre statut, etc. </p>
                                              </div>
                                                <div class="sidebar-article-meta">
                                                  <a class="article-meta-link" href="<?php echo $siteroot; ?>nos-missions/creation-entreprise.php"><span class="article-date"><i class="icon-calendar"></i><small>15 septembre 2014</small></span></a>
                                                  
                                                </div>  
                                                <a href="<?php echo $siteroot; ?>nos-missions/creation-entreprise.php">Découvrir notre assistance à la création</a>
                                          </div>
                                    </article> 
                                    
                  </section>
        </section>



    
        </div><!-- fin de .main-content-left -->
        
 <?php include('includes/sidebar-cabinet-missions.php'); ?>
      
      </div><!-- fin de .row -->
     
    </div><!-- fin de .container -->

</section><!-- fin de .main-content -->


<?php include('includes/footer.php'); ?>
</body>

</html>