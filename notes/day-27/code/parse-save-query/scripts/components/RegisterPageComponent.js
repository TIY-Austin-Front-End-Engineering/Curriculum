var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			error: null
		}
	},
	render: function() {
		var errorElement = null;
		if(this.state.error) {
			errorElement = (
				<div className="alert alert-danger" role="alert">{this.state.error}</div>
			);
		}
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-sm-offset-3">
						<h1>Register Page</h1>
						{errorElement}
						<form onSubmit={this.onRegister}>
							<div className="form-group">
								<label htmlFor="firstName">First name</label>
								<input type="text" ref="firstName" className="form-control" id="firstName" placeholder="First Name" />
							</div>
							<div className="form-group">
								<label htmlFor="lastName">Last name</label>
								<input type="text" ref="lastName" className="form-control" id="lastName" placeholder="Last Name" />
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input type="email" ref="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Password</label>
								<input type="password" ref="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
							</div>
							<button type="submit" className="btn btn-default">Submit</button>
						</form>
					</div>
				</div>
			</div>
		);
	},
	onRegister: function(e) {
		e.preventDefault();
		console.log('register');
		var user = new Parse.User();
		user.signUp(
			{
				username: this.refs.email.getDOMNode().value,
				password: this.refs.password.getDOMNode().value,
				email: this.refs.email.getDOMNode().value,
				firstName: this.refs.firstName.getDOMNode().value,
				lastName: this.refs.lastName.getDOMNode().value
			},
			{
				success: (u) => {
					this.props.router.navigate('dashboard', {trigger: true});
				},
				error: (u, error) => {
					this.setState({
						error: error.message
					});
				}
			}
		)
	}
});