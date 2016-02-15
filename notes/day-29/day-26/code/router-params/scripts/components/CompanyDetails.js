var React = require('react');

module.exports =  React.createClass({
	render: function() {
		return (
			<div>
				<h1>{this.props.company.get('name')}</h1>
				<div>{this.props.company.get('location')}</div>
				<div>{this.props.company.get('employees')} employees</div>
				<p>{this.props.company.get('description')}</p>
			</div>
		);
	}
})