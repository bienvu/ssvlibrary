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

  // sticky form
  $('.fsticky__title').click(function(){
      $('.fsticky').toggleClass('is-active');
    });

    $(window).click(function (e)
      {
        var container = $('.fsticky');
        if (!container.is(e.target)
          && container.has(e.target).length === 0)
        {
        container.removeClass('is-active');
      }
    })

}(this, this.document, this.jQuery));
