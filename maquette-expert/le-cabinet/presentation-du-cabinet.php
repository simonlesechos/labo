<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <title>Présentation du cabinet | Maquette Expert</title>

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
            <span><a href="../index.php">Accueil</a>/<a href="../le-cabinet/le-cabinet.php">Le cabinet</a>/ Présentation du cabinet</span>
          </div>  
        </div>

        <div class="span8 main-content-left">
          
        <section class="home-left-widget">
          <div class="left-widget-inner">
            <img src="<?php echo $img;?>image-cabinet1-notre-cabinet.jpg">
              <h1>Le Cabinet</h1>
              <div class="paceholder-big">               
                <p>Le nom du cabinet est une société d'expertise-comptable et de commissariat aux comptes implantée dans le département de la Vienne sur 3 sites : Poitiers, Chatellerault et Civray. Fort de plus de 600 clients, Le nom du cabinet intervient dans tous les secteurs d'activité : commerce, industrie, professions libérales, associations...
                <br />Le nom du cabinet est une société d'expertise-comptable et de commissariat aux comptes implantée dans le département de la Vienne sur 3 sites : Poitiers, Chatellerault et Civray. Fort de plus de 600 clients, Le nom du cabinet intervient dans tous les secteurs d'activité : commerce, industrie, professions libérales, associations...
                <br />Le nom du cabinet est dirigé par 2 experts-comptables et commissaires aux comptes, M. LASSOCIE1 et M. LASSOCIES2, entourés d'une équipe de 10 collaborateurs, juristes, comptables et experts qui sont à votre écoute pour vous conseiller, construire, développer.</p>
                <p>La conception que nous avons de notre métier est d’être proche de nos clients, sur le terrain, toujours à votre disposition. Chacun de nos clients a un interlocuteur unique qui les suit, se forme régulièrement pour être toujours au fait des évolutions impactant votre gestion, organise le recours à toutes nos autres compétences internes ou externes et sait se rendre disponible.</p>
              </div>
          </div>

                  <section class="autres-articles">
                        
                            <div class="article-list-title">
                             <h2 class="grey-title double-line-title"><span>A lire aussi</span></h2>
                            </div>
                             
                               
                                

                                   <article class="listed-article">
                                          <header>
                                            <a href="<?php echo $siteroot; ?>nos-missions/nos-missions.php"><img src="<?php echo $img;?>comptafiscal.jpg"/></a>
                                          </header>
                                          <div class="sidebar-article-title article-content">
                                              <a href="<?php echo $siteroot; ?>nos-missions/nos-missions.php"><h4>Nos Missions</h4></a>
                                              <div class="article-extrait">
                                                <p>Pour vous suivre et vous conseiller durant toute la vie de votre entreprise, le Cabinet LE NOM DU CABINET, met à votre disposition des compétences étendues et un savoir-faire spécifique en matière financière, fiscale, sociale, juridique, informatique et de gestion.</p>
                                              </div>
                                                <div class="sidebar-article-meta">
                                                  <a class="article-meta-link" href="<?php echo $siteroot; ?>nos-missions/nos-missions.php"><span class="article-date"><i class="icon-calendar"></i><small>15 septembre 2014</small></span></a>
                                                  
                                                </div>  
                                                <a href="<?php echo $siteroot; ?>nos-missions/nos-missions.php">Découvrir nos missions</a>
                                          </div>

                                    </article>  
 
                                  <article class="listed-article">
                                          <header>
                                            <a href="<?php echo $siteroot; ?>nos-missions/creation-entreprise.php"><img src="<?php echo $img;?>creation.jpg"/></a>
                                          </header>
                                          <div class="sidebar-article-title article-content">
                                              <a href="<?php echo $siteroot; ?>nos-missions/creation-entreprise.php"><h4>Création d’entreprise</h4></a>
                                              <div class="article-extrait">
                                                <p>Le Cabinet LE NOM DU CABINET accompagne la création de votre entreprise : plan de financement, formalités administratives, définition de votre statut, etc.</p>
                                              </div>
                                                <div class="sidebar-article-meta">
                                                  <a class="article-meta-link" href="<?php echo $siteroot; ?>nos-missions/creation-entreprise.php"><span class="article-date"><i class="icon-calendar"></i><small>15 septembre 2014</small></span></a>
                                                  
                                                </div>  
                                                <a href="<?php echo $siteroot; ?>nos-missions/creation-entreprise.php">En savoir plus la création d’entreprise</a>
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