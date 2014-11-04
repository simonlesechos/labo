<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <title>Newsletter | Maquette Expert</title>

  <link href="../css/bootstrap.css" rel="stylesheet" media="screen">
  <link href="../css/expert.css" rel="stylesheet" media="screen">
 
</head>

<body class="page-formulaire page">

<?php include('includes/header.php');?>

<section class="main-content">
    
    <div class="container">
      
      <div class="row">
        <div class="span12">
          <div class="fildarianne">
            <span><a href="../index.php">Accueil</a>/ Newsletter</span>
          </div>  
        </div>

        <div class="span8 main-content-left">
          
          <section class="home-left-widget">

            <div class="left-widget-inner">

                <h1>Newsletter, votre information</h1>
                <p><strong>Le cabinet LE NOM DU CABINET édite une synthèse de votre actualité professionnelle : nouvelles réglementations, tendances, patrimoine, etc.
                  <br />Pour vous abonner gratuitement à ce service, merci de bien vouloir compléter les quelques éléments ci-dessous.</strong></p>
                <div class="formulaire">
                    <form class="form-horizontal">
                        <fieldset>

                        <!-- Form Name -->
                        <!-- <legend>N'hésitez pas à nous laisser un message</legend>-->

                        <!-- Text input-->
                        <div class="control-group">
                          <label class="control-label" for="E-mail">Votre e-mail</label>
                          <div class="controls">
                            <input id="E-mail" name="E-mail" type="text" placeholder="Votre email *" class="input-xlarge" required="">
                            
                          </div>
                        </div>

                        <!-- Select Basic -->
                        <div class="control-group">
                          <label class="control-label" for="civilite">Votre activité *</label>
                          <div class="controls">
                            <select id="civilite" name="civilite" class="input-xlarge">
                              <option>Votre activité *</option>
                              <option>Artisan</option>
                              <option>Commerçant</option>
                              <option>Entreprise de service</option>
                              <option>Profession libérale</option>
                              <option>Autre</option>
                            </select>
                          </div>
                        </div>

                        <!-- Select Basic -->
                        <div class="control-group">
                          <label class="control-label" for="civilite">Etes-vous déjà client ? *</label>
                          <div class="controls">
                            <select id="civilite" name="civilite" class="input-xlarge">
                              <option>Etes-vous déjà client ? Oui</option>
                              <option>Etes-vous déjà client ? Non</option>
                            </select>
                          </div>
                        </div>

                        <!-- Select Basic -->
                        <div class="control-group">
                          <label class="control-label" for="civilite">Fréquence de réception de la newsletter *</label>
                          <div class="controls">
                            <select id="civilite" name="civilite" class="input-xlarge">
                              <option>Fréquence de réception de la newsletter *</option>
                              <option>Chaque semaine</option>
                              <option>Tous les 15 jours</option>
                              <option>Une fois par mois</option>
                            </select>
                          </div>
                        </div>

                        <!-- Select Basic -->
                        <div class="control-group">
                          <label class="control-label" for="civilite">Civilité *</label>
                          <div class="controls">
                            <select id="civilite" name="civilite" class="input-xlarge">
                              <option>Monsieur</option>
                              <option>Madame</option>
                              <option>Mademoiselle</option>
                            </select>
                          </div>
                        </div>

                        <!-- Text input-->
                        <div class="control-group">
                          <label class="control-label" for="Votre nom">Nom *</label>
                          <div class="controls">
                            <input id="Votre nom" name="Votre nom" type="text" placeholder="Nom *" class="input-xlarge" required="">
                            
                          </div>
                        </div>

                        <!-- Text input-->
                        <div class="control-group">
                          <label class="control-label" for="prenom">Prénom</label>
                          <div class="controls">
                            <input id="prenom" name="prenom" type="text" placeholder="Prénom" class="input-xlarge" required="">
                            
                          </div>
                        </div>

                        <!-- Select Basic -->
                        <div class="control-group">
                          <label class="control-label" for="civilite">Voulez-vous être invité à nos événements</label>
                          <div class="controls">
                            <select id="civilite" name="civilite" class="input-xlarge">
                              <option>Voulez-vous être invité à nos événements</option>
                              <option>Oui</option>
                              <option>Non</option>
                            </select>
                          </div>
                        </div>

                        <!-- Button -->
                        <div class="control-group">
                         
                          <div class="controls btn-controls">
                            <button id="Envoyer" name="Envoyer" class="btn home-image-btn">Envoyer</button>
                          </div>
                        </div>

                        </fieldset>
                    </form>

                </div><!-- Fin de la div.fomulaire -->
            </div><!-- Fin de la div.left-widget-inner -->
           
               
          
          </section><!-- fin de .article-unique -->
    
        </div><!-- fin de .main-content-left -->
        
        <div class="span4 pull-right sidebar">

          <section class="sidebar-video">
            <h2 class="grey-title double-line-title"><span>Vidéo</span></h2>
            <article>
                  <header class="video-header">
                    <img src="img/video.jpg"/>

                  </header>
                  <div class="article-content">
                    <h4>Actualité comptable</h4>
                    <p>Le cabinet accompagne au quotidien vos projets d’ entreprise</p>
                  </div>
            </article>
          </section>

          <section class="sidebar-contact">
            <h2 class="grey-title double-line-title"><span>Notre mission sociale</span></h2>
            <article>

                  <div class="article-content">
                    
                    <p>Notre cabinet vous assiste dans la gestion de la vie de vos salariés : étude et rédaction des contrats de travail, établissement des bulletins de paie, conseils en matière de rémunération...</p>
                     <a href="#" class="btn home-image-btn">Contactez-nous</a>
                  </div>
            </article>
          </section>

          <h2 class="grey-title double-line-title"><span>Votre fil d'actualité</span></h2>
          <section class="sidebar-news">
              
              <article class="sidebar-article sidebar-block">
                  <header>
                    <a href="#"><img src="img/miniature04.jpg"/></a>
                  </header>
                  <div class="sidebar-article-title article-content">
                      <a href="#"><h4>Retard de livraison d’un bien : le consommateur devra relancer le professionnel !</h4>

                      <div class="sidebar-article-meta">
                        <a class="article-meta-link" href="#"><span class="article-date"><i class="icon-calendar"></i><small>15 septembre 2014</small></span></a>
                        <a class="article-meta-link" href="#"><span class="article-comment-number"><i class="icon-comments"></i><small>10 commentaires</small></span></a>
                      </div>

                  </div>

              </article> 

              <article class="sidebar-article">
                  <header>
                    <a href="#"><img src="img/miniature02.jpg"/></a>
                  </header>
                  <div class="sidebar-article-title article-content">
                      <a href="#"><h4>Prévoyance et retraite d’entreprise : salariés et mandataires sociaux sur un pied d’égalité !</h4></a>

                        <div class="sidebar-article-meta">
                          <a class="article-meta-link" href="#"><span class="article-date"><i class="icon-calendar"></i><small>15 septembre 2014</small></span></a>
                          <a class="article-meta-link" href="#"><span class="article-comment-number"><i class="icon-comments"></i><small>10 commentaires</small></span></a>
                        </div>  

                  </div>

              </article> 

          <section class="sidebar-simulateurs">
            <h2 class="grey-title double-line-title"><span>Simulateurs financiers</span></h2>
            <article>

                  <div class="article-content">
                    
                    <p>Valeur acquise par un capital placé à intérêts composés pendant une durée déterminée</p>
                     
                  </div>
                  <div class="sidebar-article-meta article-meta">
                          <a class="article-meta-link" href="#"><span class="article-date"><i class="icon-calendar"></i><small>15 septembre 2014</small></span></a>
                          <a class="article-meta-link" href="#"><span class="article-comment-number"><i class="icon-comments"></i><small>10 commentaires</small></span></a>
                  </div>   
            </article>
          </section>

          </section>


        </div><!-- fin de .sidebar -->
      
      </div><!-- fin de .row -->
     
    </div><!-- fin de .container -->

</section><!-- fin de .main-content -->



<?php include('includes/footer.php'); ?>
</body>

</html>