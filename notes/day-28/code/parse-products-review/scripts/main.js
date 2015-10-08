'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

Parse.initialize("bWo3oxF8mUmVjOzLWZaeVYGOYRlJAUJVu9RRVVEB", "agubNevaI7RuF4hlu4DVHQWlCc4i3EbTBLSftsLp");

var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var AddProductComponent = require('./components/AddProductComponent');
var LoginComponent = require('./components/LoginComponent');

var RegisterComponent = require('./components/RegisterComponent');
var CategoryComponent = require('./components/CategoryComponent');

var app = document.getElementById('app');

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'add(/:id)': 'add',
		'category/:category': 'category',
		'login': 'login',
		'register': 'register'
	},
	home: function() {
		ReactDOM.render(<HomeComponent />, app);
	},
	add: function(id) {
		if(!Parse.User.current()) {
			this.navigate('login', {trigger: true});
		}
		else {
			ReactDOM.render(<AddProductComponent router={this} productId={id} />, app);
		}
	},
	category: function(category) {
		ReactDOM.render(<CategoryComponent category={category} />, app);
	},
	login: function() {
		ReactDOM.render(<LoginComponent router={r} />, app);
	},
	register: function() {
		ReactDOM.render(<RegisterComponent router={r} />, app);
	}
});

var r = new Router();
Backbone.history.start();

ReactDOM.render(
	<NavigationComponent router={r} />,
	document.getElementById('nav')
);