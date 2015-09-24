var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		_id: null,
		name: '',
		description: '',
		price: 0.0,
		quantity: 0,
		rating: 2.5,
		category: 'other'
	},
	idAttribute: '_id',
	urlRoot: 'http://tiyfe.herokuapp.com/collections/products'
});