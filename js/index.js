$( document ).ready(function() {

	//topslider carousel
  /*
	$('.top-slider').owlCarousel({
	    loop:true,
	    nav: true,
	    items: 1,
	    autoplay:true,
   	   // autoplayTimeout:8000,
   	    animateIn: 'fadeIn',
   	    animateOut: 'fadeOut',
   	    mouseDrag: false,
   	    navText: ["<i class='ion-ios-arrow-left'></i>","<i class='ion-ios-arrow-right'></i>"]
	});
  */

	//testimonials carousel
  /*
	$('.testimonials-section .testimonials-carousel').owlCarousel({
	    loop:true,
	    center: true,
	    margin:30,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:2
	        }
	    }
	});
  */

	//index2 testimonials carousel
  /*
	$('.testimonials-section-2 .testimonials-carousel').owlCarousel({
	    loop:true,
	    center: true,
	    margin:30,
	    items: 1,
	    nav: true,
	    navText: ["<i class='ion-android-arrow-dropleft'></i>","<i class='ion-android-arrow-dropright'></i>"]
	});
  */

	//blog section carousel
  /*
	$('.blog-carousel').owlCarousel({
	    loop:true,
	    margin:20,
	    nav: true,
	    navText: ["<i class='ion-android-arrow-dropleft'></i>","<i class='ion-android-arrow-dropright'></i>"],
	    slideBy: 2,
	    responsive:{
	        0:{
	            items:1,
	            slideBy: 1,
	        },
	        600:{
	            items:1,
	            slideBy: 1,
	        },
	        1000:{
	            items:2
	        }
	    }
	});
  */

	//our clients section carousel
  /*
	$('.clients-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    responsive:{
	        0:{
	            items:2
	        },
	        768:{
	            items:4
	        },
	        1000:{
	            items:6
	        }
	    }
	});
  */

	//story section carousel
  /*
	$('.story-carousel').owlCarousel({
	    loop:true,
	   	items: 1,
	});
  */

	//default carousel
  /*
	$('.default-carousel').owlCarousel({
	    loop:true,
	   	items: 1,
	   	nav: true,
	   	navText: ["<i class='ion-android-arrow-dropleft'></i>","<i class='ion-android-arrow-dropright'></i>"],
	});
  */

	//dropdown menu open with hover
	if (screen.width > 768) {
		$('header .nav.navbar-nav.navbar-right .dropdown').mousemove(function(){
			$("header .nav.navbar-nav.navbar-right .dropdown").removeClass('open');
			$(this).addClass('open');
		});
		$('header .nav.navbar-nav.navbar-right .dropdown').mouseleave(function() {
			$("header .nav.navbar-nav.navbar-right .dropdown").removeClass('open');
		});
	};

	//search pannel
	$('.search-open').click(function(){
		$('.search-form-wrap').css({'display' : 'block'});
		$('.search-form-wrap input').focus();
		$(".nav.navbar-nav.navbar-right").css({'opacity' : '0'});
	});
	$('.search-close').click(function(){
		$('.search-form-wrap').css({'display' : 'none'});
		$(".nav.navbar-nav.navbar-right").css({'opacity' : '1'});
	});

	//fixed menu
	var $menu = $(".navbar");
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 46){
			$menu.addClass("menu-fixed");
		} else if($(this).scrollTop() <= 46 && $menu.hasClass("menu-fixed")) {
			$menu.removeClass("menu-fixed");
		}
	});

	//like
	/*
	$('.like').click(function(){
		if ($('.like').hasClass('liked')==false) {$('.like').addClass('liked');} else{$('.like').removeClass('liked');};
	});
	*/

	//portfolio popup
  /*
	$('.popup-link').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		},
		image: {
			// options for image content type
			titleSrc: 'title'
		}
	});
  */

	//circle progressbar
  /*
	$('#circle1').circleProgress({
		startAngle: 300,
		size: 80,
		thickness: 3,
		fill: { gradient: ["#5A5B5C", "#868789"] },
	    value: 0.82
	}).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.circle-value').html(parseInt(82 * progress) + '<i>%</i>');
	});

	$('#circle2').circleProgress({
		startAngle: 300,
		size: 80,
		thickness: 3,
		fill: { gradient: ["#5A5B5C", "#868789"] },
	    value: 0.92
	}).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.circle-value').html(parseInt(92 * progress) + '<i>%</i>');
	});

	$('#circle3').circleProgress({
		startAngle: 300,
		size: 80,
		thickness: 3,
		fill: { gradient: ["#5A5B5C", "#868789"] },
	    value: 0.6
	}).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.circle-value').html(parseInt(60 * progress) + '<i>%</i>');
	});
  */

	//start wave overlay function
	/*
	function waveOverlay(element, circleColor, circleSize, transitionTime) {
		//Wave-overlay, v1.0.0
		//Created by Roman Gryndii http://themeforest.net/user/gryndii
		$(element).css({'overflow' : 'hidden'});
		if ($(element).css("position") == 'static') {
			$(element).css({'position' : 'relative'});
		};
		$(element).append('<div class="wave-overlay"><div class="wave-circle"></div></div>');
		var parrentBgColor = $(element).css("background-color");
		$(element).css({'background-color' : 'transparent'});
		$(element + ' .wave-overlay').css({'background-color' : parrentBgColor});
		$(element + ' .wave-circle').css({'background-color' : circleColor, 'width' : circleSize, 'height' : circleSize})
		if ($(element).innerHeight() > $(element).innerWidth()) {var parrentSize = $(element).innerHeight()}
		if ($(element).innerWidth() > $(element).innerHeight()) {var parrentSize = $(element).innerWidth()}
		else {var parrentSize = $(element).innerHeight()};
		var circleTransform = ((parrentSize + (parrentSize / 2)) / parseInt($('.wave-circle').css('width'))*2);
		//alert(circleTransform);
		//start click
		$(element).mousedown(function(e) {
			var offset = $(this).offset();
			var mouseX = (e.pageX - offset.left);
			var mouseY = (e.pageY - offset.top);
			$(element + ' .wave-circle').css({'left' : mouseX-(parseInt(circleSize)/2), 'top' : mouseY-(parseInt(circleSize)/2), 'opacity' : '1', 'transition': 'transform ' + transitionTime + 'ms' + ' ease', 'transform' : 'scale(' +  circleTransform +')'});
			setTimeout(function() {$('.wave-circle').css({'transition' : 'opacity .15s', 'opacity' : '0'});}, transitionTime);
			setTimeout(function() {$('.wave-circle').css({'transform' : 'scale(1)'});}, (parseInt(transitionTime) + 150));
		});
		//end click
	}
	*/
	//end wave overlay function

	//waveOverlay call
	/*
	waveOverlay('.portfolio-item-overlay', 'rgba(0,0,0,.1)', '300px', '175');
	waveOverlay('.blog-img-overlay', 'rgba(0,0,0,.1)', '160px', '85');
	*/

	//portfolio page filter
	/*
	$('.portfolio-filter li').click(function(){
		$('.portfolio-filter li').removeClass('active');
		$(this).addClass('active');
		var at = $(this).attr('data-filter');
		$('.portfolio-item-wrap').css({'display' : 'none'});
		$('.portfolio-item-wrap').each(function() {
			if($(this).attr('data-filter') == at) {
				$(this).css({'display' : 'block'});
			}
		});
		if (at == 'all') {
			$('.portfolio-item-wrap').css({'display' : 'block'});
		};

	});
	*/

	//php contact form
	/*
	$(".contact-form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Message sent, thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	*/

  /*---vqc lazy load images---*/

	var list_of_images_attr = [
		{ 'name': 'footer-logo-load',
			'type': 'png' },
		{ 'name': 'customer-spotlight-1',
			'type': 'jpg' },
		{ 'name': 'true-accessibility-port-item',
			'type': 'jpg' },
		{ 'name': 'timely-codification-port-item',
			'type': 'jpg' },
		{ 'name': 'smart-drafting-port-item',
			'type': 'jpg' },
	]
	for(i=0; i<list_of_images_attr.length; i++){
		(function(img){
			if($("#"+img.name).length === 1 ){ //if the element exists, load image
			  var $temp_image = $("<img>");
			  $temp_image.load(function(){
			    $("#"+img.name).attr("src", $(this).attr("src"));
			  });
			  $temp_image.attr("src", "/images/"+img.name+"."+img.type);
			}
		})(list_of_images_attr[i]);
	}

	var list_of_images_css = [
		{ 'name': 'top-slider-1',
			'type': 'jpg' },
		{ 'name': 'top-slider-careers',
			'type': 'jpg' },
		{ 'name': 'top-slider-team',
			'type': 'jpg' },
		{ 'name': 'pattern-blue',
			'type': 'jpg' },
	]
	for(i=0; i<list_of_images_css.length; i++){
		(function(img){
			if($("#"+img.name).length === 1 ){
			  var $top_slider_1_downloadingImage = $("<img>");
			  $top_slider_1_downloadingImage.load(function(){
			    $("#"+img.name).css("background-image", "url\("+$(this).attr("src")+"\)");
			  });
			  $top_slider_1_downloadingImage.attr("src", "/images/"+img.name+"."+img.type);
			}
		})(list_of_images_css[i]);
	}

});


//lazyload

/*
//portfolio section (on main page) lazyload
var lazyload = lazyload || {};

(function($, lazyload) {

	"use strict";

	var page = 2,
	    buttonId = "#load-btn",
	    container = "#container";

	lazyload.load = function() {

	    var url = "load-pages/portfolio-section/" + page + ".html";

	    $(buttonId).text("Loading...");

	    $.ajax({
	        url: url,
	        success: function(response) {
	            if (!response || response.trim() == "NONE") {
	                $(buttonId).text("Portfolio Loaded");
	                return;
	            }
	            appendContests(response);
	        },
	        error: function(response) {
	            $(buttonId).text("No More Works");
	        }
	    });


	};

    var appendContests = function(response) {
        var id = $(buttonId);

        $(buttonId).text("Load More");

        $(response).appendTo($(container));
        page += 1;

        //portfolio lazyload popup
         $('.popup-link').magnificPopup({
			type: 'image',
			gallery:{
				enabled:true
			},
			image: {
				// options for image content type
				titleSrc: 'title'
			}
		});
    };

})(jQuery, lazyload);
*/

/*
//portfolio 2 columns lazyload
var lazyloadport2 = lazyloadport2 || {};

(function($, lazyloadport2) {

    "use strict";

    var page = 2,
        buttonId = "#load-btn",
        container = "#container";

    lazyloadport2.load = function() {

        var url = "load-pages/portfolio-page-2/" + page + ".html";

        $(buttonId).text("Loading...");

        $.ajax({
            url: url,
            success: function(response) {
                if (!response || response.trim() == "NONE") {
                    $(buttonId).text("Portfolio Loaded");
                    return;
                }
                appendContests(response);
            },
            error: function(response) {
                $(buttonId).text("Portfolio Loaded");
            }
        });
    };

    var appendContests = function(response) {
        var id = $(buttonId);

        $(buttonId).text("Portfolio Loaded");

        $(response).appendTo($(container));
        page += 1;

         //portfolio lazyload popup
         $('.popup-link').magnificPopup({
			type: 'image',
			gallery:{
				enabled:true
			},
			image: {
				// options for image content type
				titleSrc: 'title'
			}
		});

     	//filter click
     	$('.portfolio-filter li.active').trigger('click');
    };

})(jQuery, lazyloadport2);
*/

/*
//portfolio 3 columns lazyload
var lazyloadport3 = lazyloadport3 || {};

(function($, lazyloadport3) {

    "use strict";

    var page = 2,
        buttonId = "#load-btn",
        container = "#container";

    lazyloadport3.load = function() {

        var url = "load-pages/portfolio-page-3/" + page + ".html";

        $(buttonId).text("Loading...");

        $.ajax({
            url: url,
            success: function(response) {
                if (!response || response.trim() == "NONE") {
                    $(buttonId).text("Portfolio Loaded");
                    return;
                }
                appendContests(response);
            },
            error: function(response) {
                $(buttonId).text("Portfolio Loaded");
            }
        });
    };

    var appendContests = function(response) {
        var id = $(buttonId);

        $(buttonId).text("Portfolio Loaded");

        $(response).appendTo($(container));
        page += 1;

         //portfolio lazyload popup
         $('.popup-link').magnificPopup({
			type: 'image',
			gallery:{
				enabled:true
			},
			image: {
				// options for image content type
				titleSrc: 'title'
			}
		});

     	//filter click
     	$('.portfolio-filter li.active').trigger('click');
    };

})(jQuery, lazyloadport3);
*/

/*
//portfolio 4 columns lazyload
var lazyloadport4 = lazyloadport4 || {};

(function($, lazyloadport4) {

    "use strict";

    var page = 2,
        buttonId = "#load-btn",
        container = "#container";

    lazyloadport4.load = function() {

        var url = "load-pages/portfolio-page-4/" + page + ".html";

        $(buttonId).text("Loading...");

        $.ajax({
            url: url,
            success: function(response) {
                if (!response || response.trim() == "NONE") {
                    $(buttonId).text("Portfolio Loaded");
                    return;
                }
                appendContests(response);
            },
            error: function(response) {
                $(buttonId).text("Portfolio Loaded");
            }
        });
    };

    var appendContests = function(response) {
        var id = $(buttonId);

        $(buttonId).text("Portfolio Loaded");

        $(response).appendTo($(container));
        page += 1;

         //portfolio lazyload popup
         $('.popup-link').magnificPopup({
			type: 'image',
			gallery:{
				enabled:true
			},
			image: {
				// options for image content type
				titleSrc: 'title'
			}
		});

     	//filter click
     	$('.portfolio-filter li.active').trigger('click');
    };

})(jQuery, lazyloadport4);
*/
