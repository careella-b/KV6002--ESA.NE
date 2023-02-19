/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Search Js
03. Info Bar Js
04. Sticky Header Js
05. Data-Background Js
06. Mobile Menu Js
07. Scroll To Top Js
08. Hero Slider Js
09. Testimonial Js
10. Product Slider Js
11. Product Slider 2 Js
12. Product Slider 3 Js
13. Product Slider 4 Js
14. Sale Slider Js 
15. Sale Slider 2 Js 
16. Client Slider Js
17. Blog Slider Js
18. Product Offer SLider Js 
19. Masonary Js
20. WoW Js
21. Cart Plus Minus Js
22. Range Slider Js
23. Show Login Toggle Js
24. Show Coupon Toggle Js
25. Create An Account Toggle Js
26. Shipping Box Toggle Js
****************************************************/

(function ($) {
"use strict";

	////////////////////////////////////////////////////
    // 01. PreLoader Js
	$(window).on('load',function() {
		$("#loading").fadeOut(500);
	});


	////////////////////////////////////////////////////
    // 02. Search Js
	$(".search-toggle").on("click", function () {
		$(".header__search").addClass("search-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".header__search-btn-close").on("click", function () {
		$(".header__search").removeClass("search-opened");
		$(".body-overlay").removeClass("opened");
	});
	$(".body-overlay").on("click", function () {
		$(".header__search").removeClass("search-opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// 03. Info Bar Js
	$(".mobile-menu-toggle").on("click", function () {
		$(".extra__info").addClass("info-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".extra__info-close-btn").on("click", function () {
		$(".extra__info").removeClass("info-opened");
		$(".body-overlay").removeClass("opened");
	});
	$(".body-overlay").on("click", function () {
		$(".extra__info").removeClass("info-opened");
		$(".body-overlay").removeClass("opened");
	});

		
	////////////////////////////////////////////////////
    // 04. Sticky Header Js
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("sticky");
			$("#header__transparent").removeClass("transparent-sticky");
		} else {
			$("#header-sticky").addClass("sticky");
			$("#header__transparent").addClass("transparent-sticky");
		}
	});

	////////////////////////////////////////////////////
    // 05. Data-Background Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	
	////////////////////////////////////////////////////
    // 06. Mobile Menu Js
	$('#mobile-menu-active').metisMenu();

	$('#mobile-menu-active .has-dropdown > a').on('click', function (e) {
		e.preventDefault();
	});

	////////////////////////////////////////////////////
    // 07. Scroll To Top Js
	function smoothSctollTop() {
		$('.smooth-scroll a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 0
				}, 1500);
			}
		});
	}
	smoothSctollTop();

	// Show or hide the sticky footer button
	$(window).on('scroll', function(event) {
		if($(this).scrollTop() > 600){
			$('#scroll').fadeIn(200)
		} else{
			$('#scroll').fadeOut(200)
		}
	});

	//Animate the scroll to yop
	$('#scroll').on('click', function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: 0,
		}, 1500);
	});

	////////////////////////////////////////////////////
    // 08. Hero Slider Js
	function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: true,
		autoplaySpeed: 8000,
		dots: true,
		fade: true,
		arrows: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
		responsive: [{
		breakpoint: 767,
		settings: {
			dots: false,
			arrows: false
		}
		}]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
		var $this = $(this);
		var $animationDelay = $this.data('delay');
		var $animationType = 'animated ' + $this.data('animation');
		$this.css({
			'animation-delay': $animationDelay,
			'-webkit-animation-delay': $animationDelay
		});
		$this.addClass($animationType).one(animationEndEvents, function () {
			$this.removeClass($animationType);
		});
		});
	}
	}
	mainSlider();

	////////////////////////////////////////////////////
    // 08. Hero Slider Js
	function mainSlider2() {
		var BasicSlider = $('.slider-active-3');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: true,
			autoplaySpeed: 8000,
			dots: true,
			fade: true,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
			responsive: [{
			breakpoint: 767,
			settings: {
				dots: false,
				arrows: false
			}
			}]
		});
	
		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
			});
		}
	}
	mainSlider2();


	////////////////////////////////////////////////////
	// 09. Testimonial Js
  $('.testimonial__wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
	fade: true,
	dots: true,
    asNavFor: '.testimonial__nav',

  });
  $('.testimonial__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonial__wrapper',
    dots: false,
    centerMode: true,
    centerPadding: 0,
	focusOnSelect: true,
	arrows: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
  });

	////////////////////////////////////////////////////
    // 10. Product Slider Js
	$('.product__slider ').owlCarousel({
		loop:true,
		margin:30,
		autoplay:false,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			767:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			},
			1600:{
				items:4
			}
		}
	});

	

	////////////////////////////////////////////////////
    // 11. Product Slider 2 Js ( home page 2 ) 
	$('.product__slider-2 ').owlCarousel({
		loop:true,
		margin:30,
		autoplay:false,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			767:{
				items:2
			},
			992:{
				items:2
			},
			1200:{
				items:2
			},
			1600:{
				items:3
			}
		}
	});
	

	////////////////////////////////////////////////////
    // 12. Product Slider 3 Js ( home page 2 ) 
	$('.product__slider-3').owlCarousel({
		loop:true,
		margin:30,
		autoplay:false,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			767:{
				items:2
			},
			992:{
				items:2
			},
			1200:{
				items:2
			},
			1600:{
				items:2
			}
		}
	});
	

	////////////////////////////////////////////////////
    // 13. Product Slider 4 Js ( home page 4 ) 
	$('.product__slider-4').owlCarousel({
		loop:true,
		margin:30,
		autoplay:false,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			767:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			},
			1600:{
				items:5
			}
		}
	});

	
	////////////////////////////////////////////////////
    // 14. Sale Slider Js 
	$('.sale__area-slider ').owlCarousel({
		loop:true,
		margin:30,
		autoplay:false,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			767:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:5
			},
			1600:{
				items:5
			}
		}
	});
	
	
	////////////////////////////////////////////////////
    // 15. Sale Slider 2 Js  ( home page 2 ) 
	$('.sale__area-slider-2 ').owlCarousel({
		loop:true,
		margin:30,
		autoplay:false,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			767:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:5
			},
			1600:{
				items:6
			}
		}
	});
	


	////////////////////////////////////////////////////
    // 16. Client Slider Js
	$('.client__slider').owlCarousel({
		loop:true,
		margin:0,
		autoplay:false,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			767:{
				items:3
			},
			992:{
				items:4
			},
			1200:{
				items:5
			},
			1600:{
				items:5
			}
		}
	});
	

	////////////////////////////////////////////////////
    // 17. Blog Slider Js
	$('.blog__slider').owlCarousel({
		loop:true,
		margin:30,
		autoplay:false,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fal fa-angle-left"></i></button>','<button><i class="fal fa-angle-right"></i></button>'],
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:3
			},
			1600:{
				items:3
			}
		}
	});

	////////////////////////////////////////////////////
    // 18. Product Offer SLider Js ( home 2 )
	$('.product__offer-slider').owlCarousel({
		loop:true,
		margin:30,
		autoplay:false,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fal fa-angle-left"></i></button>','<button><i class="fal fa-angle-right"></i></button>'],
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:1
			},
			992:{
				items:1
			},
			1200:{
				items:1
			},
			1600:{
				items:1
			}
		}
	});


	////////////////////////////////////////////////////
    // 19. Masonary Js
	$('.grid').imagesLoaded( function() {
		// init Isotope
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item',
		  }
		});


	// filter items on button click
	$('.masonary-menu').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

	//for menu active class
	$('.masonary-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	});


	////////////////////////////////////////////////////
    // 20. WoW Js
	new WOW().init();

	////////////////////////////////////////////////////
	// 21. Cart Plus Minus Js
	$(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
	$(".qtybutton").on("click", function () {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find("input").val(newVal);
	});


	////////////////////////////////////////////////////
	// 22. Range Slider Js
	$("#slider-range").slider({
		range: true,
		min: 0,
		max: 500,
		values: [75, 300],
		slide: function (event, ui) {
			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});
	
	$("#amount").val("$" + $("#slider-range").slider("values", 0) +
		" - $" + $("#slider-range").slider("values", 1));

 
	////////////////////////////////////////////////////
	// 23. Show Login Toggle Js
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 24. Show Coupon Toggle Js
	$('#showcoupon').on('click', function () {
		$('#checkout_coupon').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 25. Create An Account Toggle Js
	$('#cbox').on('click', function () {
		$('#cbox_info').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 26. Shipping Box Toggle Js
	$('#ship-box').on('click', function () {
		$('#ship-box-info').slideToggle(1000);
	});

	////////////////////////////////////////////////////
    // 27. product__slider-active Js ( home 7 )
	$('.product__slider-active').owlCarousel({
		loop:true,
		margin:30,
		autoplay:false,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fal fa-angle-left"></i></button>','<button><i class="fal fa-angle-right"></i></button>'],
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			},
			1600:{
				items:4
			}
		}
	});

	////////////////////////////////////////////////////
    // 28. testimonial__slider-active Js ( home 7 )
	$('.testimonial__slider-active').owlCarousel({
		loop:true,
		margin:30,
		autoplay:false,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fal fa-angle-left"></i></button>','<button><i class="fal fa-angle-right"></i></button>'],
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:1
			},
			992:{
				items:1
			},
			1200:{
				items:1
			},
			1600:{
				items:1
			}
		}
	});

	////////////////////////////////////////////////////
    // 28. blog__slider-active Js ( home 7 )
	$('.blog__slider-active').owlCarousel({
		loop:true,
		margin:30,
		autoplay:false,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fal fa-angle-left"></i></button>','<button><i class="fal fa-angle-right"></i></button>'],
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:1
			},
			992:{
				items:2
			},
			1200:{
				items:2
			},
			1600:{
				items:2
			}
		}
	});
	
	////////////////////////////////////////////////////
    // 28. brand__slider-active Js ( home 7 )
	$('.brand__slider-active').owlCarousel({
		loop:true,
		margin:30,
		autoplay:false,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fal fa-angle-left"></i></button>','<button><i class="fal fa-angle-right"></i></button>'],
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:3
			},
			992:{
				items:4
			},
			1200:{
				items:5
			},
			1600:{
				items:5
			}
		}
	});


})(jQuery);