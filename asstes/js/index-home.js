// ====================== OWl Carousel  ======================
$(document).ready(function(){	
	$('.owl-carousel').owlCarousel({
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
//=========================== Header Carousel 3D  ===========================

$(document).ready(function() {
	var radius = 850;
	var autoRotate = true;
	var rotateSpeed = 100;
	var imgWidth = 200;
	var imgHeight = 400;
  
	// var bgMusicURL = 'https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a';
	var bgMusicControls = true;
  
	setTimeout(init, 100);
  
	var header = $('#header');
	var ospin = $('#spin-on');
	var aImg = ospin.find('img');
	var aVid = ospin.find('video');
	var aEle = $.merge(aImg, aVid);
  
	ospin.css({
	  'width': imgWidth + "px",
	  'height': imgHeight + "px"
	});
  
	var ground = $('#ground');
	ground.css({
	  'width': radius * 3 + "px",
	  'height': radius * 3 + "px"
	});
  
	function init(delayTime) {
	  $.each(aEle, function(i) {
		$(this).css({
		  'transform': "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)",
		  'transition': "transform 1s",
		  'transition-delay': delayTime || (aEle.length - i) / 4 + "s"
		});
	  });
	}
  
	function applyTranform(obj) {
	  if (tY > 180) tY = 180;
	  if (tY < 0) tY = 0;
	  obj.css({
		'transform': "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)"
	  });
	}
  
	function playSpin(yes) {
	  ospin.css('animation-play-state', (yes ? 'running' : 'paused'));
	}
  
	var sX, sY, nX, nY, desX = 0,
	  desY = 0,
	  tX = 0,
	  tY = 10;
  
	if (autoRotate) {
	  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
	  ospin.css('animation', `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`);
	}
  
	function stop() {
	  if (autoRotate) {
		ospin.css('animation-play-state', 'paused');
	  }
	}
  
	function play() {
	  if (autoRotate) {
		ospin.css('animation-play-state', 'running');
	  }
	}
  });

//============================ fast Details card  ============================

	// show bop img 
	$(".view").click(function(){
		$(this).toggleClass("animate__animated animate__zoomOutUp");
		
		$(".view").delay(1000).queue(function(){
			$(".display-img").toggleClass("d-none animate__animated animate__zoomInUp");
			$(this).dequeue();
			});
	});	
		
	// hide bop img 
	$(".closedisplay").click(function(){
		$(".view").removeClass("animate__animated animate__zoomInUp");
		$(".display-img").toggleClass("d-none");		
	});	
		
	// Bop img header	
	$(document).ready(function(){	
		$("#header img").click(function(){
		$(".display-img #views").attr('src' ,$(this).attr('src')) ;
		});
		$("#btn-tralier").click(function(){
			$("#box-tralier").removeClass("d-none");
			$(".toggle-hidden").addClass("d-none");
			$(".down").removeClass("d-none");
			$(".watch").addClass("d-none");
		});
		// Bop open tralier
		$("#box-tralier").click(function(){
		$("#box-tralier").addClass("d-none");
		$(".toggle-hidden").removeClass("d-none");
		$(".down").addClass("d-none");
		$(".watch").removeClass("d-none");
		});
		
		
		$(".bttn").click(function(){
		$(".ground").stop("#ground");
	});
	
	// Stop trailer after click out 
	const videos = document.querySelectorAll('iframe')
	const close = document.querySelector('.stop')
	close.addEventListener('click', () => {
	   videos.forEach(i => {
		  const source = i.src
		  i.src = ''
		  i.src = source
	   })
	})
	
});
	
	



