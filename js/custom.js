$(document).foundation();
$(document).ready(function(){
	// Sticky Side Navigation
	$(function() {
		$('.section-nav__list ul li a').click(function() {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			$('html,body').animate({
				scrollTop: target.offset().top-46
			}, 1000);
			return false;
		});
	});

	//SlickNav call for Header menu
	$('#menu__list-js').slicknav();
	
	// Sticky scroll for Header menu
	function sticky_relocate() {
		var window_top = $(window).scrollTop();
		var div_top = $('#menu-anchor-js').offset().top;
		if (window_top > div_top) {
			$('#menu-js').addClass('sticky');
		} else {
			$('#menu-js').removeClass('sticky');
		}
	}
	$(function () {
		$(window).scroll(sticky_relocate);
		sticky_relocate();
	});
	
	// Home page: set min-height for .section elements
	if ($(window).height() > 690) {
		$('.section').attr('style','min-height: '+$(window).height()+'px;');
	}
	//$('.section').height($(window).height());
	
	// Home page: add .active class to active section
	$(window).scroll( function(){
		$('.section, .effects-section, .properties__item').each(function(){
			if ($(window).scrollTop() >= ($(this).position().top)-160){
				//$('.active').removeClass('active');				
				$(this).addClass('active');
			}
		})
	});	
	
	// Contact Us page: Google maps - disable wheelscroll	
	$('.google-map iframe').addClass('scrolloff');
	$('.google-map').on('click', function () {
		$('.google-map iframe').removeClass('scrolloff');
	});
	$('.google-map iframe').mouseleave(function () {
		$('.google-map iframe').addClass('scrolloff');
	});
});

$(window).load(function() {
	$('#pre-loaders').fadeOut();
	$('#page-content').fadeIn();
});