'use strict';
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var LikeModel = require('../models/LikeModel.js')
module.exports = Backbone.View.extend({
	tagName: 'button',
	// events: {
	// 	'click': 'onLikeButtonClick'
	// },
	initialize: function(options) {
		_.bindAll(
			this,
			'onLikeButtonClick',
			'render'
		);
		if(typeof options === 'undefined') {
			console.log('undefined');
			this.options = {
				color: 'auto'
			};
		}
		else {
			this.options = options;
		}
		console.log('the like button was just created');
		// this.model = new LikeModel();
		this.$el.on('click', this.onLikeButtonClick);
		this.model.on('change', this.render);
		this.render();
	},
	render: function() {
		console.log(this.options);
		this.$el.css('background', this.options.color);
		var numLikes = this.model.get('likes');
		if(numLikes === 1) {
			this.$el.html('1 Like');
		}
		else {
			this.$el.html(numLikes+' Likes');
		}
	},
	onLikeButtonClick: function() {
		var newNumberOfLikes = this.model.get('likes')+1;
		this.model.set({
			likes: newNumberOfLikes,
			lastClick: new Date()
		});
	}
});