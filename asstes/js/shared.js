//=============================== Loding ===============================

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
// ===================== Aside Menu =====================
$(document).ready(function() {
	// Open & Close menu slider
	$("#openSlider").click(function() {
		$("aside").css("width", "400px");
		});
	
		$("#closeSlider").click(function() {
		$("aside").css("width", "0");
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

//============================= Bubble Trailer =============================
	// show bop img 
	$(".btnTrailer").click(function(){
		$("#bubbleTrailer").toggleClass("d-none d-flex");
		});
	// hide bop img 
	$(".close-trailer").click(function(){
		$("#bubbleTrailer").toggleClass("d-none d-flex");
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
//============================= active heart & active Like =============================
$(document).ready(function() {
	$(".fa-heart, .fa-clock-rotate-left").click(function(){
		$(this).toggleClass("text-danger");
		});
	$(".fa-thumbs-up, .fa-thumbs-down").click(function(){
		$(this).toggleClass(" text-primary");
		});
	});

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

//============================== Scroll bar ==============================
$(document).ready(function() {
	$(window).scroll(function() {
	  var $element = $('#scrollbar');
	  if ($element.scrollTop() > 0) {
		$element.addClass('scrolling');
	  } else {
		$element.removeClass('scrolling');
	  }
	});
  });
