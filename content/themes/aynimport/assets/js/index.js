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

    $('.flexslider').flexslider({
      animation: "fade"
    });


    $document.on('scroll', function () {
      $('.flexslider li').css(
        'background-position-y', $document.scrollTop() / 4);
    });

    // Menu & menu button animation
    var $btn = $(".menu-icon");
    var $body = $("body");
    var $nav = $("body > nav > ul");

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
