(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// Backbone router example

var Router = Backbone.Router.extend({
	routes: {
		'home': 'goHome',
		'away': 'getAway'
	},
	goHome: function goHome() {
		$('section').hide();
		$('#home').show();
	},
	getAway: function getAway() {
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

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map