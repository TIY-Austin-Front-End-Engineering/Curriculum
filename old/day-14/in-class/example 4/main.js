$(document).ready(onReady);

function onReady() {
	$.get(
		'http://www.omdbapi.com',
		{s: 'postman'},
		onResultsReceived,
		'text'
	);

	function onResultsReceived(data, blue) {
		console.log(status);
		console.log(data);
		console.log(data.Search[2].Title);
		// console.log(data);
	}
}