// Page loading animation
$(window).on('load', function() {
	$('#js-preloader').addClass('loaded');

});
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

// ===================== Range Filter =====================

function rangeSlide(value) {
	document.getElementById('rangeValue').innerHTML = value;
}
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

//=============================== Scroll Top ===============================
$(window).scroll(function(){
var scroll = $(window).scrollTop();
	if( scroll > 680)
	{
		$('#scrolltop').addClass("fixed-top mt-5");
	}
	else
		{
		$('#scrolltop').removeClass("fixed-top mt-5");	
		}
});
	
//=============================== Loding ===============================

