var PostModel = Backbone.Model.extend({
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/aaron-blog-post',
	defaults: {
		_id: null,
		title: '',
		body: '',
		pinned: false
	},
	idAttribute: '_id',
	validate: function(attrs, options) {
		if(!attrs.title) return 'Please enter a <b>title</b>.';
		if(!attrs.body) return 'Please enter a <b>body</b>.';
	}
});