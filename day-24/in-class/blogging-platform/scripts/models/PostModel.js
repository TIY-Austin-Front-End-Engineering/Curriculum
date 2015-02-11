var PostModel = Backbone.Model.extend({
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/dbla-projects',
	defaults: {
		_id: null,
		title: '',
		body: '',
		pinned: false
	},
	idAttribute: '_id',
	validate: function(attrs, options) {
		if(!attrs.title) return 'Please enter a title.';
		if(!attrs.body) return 'Please enter a body.';
	}
});