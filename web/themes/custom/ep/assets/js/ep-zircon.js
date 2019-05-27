"use strict";

(function($, Drupal) {

    Drupal.Zircon = Drupal.Zircon || {};
    Drupal.behaviors.zircon = {
        attach: function(context, settings) {


            $('.btn-btt').smoothScroll({
                speed: 1000
            });
            if ($("#search-block-form [name='keys']").val() === "") {
                $("#search-block-form input[name='keys']").val(Drupal.t("Cauta..."));
            }
            $("#search-block-form input[name='keys']").focus(function() {
                if ($(this).val() === Drupal.t("Cauta...")) {
                    $(this).val("");
                }
            }).blur(function() {
                if ($(this).val() === "") {
                    $(this).val(Drupal.t("Cauta..."));
                }
            });

            Drupal.Zircon.setInputPlaceHolder('email', 'user@example.com', '.simplenews-subscriber-form .form-type-email');

            $(window).scroll(function() {
                if ($(window).scrollTop() > 200) {
                    $('.btn-btt').show();
                } else {
                    $('.btn-btt').hide();
                }
            }).resize(function() {
                if ($(window).scrollTop() > 200) {
                    $('.btn-btt').show();
                } else {
                    $('.btn-btt').hide();
                }
            });

            Drupal.Zircon.mobileMenu();

        }
    }
    Drupal.Zircon.setInputPlaceHolder = function(name, text, selector) {
        selector = selector == undefined ? '' : selector + ' ';

        if ($.support.placeholder) {
            $(selector + 'input[type="' + name + '"]').attr('placeholder', Drupal.t(text));
        } else {
            $(selector + 'input[type="' + name + '"]').val(Drupal.t(text));
            $(selector + 'input[type="' + name + '"]').focus(function() {
                if (this.value == Drupal.t(text)) {
                    this.value = '';
                }
            }).blur(function() {
                if (this.value == '') {
                    this.value = Drupal.t(text);
                }
            });
        }
    }

    Drupal.Zircon.mobileMenu = function() {
      $('#main-menu-inner').mobileMenu();
    }

})(jQuery, Drupal);