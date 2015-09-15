'use strict';

$(document).ready(function() {
	$(window.location.hash).show();
	$('a[href="'+window.location.hash+'"]').addClass('active');

	$('nav').click(function(e) {
		var $target = $(e.target);
		var href = $target.attr('href');
		$('a').removeClass('active');
		$target.addClass('active');
		$('section').hide();
		$(href).show();
	});
});