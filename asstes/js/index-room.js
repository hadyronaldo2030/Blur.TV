// ====================== OWl Carousel  ======================
$(document).ready(function(){	
	$('.owl-carousel').owlCarousel({
		loop:true,
		dots:4,
		nav:false,
		autoplayTimeout:4000,
		mousedrag:true,
		touchDrag: true,
		smartSpeed: 600,
		margin: 20,
		autoHeight: true,		
		responsive:{
			60:{
				items:1
			},
			520:{
				items:2
			},
			740:{
				items:3
			},
			940:{
				items:4
			},
			1200:{
				items:5
			},
			1460:{
				items:6
			}
		}
	});
	/*==============================
	Navigation prev Next
	==============================*/
	$('.section__nav--prev').on('click', function() {
		var carouselId = $(this).attr('data-nav');
		$(carouselId).trigger('prev.owl.carousel');
	});
	$('.section__nav--next').on('click', function() {
		var carouselId = $(this).attr('data-nav');
		$(carouselId).trigger('next.owl.carousel');
	});
});

// ================= active btn Number room =================
$(document).ready(function() {
	// btn nav number
	$(".moreCard .numNav a").click(function () {
		if (!$(this).hasClass("active")) {
			$(this).addClass("active")
				.siblings(".moreCard .numNav a")
				.removeClass("active");
		}
	});
	// btn nav list watch download 
	$(".li").click(function () {
		if (!$(this).hasClass("active")) {
			$(this).addClass("active")
				.siblings(".li")
				.removeClass("active");
		}
	});
	// btn active episode
	$(".episode .numNav a").click(function () {
		if (!$(this).hasClass("active")) {
			$(this).addClass("active")
				.siblings(".episode .numNav a")
				.removeClass("active");
		}
	});
	// btn active season
	$(".Season .numNav a").click(function () {
		if (!$(this).hasClass("active")) {
			$(this).addClass("active")
				.siblings(".Season .numNav a")
				.removeClass("active");
		}
	});
});