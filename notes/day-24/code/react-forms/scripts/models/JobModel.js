var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		_id: null,
		title: '',
		description: '',
		location: '',
		company: ''
	},
	idAttribute: '_id',
	urlRoot: 'http://tiyfe.herokuapp.com/collections/jerbs'
});