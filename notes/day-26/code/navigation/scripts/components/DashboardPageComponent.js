var React = require('react');
var DashButtonComponent = require('./DashButtonComponent');
var DashBoxComponent = require('./DashBoxComponent');
var _ = require('backbone/node_modules/underscore');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentWillMount: function() {
		this.dispatcher = {};
		_.extend(this.dispatcher, Backbone.Events);
	},
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<h1>Dashboard Page</h1>
				</div>
				<div className="row">
					<DashButtonComponent dispatcher={this.dispatcher} />
					<DashBoxComponent dispatcher={this.dispatcher} />
				</div>
			</div>
		);
	}
});