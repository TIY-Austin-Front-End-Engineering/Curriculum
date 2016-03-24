// Build the settings for the search request
var ajaxSettings = {
	url: 'http://www.omdbapi.com/?s=star wars',
	type: 'get',
	dataType: 'json',
	success: function(data) {
		console.log(data);
		data.Search.forEach(function(movie) {
			console.log(movie);
			var divWrapper = $('<a href="http://www.imdb.com/title/'+movie.imdbID+'"></a>');
			divWrapper.append(movie.Title);
			$('.search-results').append(divWrapper);
			// $('.search-results').append('<div>'+movie.Title+'</div>');
		})
	},
	error: function(errorMessage) {
		console.log('Something went wrong');
		console.log(errorMessage);
	},
	complete: function() {
		console.log('All done!');
	}
};

// Make the request
$.ajax(ajaxSettings);