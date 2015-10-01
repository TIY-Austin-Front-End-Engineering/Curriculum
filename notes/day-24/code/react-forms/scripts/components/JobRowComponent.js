var React = require('react');

module.exports = React.createClass({
	render: function() {
		console.log(this.props.job);
		return (
			<div>
				<header>
					<a href="#details/{this.props.job.get('_id')}">{this.props.job.get('title')}</a>
					<div className="date-posted">yesterday</div>
				</header>
				<div className="job-info">
					<div className="employer">{this.props.job.get('company')}</div>
					<div className="location">{this.props.job.get('location')}</div>
				</div>
				<div className="short-description">{this.props.job.get('description')}</div>
				<div className="tags">
					<a href="#" className="tag">angularjs</a>
					<a href="#" className="tag">d3.js</a>
					<a href="#" className="tag">javascript</a>
					<a href="#" className="tag">ui</a>
					<a href="#" className="tag">css</a>
				</div>
			</div>
		);
	}
});