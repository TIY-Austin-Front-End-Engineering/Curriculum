'use strict';

var React = require('react');
var AppComponent = require('./components/AppComponent.js');
var JobTipsComponent = require('./components/JobTipsComponent.js');

React.render(
	<JobTipsComponent />,
	document.getElementById('put-component-here')
);