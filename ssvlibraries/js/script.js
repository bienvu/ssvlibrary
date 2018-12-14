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
    
  //js slide
  $('.js-slide').slick({
    prevArrow: '<span class="slick-prev"></span>',
    nextArrow: '<span class="slick-next"></span>',
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: false
      }
    }]
  });

}(this, this.document, this.jQuery));
