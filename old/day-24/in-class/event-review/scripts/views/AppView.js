var AppView = Backbone.View.extend({
	// el: '#app-view',
	tagName: 'div',
	initialize: function() {
		// _.bindAll()

		this.catcherInTheRye = new BookModel();

		this.catcherInTheRye.set({
			title: 'Catcher in the Rye',
			isbn: '234796',
			cover: 'picture'
		});

		this.catcherInTheRye.on('change:title', this.onBookChange);
		
		this.catcherInTheRye.set({
			title: 'The Giving Tree'
		});

		this.catcherInTheRye.updateIsbn(1234);


		this.bookList = new BookCollection();

		this.bookList.on('add', this.onBookAdded);
		this.bookList.on('change', this.onBookListBookChanged);

		var mobyDick = new BookModel({
			title: 'Moby Dick'
		});

		this.bookList.add(mobyDick);
		this.bookList.add(this.catcherInTheRye);

		mobyDick.set({
			author: 'Herman Melville'
		});

		console.log(this.bookList);

		this.bookList.remove(this.catcherInTheRye);
		console.log(this.bookList);

	},

	onBookChange: function(model) {
		console.log('hey, the book was changed');
		console.log(model);
	},

	onBookAdded: function(model) {
		console.log('hey, a book was added to my book list');
		console.log(model);
	},

	onBookListBookChanged: function(model) {
		console.log('hey, a book was changed within my book list');
		console.log(model);
	}
});