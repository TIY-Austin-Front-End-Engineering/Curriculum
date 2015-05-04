$(document).ready(onReady);

function onReady() {
	// 1. Event listener
	$('#search-button').on('click', onSearchButtonClick);

	function onSearchButtonClick() {
		// 1. Input value
		console.log($('#search-box').val());
	}


	var myName = 'Aaron';
	var myNewHtml = 'Hi there, <strong>'+myName+'</strong>. How\'s your day going?';
	$('#results').html(myNewHtml);

	// var myButton = document.getElementById('search-button');
	// myButton.addEventListener('click', onSearchButtonClick);

	// function onSearchButtonClick() {
	// 	console.log('hey my search button was clicked');
	// }


	// function imdbSearch(query, year, type, tomatoes) {
	// 	console.log('imdbSearch');
	// 	$.get(
	// 		'http://www.omdbapi.com',
	// 		{
	// 			s: query,
	// 			y: year,
	// 			type: type,
	// 			tomatoes: tomatoes
	// 		},
	// 		onSearchResults,
	// 		'json'
	// 	);
	// }

	// function tomatoMeter(x) {
	// 	console.log('tomatoMeter');
	// 	$.get(
	// 		'http://www.omdbapi.com',
	// 		{
	// 			i: x,
	// 			tomatoes: true
	// 		},
	// 		onTomatoResults,
	// 		'json'
	// 	);
	// }

	// function onSearchResults(data) {
	// 	console.log('onSearchResults');
	// 	console.log(data);
	// 	console.log(data.Search[0].imdbID);
	// 	tomatoMeter(data.Search[0].imdbID);
	// }

	// function onTomatoResults(data) {
	// 	console.log('onTomatoResults');
	// 	console.log(data);
	// 	console.log(data['Genre']);
	// 	console.log(data.Genre);
	// }

	// var searchTerm = 'Godfather';
	// var year = 1972;
	// var type = 'movie';
	// var tomatoes = true;
	// imdbSearch(searchTerm, year, type, tomatoes);
}