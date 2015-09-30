var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			likes: 0
		};
	},
	render: function() {
		return (
			<button onClick={this.addLike}>{this.state.likes} Likes</button>
		);
	},
	addLike: function(e) {
		console.log('add like');
		this.setState({
			likes: this.state.likes + 1
		})
	}
});