"use strict";
jQuery(document).ready(function ($) {

    var Template_JS = {
        owl_carousel: function () {
            $('#blog-carousel').owlCarousel({
                loop: true,
                margin: 25,
                nav: false,
                dots: true,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    600: {
                        items: 2,
                        margin: 0
                    },
                    1000: {
                        items: 3
                    }
                }
            });
        }
    };

    new WOW().init();

    Template_JS.owl_carousel();

});
