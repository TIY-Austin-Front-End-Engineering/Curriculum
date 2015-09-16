'use strict';

$(document).ready(function() {
	console.log('everything is working');
	// $.get(
	// 	'http://tiyfe.herokuapp.com/collections/aaron',
	// 	onGetRequestComplete,
	// 	'json'
	// );
	// $.post(
	// 	'http://tiyfe.herokuapp.com/collections/aaron',
	// 	{ message: 'hello world' },
	// 	onPostRequestComplete,
	// 	'json'
	// );
	$.ajax({
		url: 'http://tiyfe.herokuapp.com/collections/aaron/55f98d832b51c10300000017',
		method: 'DELETE',
		// data: { message: 'hello earth' },
		success: function(response) {
			console.log('ajax', response)
		}
	});
	console.log('end of stuff');
});

function onGetRequestComplete(response) {
	console.log('get', response);
}

function onPostRequestComplete(response) {
	console.log('post', response);
}