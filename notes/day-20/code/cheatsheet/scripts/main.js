'use strict';
var $ = require('jquery');
var ProductModel = require('./models/ProductModel.js');
var ProductCollection = require('./collections/ProductCollection');
$(document).ready(function() {

	// var kittenToy = new ProductModel({
	// 	_id: 2937648234,
	// 	name: 'Kitten Toy for Kittens',
	// 	description: 'Your cat will love it \'nuff said.',
	// 	price: 0.50,
	// 	quantity: 1000,
	// 	rating: 0.25,
	// 	category: 'pets'
	// });

	// kittenToy.save();

	var products = new ProductCollection();
	products.fetch({
		success: function() {
			console.log("success!");
			console.log(products);
		}
	});

	

});