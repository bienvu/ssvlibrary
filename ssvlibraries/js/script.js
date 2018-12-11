/*jslint browser: true*/
/*global $, jQuery, Modernizr, enquire*/
(function (window, document, $) {
  var $html = $('html'),
    mobileOnly = "screen and (max-width:47.9375em)", // 767px.
    mobileLandscape = "(min-width:30em)", // 480px.
    tablet = "(min-width:48em)"; // 768px.
  // Add  functionality here.

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

  //js read more
  $('.js-read-more').click(function(e) {
    e.preventDefault();
    if($(this).parent().prev().children('.read-more').hasClass('is-show')) {
      $(this).parent().prev().children('.read-more').removeClass('is-show');
      $(this).text('READ MORE');
    }else {
      $(this).parent().prev().children('.read-more').addClass('is-show');
      $(this).text('READ LESS');
    }
  });

}(this, this.document, this.jQuery));
