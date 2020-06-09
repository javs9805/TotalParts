$(this).ready(function() {
    var height = $(window).height();
    ajustesIniciales();

    function ajustesIniciales() {
        $("section#body").css({ "margin-top": height - 120 + "px" });
    }

    //galeria desenfocada
    $(this).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var pixels = scrollTop / 60;
        var p = 1;
        if (scrollTop < height) {
            $(".galeria").css({
                "-webkit-filter": "blur(" + pixels + "px)",
                "background-position": "center -" + pixels * 10 + "px"
            });
        }
    });


    window.onscroll = function() { movingMenu() };



    // menu adaptable
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function movingMenu() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
        hideText();

    }


    //  Opacar texto al subir o bajar el scroll
    var scrollDown = document.getElementById("scrolldown");
    var inicial = scrollDown.offsetTop;
    var opacity = 1;
    var transparent = true;


    function hideText() {
        if (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop <= 100) {
            scrollDown.style.opacity = 1;
        } else if (document.documentElement.scrollTop > 100 && document.documentElement.scrollTop <= 200) {
            scrollDown.style.opacity = 0.8;
        } else if (document.documentElement.scrollTop > 200 && document.documentElement.scrollTop <= 300) {
            scrollDown.style.opacity = 0.6;
        } else if (document.documentElement.scrollTop > 300 && document.documentElement.scrollTop <= 400) {
            scrollDown.style.opacity = 0.4;
        } else if (document.documentElement.scrollTop > 400 && document.documentElement.scrollTop <= 500) {
            scrollDown.style.opacity = 0.2;
        } else if (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop <= 600) {
            scrollDown.style.opacity = 0;
        }
    }





});

function mostrarPopup() {
    var overlay = document.getElementById('overlay');
    var header = document.getElementById("myHeader");
    header.style.zIndex = 0;
    overlay.style.visibility = 'visible';
}

function ocultarPopup() {
    var header = document.getElementById("myHeader");
    header.style.zIndex = 1;
    var overlay = document.getElementById('overlay');
    overlay.style.visibility = 'hidden';
}