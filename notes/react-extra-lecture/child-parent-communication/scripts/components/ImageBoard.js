var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="image-board">
				<h3>Image Board</h3>
				{this.props.children}
			</div>
		);
	}
});