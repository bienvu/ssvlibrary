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

  $(document).ready(function(){
    //parallax
    $scroll = $('.js-parallax').offset().top - $(window).height();
    $vel = .1;
    console.log($scroll);
    
    $(this).scroll(function(){
      if($(this).scrollTop() > $scroll) {
        $scrollWidth = +($(this).scrollTop() - $scroll) * $vel + 'px';
        $('.js-parallax').children().first().css('transform', 'translateY(' + $scrollWidth + ')');
      }
    });
  });

}(this, this.document, this.jQuery));
