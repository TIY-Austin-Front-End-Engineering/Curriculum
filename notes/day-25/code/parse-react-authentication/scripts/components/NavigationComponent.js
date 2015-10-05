var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="nav-wrapper">
				<a href="#" className="brand-logo left">Registration Example</a>
				<ul id="nav-mobile" className="right">
					<li><a href="#">Home</a></li>
					<li><a href="#login">Login</a></li>
					<li><a href="#register">Register</a></li>
				</ul>
			</div>
		);
	}
})