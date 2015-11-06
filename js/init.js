(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('ea-header').on('click', '#stack-link', function(event) {
      event.preventDefault();
      $('ul.tabs').tabs('select_tab', '#stack');
      $('html, body').animate({
          scrollTop: $('#stack').offset().top - 70
      }, 1200);
    });

    $('ea-header').on('click', '#about-link', function(event) {
      event.preventDefault();
      $('ul.tabs').tabs('select_tab', '#aboutme');
      $('html, body').animate({
          scrollTop: $('#aboutme').offset().top - 70
      }, 750);
    });

    $('ea-header').on('click', '#projects-link', function(event) {
      event.preventDefault();
      $('ul.tabs').tabs('select_tab', '#project');
      $('html, body').animate({
          scrollTop: $('#project').offset().top - 70
      }, 750);
    });

    $('ea-header').on('click', '#resume-link', function(event) {
      event.preventDefault();
      $('ul.tabs').tabs('select_tab', '#resume');
      $('html, body').animate({
          scrollTop: $('#resume').offset().top - 70
      }, 750);
    });

    $('ea-header').on('click', '#contact-link', function(event) {
      event.preventDefault();
      $('ul.tabs').tabs('select_tab', '#contact');
      $('html, body').animate({
          scrollTop: $('#contact').offset().top - 70
      }, 750);
    });

  });
})(jQuery);
