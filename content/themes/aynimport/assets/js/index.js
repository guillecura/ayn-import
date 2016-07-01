/**
 * Main JS file for cura behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

  var $document = $(document);

  // Document ready
  $document.ready(function () {

    var $postContent = $(".post-content");
    $postContent.fitVids();

    // Smooth scroll
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

    // Sticky navs
    var $mainNav = $("header.main-nav");
    var height = $(window).height() - 100;

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      // Home page
      if (scroll >= height) {
        $mainNav.addClass("active");
      } else {
        $mainNav.removeClass("active");
      }
    });


    // Menu & menu button animation
    var $btn = $(".menu-icon");
    var $btnNav = $("body > nav > ul a");
    var $body = $("body");
    var $nav = $("body > nav");

    $btn.on("click tap", function(e){
      e.preventDefault();
      if ($body.hasClass("nav-closed")) {
        $(this).addClass("nav-close");
        $body.toggleClass("nav-opened nav-closed");
        $nav.addClass("opened");
      } else {
        $(this).removeClass("nav-close");
        $body.toggleClass("nav-opened nav-closed");
        $nav.removeClass("opened");
      }
    });

    // Gallery filters
    var $tag = $(".filters span");
    var $imageItem = $(".content .gallery-image");

    $tag.each(function() {
      var brand = $(this).data("brand");
      var image = $imageItem.data("name");
      var brandActive = $(".content .gallery-image[data-name='" + brand + "']");

      if ($(brandActive).length == 0) {
        $(this).hide();

        if (brand == "no-filter") {
          $(this).show();
        }
      }

      $(this).on("click tap", function(){

        $imageItem.removeClass("active");

        if (!$(this).hasClass("active")) {
          $(this).addClass("active");
          $(this).siblings().removeClass("active");
        }

        brandActive.addClass("active");

        if (brand == "no-filter") {
          $imageItem.addClass("active");
        }
      });
    });
  });

})(jQuery);
