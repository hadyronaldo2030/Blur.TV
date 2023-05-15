// ====================== OWl Carousel cast  ======================
$(document).ready(function(){	
	$('.mainCast .owl-carousel').owlCarousel({
		loop:true,
		dots:4,
		nav:false,
		autoPlay:true,
		autoplayTimeout:4000,
		mousedrag:true,
		touchDrag: true,
		smartSpeed: 600,
		margin: 20,
		autoHeight: true,		
		responsive:{
			60:{
				items:2
			},
			340:{
				items:3
			},
			460:{
				items:4
			},
			700:{
				items:5
			},
			900:{
				items:6
			},
			1100:{
				items:7
			}
		}
	});
});
// ====================== OWl Carousel cards  ======================
$(document).ready(function(){	
	$('.carouselCards .owl-carousel').owlCarousel({
		loop:true,
		dots:4,
		nav:false,
		autoPlay:true,
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

	$('.section__nav--prev2').on('click', function() {
		var carouselId = $(this).attr('data-nav');
		$(carouselId).trigger('prev.owl.carousel');
	});
	$('.section__nav--next2').on('click', function() {
		var carouselId = $(this).attr('data-nav');
		$(carouselId).trigger('next.owl.carousel');
	});
});

//=========================== Hidden btn summary ===========================
	$(document).ready(function() {
		$("details").click(function(){
		$("summary").fadeToggle();
	});
});

