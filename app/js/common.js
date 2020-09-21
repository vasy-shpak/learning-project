$(function() {

	// Custom JS
$('.carousel-people').owlCarousel({
	loop: true,
	nav: true,
	navText: ['<img src="/mni/wp-content/themes/mni/assets/img/_src/ic-arrow-backward.svg"/>', '<img src="/mni/wp-content/themes/mni/assets/img/_src/ic-arrow-forward.svg"/>'],
	responsiveClass: true,
	responsive: {
		0: { items: 1 },
		800: { items: 3 },
		1100: { items: 4 }
	}
	});

	//Hambugrer
	$('.hamburger').on('click',function(){
		// to create animation for hamburger
		$(this).toggleClass('is-active')
		// To attach menu to the hamburger
		$('.nav-content').toggleClass('is-active')
	});

	$(document).ready(function(){
		//console.log($(window).width())
		var windowWidth = $(window).width()
		if(windowWidth < 768){
			$('.wrapper-features').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				responsiveClass: true,
				items: 1
		
			});
		}
	})

});
		