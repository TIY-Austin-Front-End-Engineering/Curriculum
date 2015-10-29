var React = require('react');

module.exports = React.createClass({
	render: function() {
		return <li><a href="#" onClick={this.listItemClick}>{this.props.category}</a></li>;
	},
	listItemClick: function() {
		console.log('listItemClick');
		this.props.onCategoryChange(this.props.category);
	}
});