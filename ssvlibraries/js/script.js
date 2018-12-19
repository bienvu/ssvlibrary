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
  
  //js read more
  $('.js-read-more').click(function(e) {
    e.preventDefault();
    if($(this).prev().find('.read-more').hasClass('is-show')) {
      $(this).prev().find('.read-more').removeClass('is-show');
      $(this).text('READ MORE');
    }else {
      $(this).prev().find('.read-more').addClass('is-show');
      $(this).text('READ LESS');
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
  $('.js-slide').slick();

  // masonry 
  $(window).load(function() {
    $('.js-mas').masonry();
  });

  $(window).ready(function() {
    $('.js-lightbox').lightGallery();
  });

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

  //slick for grid-image
  $(".js-slick").slick({
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true
  });

}(this, this.document, this.jQuery));
