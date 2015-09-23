var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		ingredient: '',
		quantity: ''
	},
	urlRoot: 'http://tiyfe.herokuapp.com/collections/backbone-example',
	idAttribute: '_id'

});