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
						<h1>Login Page</h1>
						{errorElement}
						<form onSubmit={this.onLogin}>
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
	onLogin: function(e) {
		e.preventDefault();
		Parse.User.logIn(
			this.refs.email.getDOMNode().value,
			this.refs.password.getDOMNode().value,
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