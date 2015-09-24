var Backbone = require('backbone');
var ProductModel = require('../models/ProductModel.js');
module.exports = Backbone.Collection.extend({
	model: ProductModel,
	url: 'http://tiyfe.herokuapp.com/collections/products'
});