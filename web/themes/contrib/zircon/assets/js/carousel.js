(function ($, Drupal) {

  "use strict";
  Drupal.behaviors.zirconCarousel = {
    attach: function (context, settings) {  
      $(document).ready(function() {
        if($('.carousel-responsive').length) {
        $('.carousel-responsive').not('.slick-initialized').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
          });
        }
      });

      if($('html').attr('dir')=='rtl') {
        $('.carousel-responsive').not('.slick-initialized').slick({
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 4,
          rtl:true,
          responsive: [{
              breakpoint: 992,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          }, {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          }, {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }]
        });
      }
    }
  };


})(jQuery, Drupal);





