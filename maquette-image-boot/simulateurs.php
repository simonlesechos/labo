<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, user-scalable=no">
  <title>Image v4 | Pratique</title>

  <link rel="stylesheet" href="css/image.css" media="screen" type="text/css" />
</head>

<body class="pagebody pratique">
  <header class="main-header">
<?php include('includes/header.php'); ?>
  </header>

  <div class="wrapper">
  <div class="header-page">
    <div class="header-page-img">
      <div class="color-filter">
              <div class="titre-page"><h1>Votre information</h1><h2 class="bigh2">Le monde du chef d’entreprise : actualités, dossiers, simulateurs…</h2></div>
      </div>
    </div>
  </div>
    <?php include('includes/menu-basedoc.php'); ?>
  <div class="content">

    <div class="max-width">
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
      <div class="span3 simulateur" data-classe="fiscal"><i class="icon-briefcase"></i></div>
      <div class="span3 simulateur" data-classe="social"><i class="icon-cogs"></i></div>
      <div class="span3 simulateur" data-classe="juridique"><i class="icon-archive"></i></div>
      <div class="span3 simulateur" data-classe="fiscal"><i class="icon-briefcase"></i></div>

      <div class="span3 simulateur" data-classe="fiscal"><i class="icon-briefcase"></i></div>
      <div class="span3 simulateur" data-classe="juridique"><i class="icon-archive"></i></div>
      <div class="span3 simulateur" data-classe="fiscal"><i class="icon-briefcase"></i></div>
      <div class="span3 simulateur" data-classe="social"><i class="icon-cogs"></i></div>

      <div class="span3 simulateur" data-classe="fiscal"><i class="icon-briefcase"></i></div>
      <div class="span3 simulateur" data-classe="juridique"><i class="icon-archive"></i></div>
      <div class="span3 simulateur" data-classe="fiscal"><i class="icon-briefcase"></i></div>
      <div class="span3 simulateur" data-classe="social"><i class="icon-cogs"></i></div>

    </div>
  </div>

    </div>
  </div>
<?php include('includes/footer.php'); ?> 
</div>


</body>

</html>

