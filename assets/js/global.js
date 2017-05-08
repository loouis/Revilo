(function($){

  $('.bx-slider').bxSlider({
	    mode: 'horizontal',
	    // pagerCustom: '#testi-slider__pager',
	    captions: true,
	    // auto: true,
	    // pagerType: 'short',
	    onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
	        $('.bx-slider__slide--active').removeClass('bx-slider__slide--active');
	        $('.bx-slider > li').eq(currentSlideHtmlObject + 1).addClass('bx-slider__slide--active');
	    },
	    onSliderLoad: function () {
	        $('.bx-slider > li').eq(1).addClass('bx-slider__slide--active');
	    },
	});

  // Timeline animation
  // var timelineLine = $('.timeline-line');

  var $scrollDown = $(".scroll-down");

  $scrollDown.on("click", function(){
    $('html, body').animate({
      scrollTop: $('.text-block--headhunters').offset().top-80},
      {duration: 1600, easing: 'easeInOutQuint'}
    );
  });

  // Wow
  wow = new WOW({
      mobile: false,        // trigger animations on mobile devices (default is true)
  });
  wow.init();




})(jQuery);
