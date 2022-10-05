$(document).ready(function () {
    'use strict';
    new WOW().init();
    /*-----------------------------------------------------------------------------------*/
    $(".workSlider").owlCarousel({
        nav: true,
        loop: false,
        dots: true,
        items: 5,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        margin: 20,
        responsive: {
          0: {
            items: 1
          },
          700: {
            items: 2
          },
          1000: {
            items: 5,
          },
    
        }
      });
      /*-----------------------------------------------------------------------------------*/
/*	Slider
/*-----------------------------------------------------------------------------------*/

$('#slider').revolution({
    sliderType: "standard",
    jsFileLocation: "asesets/revolution/js/",
    sliderLayout: "fullscreen",
    fullScreenOffsetContainer: ".navbar:not(.fixed)",
    dottedOverlay: "none",
    delay: 9000,
    responsiveLevels: [1140, 1024, 778, 480],
    visibilityLevels: [1140, 1024, 778, 480],
    gridwidth: [1140, 1024, 778, 480],
    gridheight: [728, 768, 960, 720],
    lazyType: "none",
    shadow: 0,
    spinner: "off",
    stopLoop: "on",
    stopAfterLoops: 0,
    stopAtSlide: 1,
    shuffle: "off",
    hideThumbsOnMobile: "off",
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 0,
    hideAllCaptionAtLilmit: 0,
    debugMode: false,
    fallbacks: {
        simplifyAll: "off",
        disableFocusListener: false,
    },
    parallax: {
        type: "mouse",
        origo: "slidercenter",
        speed: 1000,
        levels: [1, 2, 4, 6, 8, 10, 12, 16, 18, 20, 22, 24, 49, 50, 51, 55],
    },
});

    /*-----------------------------------------------------------------------------------*/
    /*	STICKY HEADER
    /*-----------------------------------------------------------------------------------*/
    if ($(".navbar").length) {
        var options = {
            offset: 350,
            offsetSide: 'top',
            classes: {
                clone: 'banner--clone fixed',
                stick: 'banner--stick',
                unstick: 'banner--unstick'
            },
            onStick: function () {
                $($.SmartMenus.Bootstrap.init);
            },
            onUnstick: function () {
                $('.navbar .btn-group').removeClass('open');
            }
        };
        var banner = new Headhesive('.navbar', options);
    }


/*-----------------------------------------------------------------------------------*/
/*	ONEPAGE SMOOTH SCROLL
/*-----------------------------------------------------------------------------------*/
$(function () {
    setTimeout(function () {
        if (location.hash) {
            window.scrollTo(0, 0);
            var target = location.hash.split('#');
            smoothScrollTo($('#' + target[1]));
        }
    }, 1);
    $('a.scroll[href*=#]:not([href=#])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            smoothScrollTo($(this.hash));
            return false;
        }
    });
    function smoothScrollTo(target) {
        var target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1500, 'easeInOutExpo');
        }
    }
});
    /*-----------------------------------------------------------------------------------*/
    /*	GO TO TOP
    /*-----------------------------------------------------------------------------------*/
    $.scrollUp({
        scrollName: 'scrollUp',
        // Element ID
        scrollDistance: 300,
        // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',
        // 'top' or 'bottom'
        scrollSpeed: 300,
        // Speed back to top (ms)
        easingType: 'linear',
        // Scroll to top easing (see http://easings.net/)
        animation: 'fade',
        // Fade, slide, none
        animationInSpeed: 200,
        // Animation in speed (ms)
        animationOutSpeed: 200,
        // Animation out speed (ms)
        scrollText: '<span class="btn btn-square btn-full-rounded btn-icon"><i class="fa fa-chevron-up"></i></span>',
        // Text for element, can contain HTML
        scrollTitle: false,
        // Set a custom <a> title if required. Defaults to scrollText
        scrollImg: false,
        // Set true to use image
        activeOverlay: false,
        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 1001 // Z-Index for the overlay
    });
 

});


