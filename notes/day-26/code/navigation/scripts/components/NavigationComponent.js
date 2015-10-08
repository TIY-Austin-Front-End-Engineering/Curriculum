var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentWillMount: function() {
		this.props.router.on('route', () => {
			this.forceUpdate();
		});
	},
	render: function() {
		var currentPage = Backbone.history.getFragment();
		console.log('render', currentPage);
		var links = [];

		if(currentPage === '') {
			links.push(<li key="home" className="active"><a href="#">Home</a></li>);
		}
		else {
			links.push(<li key="home"><a href="#">Home</a></li>);
		}

		if(Parse.User.current()) {
			if(currentPage === 'dashboard') {
				links.push(<li key="dashboard" className="active"><a href="#dashboard">Dashboard</a></li>);
			}
			else {
				links.push(<li key="dashboard"><a href="#dashboard">Dashboard</a></li>);
			}
		}
		else {
			if(currentPage === 'login') {
				links.push(<li key="login" className="active"><a href="#login">Login</a></li>);
			}
			else {
				links.push(<li key="login"><a href="#login">Login</a></li>);
			}

			if(currentPage === 'register') {
				links.push(<li key="register" className="active"><a href="#register">Register</a></li>);
			}
			else {
				links.push(<li key="register"><a href="#register">Register</a></li>);
			}
		}



		return (
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#">Brand</a>
				</div>
				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav navbar-left">
						{links}
					</ul>
				</div>
			</div>
		);
	}
});