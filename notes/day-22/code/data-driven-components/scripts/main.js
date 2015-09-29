'use strict';

var React = require('react');
var AppComponent = require('./components/AppComponent');

var mainEl = document.getElementById('main');

React.render(
	<AppComponent />,
	mainEl
);