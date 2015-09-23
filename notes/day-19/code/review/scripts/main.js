'use strict';
var $ = require('jquery');
var LikeModel = require('./models/LikeModel.js');
var LikeButtonView = require('./views/LikeButtonView.js');

$(document).ready(function() {

	// var likeModel1 = new LikeModel({likes: 7});
	// var likeButton1 = new LikeButtonView({model: likeModel1});
	// likeButton1.render();
	// // var likeButton2 = new LikeButtonView();
	// // var likeButton3 = new LikeButtonView();
	// $('body').append(likeButton1.$el)
	// console.log(likeButton1);
	
	/*
	 * WHO are the actors
	 */

	// 1a. Target the element
	var $likeButton = $('.like-button');
	var $lastClicked = $('#last-click');

	// 1b. Instantiate a new backbone model
	var like = new LikeModel();

	/*
	 * WHAT is going to happen? (functions)
	 */

	// // 2a. function to run when jQuery event happens
	function onButtonClick(e) {
		// this = $likeButton
		var newNumberOfLikes = like.get('likes')+1;
		like.set({
			likes: newNumberOfLikes,
			lastClick: new Date()
		});
	}

	// 2b. function to run when model event happens
	//	   use jQuery to update the page
	function onLikeModelChange(likeModelThatWasChanged) {
		// this = like?
		console.log(this);
		var numLikes = likeModelThatWasChanged.get('likes');
		if(numLikes === 1) {
			$likeButton.html('1 Like');
		}
		else {
			$likeButton.html(numLikes+' Likes');
		}

		$lastClicked.html(likeModelThatWasChanged.get('lastClick'));
	}

	/*
	 * WHEN is it going to happen? (event listeners)
	 */

	// 3a. connect jQuery like button element with onButtonClick function
	$likeButton.on('click', onButtonClick);

	// 3b. connect Backbone like model with onLikeModelChange function
	like.on('change', onLikeModelChange);
});