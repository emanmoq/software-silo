$(document).ready(function() {
    'use strict';
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
            onStick: function() {
                $($.SmartMenus.Bootstrap.init);
            },
            onUnstick: function() {
                $('.navbar .btn-group').removeClass('open');
            }
        };
        var banner = new Headhesive('.navbar', options);
    }
});
    /*-----------------------------------------------------------------------------------*/
    /*	Slider
    /*-----------------------------------------------------------------------------------*/

$('#slider').revolution({
    sliderType: "standard",
    jsFileLocation: "include/rs-plugin/js/",
    sliderLayout: "fullscreen",
    dottedOverlay: "none",
    delay: 9000,
    responsiveLevels: [1140, 1024, 778, 480],
    visibilityLevels: [1140, 1024, 778, 480],
    gridwidth:[1140, 1024, 778, 480],
    responsiveLevels: [1240, 1024, 778, 480],
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
        simplifyAll:"off",
        disableFocusListener:false,
    },
    parallax: {
        type:"mouse",
        origo:"slidercenter",
        speed:1000,
        levels:[2,4,6,8,10,12,14,16,18,20,22,24,49,50,51,55],
    },
});
    /*-----------------------------------------------------------------------------------*/
	/*	ONEPAGE SMOOTH SCROLL
	/*-----------------------------------------------------------------------------------*/	
	$(function() {
        setTimeout(function() {
          if (location.hash) {
            window.scrollTo(0, 0);
            var target = location.hash.split('#');
            smoothScrollTo($('#'+target[1]));
          }
        }, 1);  
        $('a.scroll[href*=#]:not([href=#])').on('click', function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            smoothScrollTo($(this.hash));
            return false;
          }
        });  
        function smoothScrollTo(target) {
          var target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1500, 'easeInOutExpo');
          }
        }
      });