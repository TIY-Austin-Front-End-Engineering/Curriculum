var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<section>
				<div className="job-details">
					<h1>{this.props.job.get('title')}</h1>
					<div className="job-info">
						<div className="employer">{this.props.job.get('company')}</div>
						<div className="location">{this.props.job.get('location')}</div>
					</div>
					<div className="tags">
						<a href="#" className="tag">angularjs</a>
						<a href="#" className="tag">d3.js</a>
						<a href="#" className="tag">javascript</a>
						<a href="#" className="tag">ui</a>
						<a href="#" className="tag">css</a>
					</div>
					<h2>Job description</h2>
					<p>{this.props.job.get('description')}</p>
				</div>
				<div className="company-box">
					<a href="#" className="side-box">
						<h3>Company Information</h3>
						<img src="/images/featured.jpg" />
						<img src="/images/featured-logo.jpg" className="featured-logo" />
						<div className="company">
							<div className="name">MaxPlay</div>
							<div className="city">Austin, TX</div>
						</div>
					</a>
				</div>
			</section>
		);
	}
});