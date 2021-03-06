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
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: false
      }
    }]
  });

  // masonry
  $(window).load(function() {
    $('.js-mas').masonry();
  });

  $(window).ready(function() {
    $('.js-lightbox').lightGallery();
  });

  // $(document).ready(function(){
  //   //parallax
  //   $scroll = $('.js-parallax').offset().top - $(window).height();
  //   $vel = .1;
  //
  //   $(this).scroll(function(){
  //     if($(this).scrollTop() > $scroll) {
  //       $scrollWidth = +($(this).scrollTop() - $scroll) * $vel + 'px';
  //       $('.js-parallax').children().first().css('transform', 'translateY(' + $scrollWidth + ')');
  //     }
  //   });
  // });

  //slick for grid-image

  $(".js-slick").slick({
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

  $(".js-slick-test").slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false

  });

}(this, this.document, this.jQuery));
