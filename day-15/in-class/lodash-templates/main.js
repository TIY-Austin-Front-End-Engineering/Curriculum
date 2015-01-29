(function() {
	// var navLinkTemplate = _.template('<a href="#"><%= linkName %></a>');
	// console.log(navLinkTemplate);
	var movie = {
		Title: 'Star Wars',
		Year: 1984,
		Genre: 'Fantasy'
	}
	// var myHtmlString = navLinkTemplate({linkName: 'Link 1'});
	// console.log(myHtmlString);

	// $('nav').append(myHtmlString);

	var rowTemplate = _.template('<tr><td><%= Title %></td><td><%= Year %><%= Genre %></td></tr>');

	$('#movies').append(rowTemplate(movie));
	$('#movies').append(rowTemplate({Title: 'Benji', Year: 1984, Genre: 'Childrens'}));
})();