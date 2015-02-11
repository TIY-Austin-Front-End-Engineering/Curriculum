var ProjectModel = Backbone.Model.extend({
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/dbla-projects',
	defaults: {
		_id: null,
		name: null,
		url: null,
		description: null
	},
	idAttribute: '_id'
});