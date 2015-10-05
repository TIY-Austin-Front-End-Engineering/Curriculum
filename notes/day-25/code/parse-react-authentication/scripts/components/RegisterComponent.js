var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<form className="col s12">
						<h1>Register</h1>
						<div className="row">
							<div className="input-field col s12">
								<input type="text" className="validate" id="first_name" />
								<label htmlFor="first_name">Email Address</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input id="password" type="password" className="validate" />
								<label htmlFor="password">Password</label>
							</div>
						</div>
						<div className="row">
							<button className="waves-effect waves-light btn">Register</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
});