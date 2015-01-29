(function() {
	var movies = [
	    {Title: 'Star Wars Episode IV', Genre: 'Sci-Fi'},
	    {Title: 'Toy Story', Genre: 'Animated'},
	    {Title: 'Toy Story II', Genre: 'Animated'}
	];
	function makeRow(row) {
	    return '<tr><td>'+row.Title+'</td><td>'+row.Genre+'</td></tr>';
	}
	for(var i in movies) {
	    console.log(makeRow(movies[i]));
	}
})();