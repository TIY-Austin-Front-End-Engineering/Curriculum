var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return { numClicks: 0 };
	},
	componentWillMount: function() {
		var self = this;
		this.props.dispatcher.on('greeting', function(e) {
			self.setState({
				numClicks: self.state.numClicks+1
			});
		});
	},
	render: function() {
		return (
			<div className="col-sm-6">
				<h3>There have been {this.state.numClicks} clicks</h3>
			</div>
		);
	}
});