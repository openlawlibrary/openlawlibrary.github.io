$( document ).ready(function() {

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

