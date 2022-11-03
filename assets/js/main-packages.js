$(document).ready(function () {
    'use strict';
    var wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animate', // default
            offset: 0,          // default
            mobile: false,       // default
        }
    )
    wow.init();
    /*-----------------------------------------------------------------------------------*/
    $(".packagesHero").owlCarousel({
        nav: true,
        loop: false,
        dots: true,
        items: 1,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    });

    /************************************************** */


});



