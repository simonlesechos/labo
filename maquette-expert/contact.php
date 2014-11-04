<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <title>Contact | Maquette Expert</title>

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
            <span><a href="../index.php">Accueil</a>/ Contact</span>
          </div>  
        </div>

        <div class="span8 main-content-left">
          
          <section class="home-left-widget">

            <div class="left-widget-inner">

                <h1>Contact</h1>
                <p><strong>Le cabinet LE NOM DU CABINET  est à votre écoute. Pour nous interroger, merci de bien vouloir compléter les quelques éléments ci-dessous. Nous vous recontactons dans les 48h. N’hésitez-pas à commenter votre demande ou nous préciser ce que vous attendez du cabinet.</strong></p>
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

                        <!-- Text input-->
                        <div class="control-group">
                          <label class="control-label" for="telephone">Votre téléphone</label>
                          <div class="controls">
                            <input id="telephone" name="telephone" type="text" placeholder="Votre téléphone *" class="input-xlarge" required="">
                            
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
                          <label class="control-label" for="civilite">Vous souhaitez *</label>
                          <div class="controls">
                            <select id="civilite" name="civilite" class="input-xlarge">
                              <option>Vous souhaitez *</option>
                              <option>Des précisions sur une information diffusée sur ce site</option>
                              <option>Poser une question sur votre dossier client</option>
                              <option>Un devis pour votre projet</option>
                              <option>Prendre un rendez-vous</option>
                              <option>Autre</option>
                            </select>
                          </div>
                        </div>
                        
                        <!-- Textarea -->
                        <div class="control-group">
                          <label class="control-label" for="textarea">Vos commentaires éventuels, vos attentes</label>
                          <div class="controls">                     
                            <textarea id="textarea" name="textarea">Vos commentaires éventuels, vos attentes</textarea>
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
        
<?php include('includes/sidebar-home.php');?>
      
      </div><!-- fin de .row -->
     
    </div><!-- fin de .container -->

</section><!-- fin de .main-content -->



<?php include('includes/footer.php'); ?>
</body>

</html>