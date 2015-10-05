'use strict';
var React = require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;
Parse.initialize('Csg0scEKmSx6TxexJhbyVDWkEKS8pV44n5Gz5MGM', 'MVwZx5d3acjBFRpMTVQxxCu2Xp1rvkHE3mltdNbB');

var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var LoginComponent = require('./components/LoginComponent');
var RegisterComponent = require('./components/RegisterComponent');

var app = document.getElementById('app');
var nav = document.getElementById('nav');

React.render(
	<NavigationComponent />,
	nav
);

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'login': 'login',
		'register': 'register'
	},
	home: function() {
		React.render(
			<HomeComponent />,
			app
		);
	},
	login: function() {
		React.render(
			<LoginComponent />,
			app
		);
	},
	register: function() {
		React.render(
			<RegisterComponent router={r} />,
			app
		);
	}
});

var r = new Router();
Backbone.history.start();