/*jslint browser: true*/
/*global $, jQuery, Modernizr, enquire*/
(function (window, document, $) {
  var $html = $('html'),
    mobileOnly = "screen and (max-width:47.9375em)", // 767px.
    mobileLandscape = "(min-width:30em)", // 480px.
    tablet = "(min-width:48em)"; // 768px.
  // Add  functionality here.

  // accordion
  $('.acc__title').each(function() {
      $(this).on('click', function (e) {
        if ($(this).hasClass('is-show')) {
          $('.acc__title').removeClass('is-show');
          $('.acc__body').slideUp();
          $(this).next().slideUp();
        } else {
          $('.acc__title').removeClass('is-show');
          $(this).addClass('is-show');
          $('.acc__body').slideUp();
          $(this).next().slideDown();
        }
    });
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

}(this, this.document, this.jQuery));
