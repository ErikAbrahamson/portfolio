(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('#about-link').click(function() {
      $('html, body').animate({
          scrollTop: $('#about').offset().top
      }, 800);
    });

    $('#projects-link').click(function() {
      $('html, body').animate({
          scrollTop: $('#project').offset().top
      }, 750);
    });

    $('#resume-link').click(function() {
      $('html, body').animate({
          scrollTop: $('#resume').offset().top
      }, 500);
    });

    $('#contact-link').click(function() {
      $('html, body').animate({
          scrollTop: $('.page-footer').offset().top
      }, 300);
    });

    // var options = [{
    //   selector: '#project',
    //   offset: 500,
    //   callback: 'Materialize.fadeInImage("#project")'
    // }];
    //
    // Materialize.scrollFire(options);

  }); // end of document ready
})(jQuery); // end of jQuery name space
