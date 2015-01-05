//gestion du scroll de la page
    $("html, body").bind("mousewheel DOMMouseScroll onmousewheel touchmove scroll", function (e) {
        //Détection du sens du scroll
        //cf. http://stackoverflow.com/questions/4326845/how-can-i-determine-the-direction-of-a-jquery-scroll-event
        
        //Détermination de la direction, true pour UP, false pour down
        var direction = false;
        if (e.originalEvent.wheelDelta && e.originalEvent.wheelDelta >= 0)     direction = true;
        else if (e.originalEvent.detail && e.originalEvent.detail <= 0)     direction = true;
        else                                                                 direction = false;

        //pas de délai lorsque l'on remonte
        if(direction) {
            //on définit la limite à partir du contenu
            var getOffset = $('#dm_page_content').offset().top;
            $.fn.frontTemplate.navigationMenu($(document).scrollTop(), getOffset);
        } else {
            //on déplace le menu à l'arrêt du scroll grâve au délai
            $.fn.frontFramework.delay(function(){
                //on définit la limite à partir du contenu
                var getOffset = $('#dm_page_content').offset().top;
                $.fn.frontTemplate.navigationMenu($(document).scrollTop(), getOffset);
            }, 100);
        }
    });