var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="col-sm-6">
				<button onClick={this.onButtonClick}>Click me!</button>
			</div>
		);
	},
	onButtonClick: function(e) {
		console.log('trigger event');
		this.props.dispatcher.trigger('greeting', 'hello');
	}
});