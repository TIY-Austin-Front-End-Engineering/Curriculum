'use strict';

$(document).ready(function() {
	// Step 1: Select my elements
	var $button = $('#btn');
	var $text = $('.text');
	var $background = $('.background');

	// Step 2: create the function
	function onButtonClick() {
		$button.prop('disabled', true);
		$text.text('Loading')
		$background.animate(
			{ width: '100%' },
			4000,
			'linear',
			function() {
				$button.prop('disabled', false);
				$text.text('Submit');
				$background.css({ width: 0 });
			}
		);
	}

	// Step 3: listen for the event
	$button.click(onButtonClick);
});