$(function() {

	// Custom JS
$('.carousel-people').owlCarousel({
	loop: true,
	nav: true,
	navText: ['<img src="img/_src/ic-arrow-backward.svg"/>', '<img src="img/_src/ic-arrow-forward.svg"/>'],
	responsiveClass: true,
	responsive: {
		0: { items: 1 },
		800: { items: 3 },
		1100: { items: 4 }
	}

	});
});
