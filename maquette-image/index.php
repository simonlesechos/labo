<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">

  <title>Maquette Image - Accueil</title>

    <link rel="stylesheet" href="css/style.css" media="screen" type="text/css" />

</head>

<body class="homebody accueil-2">

  <div class="wrapper">
  <header class="main-header home-header">
    <?php include('includes/header.php'); ?>
  </header>

  <div class="bighead">
    <div class="brand">
      <div class="logo">
        <img src="img/logofull-white.png"/>
        <h1>Le nom du cabinet</h1>
      </div>
    </div>
    <div class="filter"></div>
  </div>
  <div class="scrollbtn"></div>
  <div class="scrollshadow"></div>
  <div class="content">
    <div class="max-width">
      <h1 class="bigh1" id="topcontent">Class aptent taciti sociosqu ad litora.</h1>
      <div class="box bigbox">
          <div class="bigbox-slider">
            <div class="bigbox-title">
              <h2>Le Cabinet</h2>
            </div>
          </div>

            <div class="preview">
              <h2>Le Cabinet</h2>
              <p>Le cabinet Nomducabinet sont implantés à Paris et Poitiers depuis plus de 15 ans. Notre métier ? Assister et accompagner la gestion et le management des entreprises de nos clients.</p>
              <p>29 collaborateurs ont pour objectif de faciliter votre quotidien de chef d'entreprise. Nous prenons en charge toutes les tâches administratives qui vous prennent trop de temps et vous empêchent de vous concentrer sur le cœur de votre métier.</p>
              

              <a class ="button" href="le-cabinet.php">En savoir plus sur notre cabinet</a>
            </div>
        </div>



      <div class="box littlebox littlebox1">
         <h3>Nos expertises</h3>
         <div class="boxoverlay">
           <div class="preview">
                <h4>Vos solutions comptables dédiées</h4>
                <p>Votre société a moins d’un an. Vous avez besoin d’assurer une comptabilité simple et professionnelle. Le cabinet Nomducabinet vous accompagne avec une formule spécifique à la cré (...)</p>
                <button>En savoir +</button>
           </div> 
         </div>
      </div>
      <div class="box littlebox littleboxBureaux">
         <h3>Nos bureaux</h3>
         <div class="boxoverlay">
           <div class="preview">
                <h4>Nos bureaux</h4>
                <p>Ut velit tellus, porttitor id dapibus at, ultricies eget tellus. Fusce bibendum consequat malesuada. Integer tempus pharetra mattis. Etiam quis arcu non turpis pharetra vestibulum (...)</p>
                <a class ="button" href="le-cabinet/nos-bureaux.php">En savoir +</a>
           </div> 
         </div>
      </div>
      <div class="box littlebox littleboxPratique">
         <h3>Pratique</h3>
         <div class="boxoverlay">
           <div class="preview">
                <h4>Pratique</h4>
                <p>Ut velit tellus, porttitor id dapibus at, ultricies eget tellus. Fusce bibendum consequat malesuada. Integer tempus pharetra mattis. Etiam quis arcu non turpis pharetra vestibulum (...)</p>
                <button>En savoir +</button>
           </div> 
         </div>
      </div>
      <div class="box littlebox littlebox2 littlebox-size50">
         <h3>Votre actualité</h3>
          <div class="actu-mini-container">
          <!--Actu 1-->
            <div class="actu-mini">
              <div class="actu-mini-thumb"></div>
              <div class="actu-mini-text">
                <h2>Le Cabinet est partenaire des créateurs (...)</h2>
                <p>Vous êtes partenaire d'événements ou de salons dans votre région? Faites-le savoir à vos clients et contacts en publiant l'information sur votre site Internet! Rendez-vous sur le (...)</p>
              </div>
 
            </div>

            <!--Actu 2-->
            <div class="actu-mini">
              <div class="actu-mini-thumb"></div>
              <div class="actu-mini-text">
                <h2>Le Cabinet accueille un nouveau collaborateur</h2>
                <p>Vous voulez annoncer l'arrivée d'un nouveau collaborateur ? Vous venez de racheter un Cabinet ? Vous souhaitez proposer à vos clients une nouvelle offre de service ? Animez très (...)</p>
              </div>
 
            </div>
            
            <!--Actu 3-->
            <div class="actu-mini">
              <div class="actu-mini-thumb"></div>
              <div class="actu-mini-text">
                <h2>Invitation à la réunion "Loi de finances"</h2>
                <p>Vous organisez une réunion spéciale "Loi de finances" pour vos clients? Diffusez l'information sur votre site Internet et proposez-leur de télécharger le programme ou le compte-rendu (...)</p>
              </div>
 
            </div>
          </div>
            <div class="actu-mini">
              <div class="icon-round"></div>
              <h2>Lorem Ipsum</h2>
              <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin congue neque mauris. Proin pellentesque nisi et nisl pharetra tempus.</p>
              <button>En savoir +</button>
            </div>

      </div>
      <!-- <div class="box littlebox littlebox4">
       <h3>Nos clients témoignent</h3>
         <div class="boxoverlay"></div>
      </div> -->
     <!--  <div class="box littlebox littlebox5">
       <h3>Nous recrutons</h3>
         <div class="boxoverlay"></div>
      </div> -->
      <div class="clear"></div>
    </div>
  </div>
<?php include('includes/footer.php'); ?>
</div>

  <script src='http://codepen.io/assets/libs/fullpage/jquery.js'></script>

  <script src="js/index.js"></script>

  <script src="js/masonry.js"></script>

  <script>
  $('.navbar a').click(function(){
    var lien = $(this).attr('href');
      $('.wrapper').addClass('slideout');
      window.location.href = lien;
    });


  </script> 

</body>

</html>