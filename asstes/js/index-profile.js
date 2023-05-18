//============================== Upload cover ==============================
$('#form__img-upload').on('change', function() {
	var input = this;
	if (input.files && input.files[0]) {
	  var reader = new FileReader();
	  reader.onload = function(e) {
		$('#form__img').attr('src', e.target.result);
	  }
	  reader.readAsDataURL(input.files[0]);
	}
  });