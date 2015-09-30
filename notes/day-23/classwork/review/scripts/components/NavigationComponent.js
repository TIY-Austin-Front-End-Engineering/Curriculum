var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<nav>
				<div>
					<a href="#" className="logo">
						<img src="/images/logo.png" />
						<div>Fresh Jobs</div>
					</a>
					<div className="links">
						<a href="#list">Jobs</a>
						<a href="#companies">Companies</a>
						<a href="#cities">Cities</a>
						<a href="#about">Why Fresh?</a>
						<a href="#add">For Employers</a>
					</div>
				</div>
			</nav>
		);
	}
});