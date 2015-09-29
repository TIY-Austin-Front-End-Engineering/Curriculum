var React = require('react');

module.exports = React.createClass({
	render: function() {
		console.log('this.props.model', this.props.model);
		return (
			<button className="like-button">
				{this.props.model.get('likes')} {this.props.model.get('label')}
			</button>
		);
	}
});