$(document).ready(function () {




    $(".smooth-scroll").click(function (e) {
        $('#collapsibleNavbar').removeClass('show');
        e.preventDefault();
        var ref = $(this).attr("href");
        var pos = $(ref).offset().top + 2;
        var scroll = $("body").scrollTop();
        var headerHeight = $("header").outerHeight() + 20;
        var speed = pos >= 1500 ? 1500 : 1000;

        console.log(speed, pos);

        $("body, html").stop().animate({
            scrollTop: (pos + scroll - headerHeight)
        }, speed, "swing");
    });

    $('.carousel').carousel({
        interval: 2000,
        wrap:true
      })

    // $(function () { // $(document).ready shorthand
    //     $('.hide').fadeIn('fast');
    // });
    // /* Every time the window is scrolled ... */
    // $(window).scroll(function () {

    //     /* Check the location of each desired element */
    //     $('.hideme').each(function (i) {

    //         var bottom_of_object = $(this).position().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();

    //         /* If the object is completely visible in the window, fade it it */
    //         if (bottom_of_window > bottom_of_object) {

    //             $(this).animate({
    //                 'opacity': '1'
    //             }, 1500);

    //         }

    //     });

    // });
});

AOS.init();