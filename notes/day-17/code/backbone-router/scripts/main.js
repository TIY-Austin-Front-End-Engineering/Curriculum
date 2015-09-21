'use strict';

// Backbone router example

var Router = Backbone.Router.extend({
	routes: {
		'home': 'goHome',
		'away': 'getAway',
	},
	goHome: function() {
		$('section').hide();
		$('#home').show();
	},
	getAway: function() {
		$('section').hide();
		$('#away').show();
	}
});

var foo = new Router();
Backbone.history.start();

// $('button').on('click', function() {
// 	foo.navigate('projects/router', {trigger: false});
// });

// Home grown router example

// function Router() {
// 	var self = this;

// 	this.routes = {
// 		'home': 'goHome',
// 		'away': 'getAway'
// 	};

// 	this.goHome = function() {
// 		console.log('you are home');
// 	}

// 	this.getAway = function() {
// 		console.log('you ran away');
// 	}

// 	window.onhashchange = function() {
// 		console.log('onhashchange');
// 		var currentRoute = window.location.hash.substr(1);
// 		var functionToRun = self.routes[currentRoute];
// 		// console.log(currentRoute);
// 		console.log(functionToRun);
// 		self[functionToRun]();
// 	};
// }

// var r = new Router();