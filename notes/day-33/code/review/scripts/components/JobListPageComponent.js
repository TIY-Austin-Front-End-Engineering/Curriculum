var React = require('react');
var JobRowComponent = require('./JobRowComponent');

module.exports = React.createClass({
	componentWillMount: function() {
		var self = this;
		this.props.jobs.on('sync', function() {
			self.forceUpdate();
		});
	},
	render: function() {

		var jobRows = this.props.jobs.map(function(job) {
			return (
				<JobRowComponent job={job} />
			);
		});

		return (
			<section>
				<div className="jobs">
					<form>
						<label className="keyword-label">
							<div>Keywords</div>
							<input type="text" name="keywords" />
						</label>
						<label className="location-label">
							<div>Location</div>
							<input type="text" name="location" />
						</label>
						<button className="search">Search</button>
					</form>
					<div className="list">
						{jobRows}
					</div>
				</div>

				<div className="ads">
					<div className="info">
						<h2>Looking for a job?</h2>
						<p>
							Create a Fresh Jobs profile and <strong>let employers come to you</strong>.
						</p>
						<ul>
							<li>Employers search our database and contact you</li>
							<li>Import easily from LinkedIn</li>
							<li>Link to Stack Overflow, GitHub, CodePlex and more</li>
						</ul>
						<button>Create a Profile</button>
					</div>
					<a href="#" className="side-box">
						<h3>Featured Company</h3>
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