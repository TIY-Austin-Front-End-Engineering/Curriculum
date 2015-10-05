var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			error: null
		};
	},
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<form className="col s12" onSubmit={this.onRegister}>
						<h1>Register</h1>
						<p>{this.state.error}</p>
						<div className="row">
							<div className="input-field col s12">
								<input type="text" className="validate" id="first_name" ref="email" />
								<label htmlFor="first_name">Email Address</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input id="password" type="password" className="validate" ref="password" />
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
		var email = this.refs.email.getDOMNode().value;
		var password = this.refs.password.getDOMNode().value;

		var user = new Parse.User();
		user.set('username', email);
		user.set('password', password);
		user.set('email', email);

		user.signUp(null, {
			success: (user) => {
				console.log('success', user);
				this.setState({
					error: null
				});
				this.props.router.navigate('');
			},
			error: (user, err) => {
				console.log('error', user, err);
				this.setState({
					error: err.message
				});
			}
		});
	}
});