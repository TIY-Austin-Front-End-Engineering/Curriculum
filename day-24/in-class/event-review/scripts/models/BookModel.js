var BookModel = Backbone.Model.extend({
	defaults: {
		id: null,
		title: null,
		author: null,
		genre: null,
		yearPublished: null,
		isbn: null
	},

	updateIsbn: function(newIsbn) {
		this.set({isbn: newIsbn});
	}
});