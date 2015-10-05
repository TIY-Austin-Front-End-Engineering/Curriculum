'use strict';
var React = require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var LoginComponent = require('./components/LoginComponent');
var RegisterComponent = require('./components/RegisterComponent');

var app = document.getElementById('app');

React.render(
	<NavigationComponent />,
	document.getElementById('nav')
);

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'login': 'login',
		'register': 'register'
	},
	home: function() {
		React.render(<HomeComponent />, app);
	},
	login: function() {
		React.render(<LoginComponent />, app);
	},
	register: function() {
		React.render(<RegisterComponent />, app);
	}
});

var r = new Router();
Backbone.history.start();