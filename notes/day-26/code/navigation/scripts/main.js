'use strict';
var React = require('react');
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore')
var HomePageComponent = require('./components/HomePageComponent');
var PostJobPageComponent = require('./components/PostJobPageComponent');
var DashboardPageComponent = require('./components/DashboardPageComponent');
var LoginPageComponent = require('./components/LoginPageComponent');
var RegisterPageComponent = require('./components/RegisterPageComponent');
var NavigationComponent = require('./components/NavigationComponent');
var $ = require('jquery');
window.$ = $;
window.jQuery = $;
require('bootstrap');

Parse.initialize(
	'bWo3oxF8mUmVjOzLWZaeVYGOYRlJAUJVu9RRVVEB',
	'agubNevaI7RuF4hlu4DVHQWlCc4i3EbTBLSftsLp'
);

var app = document.getElementById('app');

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'post-job': 'postJob',
		'dashboard': 'dashboard',
		'register': 'register',
		'login': 'login'
	},
	home: function() {
		React.render(
			<HomePageComponent />,
			app
		);
	},
	postJob: function() {
		if(!Parse.User.current()) {
			this.navigate('login', {trigger: true});
		}
		else {
			React.render(
				<PostJobPageComponent />,
				app
			);
		}
	},
	dashboard: function() {
		if(!Parse.User.current()) {
			this.navigate('login', {trigger: true});
		}
		else {
			React.render(
				<DashboardPageComponent />,
				app
			);
		}
	},
	register: function() {
		if(Parse.User.current()) {
			this.navigate('dashboard', {trigger: true});
		}
		else {
			React.render(
				<RegisterPageComponent router={this} />,
				app
			);
		}
	},
	login: function() {
		if(Parse.User.current()) {
			this.navigate('dashboard', {trigger: true});
		}
		else {
			React.render(
				<LoginPageComponent router={this} />,
				app
			);
		}
	}
});

var r = new Router();
Backbone.history.start();

React.render(
	<NavigationComponent router={r} />,
	nav
);