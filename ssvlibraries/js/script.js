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

  // js index
  ($('.js-index')).click(function(e) {
    var index = $(this).index();
    $('.js-index').removeClass('active');
    $(this).addClass('active');

    $('.is-index').each(function() {
      if($(this).index() == index) {
        $('.is-index').removeClass('active');
        $(this).addClass('active');
      }
    });
  });

  // js show
  $('.js-show').click(function(){
    if($(this).next('.show').hasClass('active')) {
      $('.js-content, .js-show').removeClass('active');
      $(this).next('.show');
    } else {
      $('.js-content, .js-show').removeClass('active');
      $('.js-show').next('.show');
      $(this).next('.show').addClass('active');
      $(this).addClass('active');
    }
  });

}(this, this.document, this.jQuery));
