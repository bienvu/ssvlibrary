/*jslint browser: true*/
/*global $, jQuery, Modernizr, enquire*/
(function (window, document, $) {
  var $html = $('html'),
    mobileOnly = "screen and (max-width:47.9375em)", // 767px.
    mobileLandscape = "(min-width:30em)", // 480px.
    tablet = "(min-width:48em)"; // 768px.
  // Add  functionality here.

  // accordion
  $('.js-accordion > div').children(2n).click(function() {
    if ($(this).hasClass('is-show')) {
      $(this).removeClass('is-show');
      $(this).next().slideUp();
    } else {
      $(this).removeClass('is-show');
      $(this).addClass('is-show');
      $('.js-accordion > div').children(2n).next().slideUp();
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

}(this, this.document, this.jQuery));
