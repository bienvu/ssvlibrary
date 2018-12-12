/*jslint browser: true*/
/*global $, jQuery, Modernizr, enquire*/
(function (window, document, $) {
  var $html = $('html'),
    mobileOnly = "screen and (max-width:47.9375em)", // 767px.
    mobileLandscape = "(min-width:30em)", // 480px.
    tablet = "(min-width:48em)"; // 768px.
  // Add  functionality here.

  // accordion
  $('.js-accordion').children().children(2n).click(function() {
    if ($(this).hasClass('is-show')) {
      $(this).removeClass('is-show');
      $(this).next().slideUp();
    } else {
      $('.js-accordion').children().children(2n).removeClass('is-show');
      $('.js-accordion').children().children(2n).next().slideUp();
      $(this).addClass('is-show');
      $(this).next().slideDown();
    }
  });


  // Table responsive
  Drupal.behaviors.tableResponsive = {
    attach: function (context, settings) {
      var $table = $('table', context);
      if ($table.length &&
        !$table.parent().hasClass('table-responsive')) {
        $table.not($table.find('table')).wrap('<div class="table-responsive"></div>');
      }
    }
  };

  $('.js-read-more').click(function(e) {
    e.preventDefault();
    if($('.read-more').hasClass('is-show')) {
      $('.read-more').removeClass('is-show');
      $(this).text('READ MORE >');
    }else {
      $('.read-more').addClass('is-show');
      $(this).text('READ LESS >');
    }
  });
  
  //js slide
  $('.js-slide').slick();

}(this, this.document, this.jQuery));
