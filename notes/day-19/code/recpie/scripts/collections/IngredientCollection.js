var Backbone = require('backbone');
var IngredientModel = require('../models/IngredientModel');
module.exports = Backbone.Collection.extend({
	model: IngredientModel,
	url: 'http://tiyfe.herokuapp.com/collections/backbone-example'
});