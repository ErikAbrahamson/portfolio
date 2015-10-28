(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('ea-header').on('click', '#about-link', function(event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $('#aboutme').offset().top
      }, 750);
    });

    $('ea-header').on('click', '#projects-link', function(event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $('#project').offset().top
      }, 750);
    });

    $('ea-header').on('click', '#resume-link', function(event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $('#resume').offset().top
      }, 750);
    });

    $('ea-header').on('click', '#contact-link', function(event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $('#contact').offset().top
      }, 750);
    });

  });
})(jQuery);
