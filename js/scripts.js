$(document).ready(function() {

	/* Toggle menu */
	$('#jsMenuTrigger').on('click', function(e) {
		e.preventDefault();
		$('.navigation').toggleClass('open');
	});

});
