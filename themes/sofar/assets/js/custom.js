function resize() {
    var ww = $(window).width();
    var hh = $(window).height();
}

$(function () {
    resize();
    $('.marquee_menu').marquee({
        duration: 30000,
        gap: 0,
        pauseOnHover: true,
        duplicated: true,
        startVisible: true
    });
    $('.marquee_services').marquee({
        duration: 20000,
        gap: 30,
        pauseOnHover: true,
        duplicated: true,
        startVisible: true
    });
    $(".marquee_menu SPAN").on("click", function () {
        if (!$(this).hasClass('open')) {
            $(".menu_wrap").addClass("open");
        } else {
            $(".menu_wrap").removeClass("open");
        }
    });
    $(".menu_exit").on("click", function () {
        $(".menu_wrap").removeClass("open");
    });
    $(".share_link").on("click", function () {
        $(this).siblings(".share_outer").addClass("open");
    });
    $(".share .exit").on("click", function () {
        $(".share_outer").removeClass("open");
    });
    const thumbs = $(".js-qv-product-images").children().length;
    console.log('dddd '+thumbs);
    if (thumbs < 2) {
        $(".js-qv-mask").remove();
    }
});


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

$(window).on('resize', function () {
    resize();
});

$(window).on('load', function () {
    resize();
    
    $(".modalaki .modal_exit").on("click", function () {
        $(".modalaki").removeClass("show");
    });
    
    if(!getCookie('show_setValModal'))
        $(".modalaki").addClass("show");
        // $('#setValModal').modal('show')

    setCookie('show_setValModal', true, 7);
});