<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">

  <title>Maquette Image - Contact</title>

    <link rel="stylesheet" href="css/style.css" media="screen" type="text/css" />
</head>

<body class="pagebody contact">
  <header class="main-header contact-header">
   <?php include('includes/header.php'); ?>
  </header>

  <div class="wrapper">


  <div class="content">
    <div class="max-width">
      <h1 class="bigh1" id="topcontent">Contactez-nous</h1>
  		<form id="form_894548" class="appnitro"  method="post" action="">
					<div class="form_description">
			<h2>Laissez nous un message</h2>
			<p></p>
		</div>						
			<ul>
			
					<li id="li_1" >
		<label class="description" for="element_1">e-mail </label>
		<div>
			<input id="element_1" name="element_1" class="element text large" type="text" maxlength="255" value=""/> 
		</div> 
		</li>		<li id="li_2" >
		<label class="description" for="element_2">Votre message </label>
		<div class="text-area-container">
			<textarea id="element_2" name="element_2" class="element textarea medium"></textarea> 
		</div> 
		</li>
			
					<li class="buttons">
			    <input type="hidden" name="form_id" value="894548" />
			    
				<input id="saveForm" class="button_text" type="submit" name="submit" value="Envoyer" />
		</li>
			</ul>
		</form>	
    </div>
  </div>
<?php include('includes/footer.php'); ?>
</div>

  <script src='http://codepen.io/assets/libs/fullpage/jquery.js'></script>

  <script src="js/index.js"></script>


</body>

</html>