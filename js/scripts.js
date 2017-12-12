$(document).ready(function() {

	/*
		Mobile navigation
	*/

	$('#jsMenuTrigger').on('click', function(e) {
		e.preventDefault();
		$('body').addClass('menu-open');
	});

	$('#js-menu-close').on('click', function(e) {
		e.preventDefault();
		$('body').removeClass('menu-open');
	});

});
