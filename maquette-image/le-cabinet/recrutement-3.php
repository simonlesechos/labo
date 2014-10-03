<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <title>Image v4 | Collaborateur comptable, en CDD</title>

    <link rel="stylesheet" href="../css/style.css" media="screen" type="text/css" />
</head>

<body class="pagebody-cab">
  <header class="main-header">
  <?php include('../includes/header.php'); ?> 
  </header>

  <div class="wrapper">

  <div class="header-page">
<div class="header-page-img img-nous-rejoindre">
    <div class="color-filter filter2">
            <div class="titre-page"><h1>Nous rejoindre</h1></div>
    </div>
  </div>
  </div>
  <?php include('../includes/menu-page.php'); ?> 
  <div class="content page-content">
    <div class="max-width">
      <div class="pres-cab">
        <h1 class="bigh1">Votre candidature spontanée</h1>        
          
          <p>Le cabinet LE NOM DU CABINET recrute régulièrement que ce soit pour nos bureaux d’Angoulême, de La Rochelle ou de Poitiers. Votre profil nous intéresse certainement même si aucune offre actuelle ne vous correspond.</p>
                  
          <p><strong>Déposez votre candidature spontanée. Nous l’étudierons avec intérêt !</strong></p>

          <form id="formulaire-recrutement1" class="formrecrute"  method="post" action="">
            <div class="form_description">
                <h2>Candidature</h2>
            </div>            
                <ul>
                      
                    <li id="li_1" >
                        <label class="description" for="element_1">e-Courriel</label>
                        <div>
                          <input id="element_1" name="element_1" class="element text large" type="text" maxlength="255" value=""/> 
                        </div> 
                    </li>   
                   
                   <li>
                        <label class="description" for="element_3">Nom</label>
                        <div>
                           <input name="element_3" class="element text large" type="text" maxlength="255" value=""/> 
                        </div> 
                    </li>

                    <li>
                        <label class="description" for="element_4">Prénom</label>
                        <div>
                           <input name="element_4" class="element text large" type="text" maxlength="255" value=""/> 
                        </div> 
                    </li>
                    
                    <li>
                        <label class="description" for="element_4">Téléphone</label>
                        <div>
                           <input name="element_4" class="element text large" type="text" maxlength="255" value=""/> 
                        </div> 
                    </li>
                    
                    <li>
                        <label class="description" for="element_4">Votre lettre de motivation</label>
                        <div>
                          <input type="file" name="lettre" />
                          <small>Format de fichiers : Word, pdf</small>
                          <small>Taille max : 2mo</small>
                        </div> 
                        <br>
                    </li>

                    <li>
                        <label class="description" for="element_4">Votre CV</label>
                        <div>
                          <input type="file" name="lettre" />
                          <small>Format de fichiers : Word, pdf</small>
                          <small>Taille max : 2mo</small>
                        </div> 
                        <br>
                    </li>

   
                      
                    <li class="buttons">
                          <input type="hidden" name="form_id" value="894548" />
                          
                        <input id="saveForm" class="button_text" type="submit" name="submit" value="Envoyer" />
                    </li>
                </ul>
        </form>       


         <a class="endpage-link" href="../le-cabinet.php">> Découvrir le cabinet LE NOM DU CABINET</a>
         <a class="endpage-link" href="nos-bureaux.php">> Nos bureaux</a>          
      </div>    
      <div class="clear"></div>
    </div>
    <?php include('../includes/newswidget.php');?>
    <?php include('../includes/footer.php'); ?>  
</div>


</body>

</html>