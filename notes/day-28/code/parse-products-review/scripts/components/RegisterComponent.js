var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return { error: null };
	},
	render: function() {
		var errorElement = null;
		if(this.state.error) {
			errorElement = (
				<p className="red">{this.state.error}</p>
			);
		}
		return (
			<div className="container">
				<div className="row">
					<form className="col s12" onSubmit={this.onRegister}>
						<h1>Register</h1>
						{errorElement}
						<div className="row">
							<div className="input-field col s12">
								<input type="text" ref="email" className="validate" id="email_address" />
								<label htmlFor="first_name">Email Address</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input type="password" ref="password" className="validate" id="password" />
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
	},
	onRegister: function(e) {
		e.preventDefault();
		var user = new Parse.User();
		user.signUp(
			{
				username: this.refs.email.getDOMNode().value,
				password: this.refs.password.getDOMNode().value,
				email: this.refs.email.getDOMNode().value
			},
			{
				success: (u) => {
					this.props.router.navigate('add', {trigger: true});
				},
				error: (u, error) => {
					this.setState({
						error: error.message
					});
				}
			}
		);
	}
});