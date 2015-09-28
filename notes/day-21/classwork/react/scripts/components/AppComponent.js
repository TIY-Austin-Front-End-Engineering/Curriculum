var React = require('react');
var HelloComponent = require('./HelloComponent.js');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="app">
				<h1>This is my app component</h1>
				<HelloComponent />
				{this.props.children}
			</div>
		);
	}
});