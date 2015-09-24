'use strict';
var $ = require('jquery');
var IngredientCollection = require('./collections/IngredientCollection');
var IngredientModel = require('./models/IngredientModel');
var _ = require('backbone/node_modules/underscore');
$(document).ready(function() {
	
	/*
	 * WHO are the actors
	 */

	// 1a. Target the element
	var $textarea = $('textarea');
	var $ingredient = $('#ingredient');
	var $quantity = $('#quantity');
	var $form = $('#form');
	var $ingredientList = $('#ingredient-list');
	var ingredientTemplate = _.template($('#ingredient-row').html());

	// 1b. Instantiate a new backbone model or collection
	var ingredients = new IngredientCollection();

	/*
	 * WHAT is going to happen? (functions)
	 */

	// 2a. function to run when jQuery event happens
	// Event: submit
	// Action: get data and store it in the collection
	function onFormSubmit(e) {
		e.preventDefault();
		// var newIngredient = new IngredientModel();
		ingredients.add({
			ingredient: $ingredient.val(),
			quantity: $quantity.val()
		});
		// newIngredient.set();


		// var newIngredient = $ingredient.val();
		// ingredients.add({
		// 	ingredient: newIngredient,
		// })
	}

	// 2b. function to run when model or collection event happens
	//	   use jQuery to update the page
	function onIngredientAdded(newIngredient) {
		newIngredient.save();
		// var newHtml = ingredientTemplate(newIngredient.toJSON());
		$ingredientList.append(newHtml);
	}

	/*
	 * WHEN is it going to happen? (event listeners)
	 */

	// 3a. connect jQuery like button element with onButtonClick function
	// Element: $form
	// Event: submit
	$form.on('submit', onFormSubmit);

	// 3b. connect Backbone like model with onLikeModelChange function
	ingredients.on('add', onIngredientAdded);

	ingredients.fetch();
});