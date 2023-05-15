
// ===================== Range Filter =====================

function rangeSlide(value) {
	document.getElementById('rangeValue').innerHTML = value;
}

//=========================== Hidden btn summary ===========================
	$(document).ready(function() {
		$("details").click(function(){
		$("summary").fadeToggle();
	});
});
