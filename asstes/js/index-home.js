//=============================== Loding ===============================
// Page loading animation
$(window).on('load', function() {
	$('#js-preloader').addClass('loaded');

});
//============================== NavBar ==============================
let theEnd = 0;
navbar = document.getElementById('navbar');
const debounce = (func, delay) => {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, delay);
  };
};
const handleScroll = debounce(() => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > theEnd) {
    navbar.style.top = '-70px';
  } else {
    navbar.style.top = '0';
  }
  theEnd = scrollTop;
}, 10);
window.addEventListener('scroll', handleScroll);

//========================= Dark Mode & Light Mode =========================
$(document).ready(function() {
	$(".themeicons").click(function(){
	$(".themeicon").toggleClass("d-none");

	let current_theme = $("html").attr("data-theme");
	if (current_theme == "darkMode") {
		$("html").attr("data-theme", "lightMode");
	}
	else if (current_theme == "lightMode") {
		$("html").attr("data-theme", "darkMode");
	}
});
});

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
// ===================== active btn Aside Menu =====================
$(document).ready(function() {
	// Open & Close menu slider
	$("#openSlider").click(function() {
		$("aside").removeClass("d-none");
	});
    $("#closeSlider").click(function() {
		$("aside").addClass("d-none");
	});
	// dropdown menu
    $("#btn-series").click(function() {
		$("#btn-series").toggleClass("active");
		$(".dropSeries").fadeToggle(1)
	});
	$("#btn-movies").click(function() {
		$("#btn-movies").toggleClass("active");
		$(".dropMovie").fadeToggle(1);
	});
});	

// ================= active btn Number More Cards =================
$(document).ready(function() {
	$(".moreCard .numNav a").click(function () {
		if (!$(this).hasClass("active")) {
			$(this).addClass("active")
				.siblings(".moreCard .numNav a")
				.removeClass("active");
		}
	});
});

// =========================== Icon Top  ===========================

// Get the button
let mybutton = document.getElementById("myBtn");
    
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	mybutton.style.display = "block";
  } else {
	mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//=========================== btn Search  ===========================
$(document).ready(function() {
	
	// Open Search		
	$("#open").click(function(){
		$("#sectionSearch").fadeToggle();
		$("#sectionSearch input").focus();
		});
	// close Search		
	$(".close").click(function(){
		$("#sectionSearch").fadeToggle();
		});

});
		
//=========================== Hidden btn summary ===========================
	$(document).ready(function() {
		$("details").click(function(){
		$("summary").fadeToggle();
	});
});

//============================= Bubble Trailer =============================
	// show bop img 
	$(".btnTrailer").click(function(){
		$("#bubbleTrailer").fadeToggle();
		});
	// hide bop img 
	$(".close-trailer, #bubbleTrailer").click(function(){
		$("#bubbleTrailer").fadeOut();
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


//=========================== Header Carousel 3D  ===========================


var radius = 850;
var autoRotate = true;
var rotateSpeed = 100;
var imgWidth = 200; 
var imgHeight = 400;


// var bgMusicURL = 'https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a';
var bgMusicControls = true;


setTimeout(init, 100);

var header = document.getElementById('header');
var ospin = document.getElementById('spin-on');
var aImg = ospin.getElementsByTagName('img');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid];


ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";


var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {

  if(tY > 180) tY = 180;
  if(tY < 0) tY = 0;

  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes?'running':'paused');
}

var sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;



if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

function stop() {
  if (autoRotate) {
    ospin.style.animationPlayState = 'paused';
  }
}
function play() {
  if (autoRotate) {
    ospin.style.animationPlayState = 'running';
  }
} 

//============================ fast Details card  ============================



	// show bop img 
	$(".view").click(function(){
		$(this).toggleClass("animate__animated animate__zoomOutUp");
		
		$(".view").delay(1000).queue(function(){
			$(".display-img").toggleClass("d-none animate__animated animate__zoomInUp");
			$(this).dequeue();
	});


		// hide bop img 
		$(".display-img #close").click(function(){
			$(".display-img").addClass("d-none");
			});	
	});	
		
		
	// Bop img header	
	$(document).ready(function(){	
		$("#header img").click(function(){
		$(".display-img #views").attr('src' ,$(this).attr('src')) ;
		});
		// Bop open tralier
		$("#btn-tralier").click(function(){
		$("#box-tralier").removeClass("d-none");
		$(".Fast-Information-Head").removeClass("d-none");
		$(".details-img").addClass("d-none");
		$(".details-text").addClass("d-none");
		});
		$("#close-trailer").click(function(){
		$("#box-tralier").addClass("d-none");
		$(".details-img").removeClass("d-none");
		$(".details-text").removeClass("d-none");
		$(".details-text").removeClass("d-none");
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
	
	



