'use strict';
var $ = require('jquery');
var ItemView = require('./views/ItemView');
var ItemModel = require('./models/ItemModel');

$(document).ready(function() {
	var itemModel1 = new ItemModel({listItem: 'Do dishes'});
	var item1 = new ItemView({model: itemModel1});

	var itemModel2 = new ItemModel({listItem: 'Walk cat'});
	var item2 = new ItemView({model: itemModel2});
	$('body').append(item1.$el).append(item2.$el);
});