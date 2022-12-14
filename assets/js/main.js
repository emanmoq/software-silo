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

    $(".close span").click(function(){
        $(".navbar-collapse").removeClass("show")
    })
    /*-----------------------------------------------------------------------------------*/
    /*	Slider
    /*-----------------------------------------------------------------------------------*/
    if ($(window).width() < 850) {



     
        $('.tp-caption.mobilehidden').filter(function () {

            $(this).data("x",$(this).data('x')-600)
            $(this).data('y', $(this).data('y') -200);

        
        
        });
        $('.tp-caption').not('.mobilehidden').filter(function () {
            $(this).data('y', $(this).data('y') + 300);
        });
    }


    if ($("#slider").revolution == undefined) {
        revslider_showDoubleJqueryError("#slider");
    } else {
        $("#slider").show().revolution({
            sliderType: "standard",
            sliderLayout: "fullscreen",
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
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            disableProgressBar: "on",
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
                speed: 300,
                levels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 49, 50, 51, 55],
            },
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "hermes",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 10,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 10,
                        v_offset: 0
                    }
                }
            }
        });

    }


    /*-----------------------------------------------------------------------------------*/
    $(".ourCLientSlider").owlCarousel({
        nav: true,
        loop: false,
        dots: true,
        items: 5,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        margin: 40,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            700: {
                items: 2,
                nav: false
            },
            1000: {
                items: 5,
            },

        }
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

            onUnstick: function () {
                $('.navbar .btn-group').removeClass('open');
            }
        };
        var banner = new Headhesive('.navbar', options);
    }




    /************************************************** */


});



