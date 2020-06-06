$(document).ready(function() {
    var height = $(window).height();
    ajustesIniciales();

    function ajustesIniciales() {
        $("section#body").css({ "margin-top": height - 120 + "px" });
    }

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var pixels = scrollTop / 60;

        if (scrollTop < height) {
            $(".galeria").css({
                "-webkit-filter": "blur(" + pixels + "px)",
                "background-position": "center -" + pixels * 10 + "px"
            });
        }
    });


});