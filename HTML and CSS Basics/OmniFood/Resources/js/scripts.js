$(document).ready(function () {
  /* nav bar*/
  $('.js--section-features').waypoint(function (direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '70px'
  });

  /* buttons scroll */
  $('.js--scroll-to-plans').click(function () {
    $('html,body').animate({
      scrollTop: $('.js--section-plans').offset().top
    }, 1000)
  })

  $('.js--scroll-to-start').click(function () {
    $('html,body').animate({
      scrollTop: $('.js--section-features').offset().top
    }, 1000)
  })

  /* Smooth Scrolling for links
    taken from CSS tricks */

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  /* Animataions for the website */

  $('.js--wp-1').waypoint(function (direction) {
    $('.js--wp-1').addClass('animate__animated animate__fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-2').waypoint(function (direction) {
    $('.js--wp-2').addClass('animate__animated animate__slideInUp');
  }, {
    offset: '50%'
  });

  $('.js--wp-3').waypoint(function (direction) {
    $('.js--wp-3').addClass('animate__animated animate__fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-4').waypoint(function (direction) {
    $('.js--wp-4').addClass('animate__animated animate__tada');
  }, {
    offset: '50%'
  });

  /* Mobile Navigation */

  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    nav.slideToggle(200);
  });


  //This works basically like a media query for jQuery, where we can take different actions depending on the screen width

  $(window).resize(function () {

    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    if ($(window).width() > 767) {
      nav.css("display", "block");
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      nav.css("display", "none");
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }

  });

});


// Always add javascript files in order.