'use strict';

var React = require('react');
var AppComponent = require('./components/AppComponent.js');
var HelloComponent = require('./components/HelloComponent.js');

var mainElement = document.getElementById('main-content');
var otherElement = document.getElementById('other-content');

React.render(
	<AppComponent></AppComponent>,
	// React.createElement(AppComponent)
	mainElement
);




var Router = Backbone.Router.extend({
	routes: {
		'home': 'home',
		'jobs': 'jobs'
	},
	home: function() {
		React.render(
			<HomeComponent />,
			otherElement
		);
	},
	jobs: function() {
		React.render(
			<HomeComponent />,
			otherElement
		);
	}
})