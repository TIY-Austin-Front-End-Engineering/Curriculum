var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentWillMount: function(){
		this.props.router.on('route', () => {
			this.forceUpdate();
		});
	},
	render: function() {
		var leftLinks = [];
		var rightLinks = [];

		leftLinks.push(this.createNavLink('', 'Home'));

		if(!Parse.User.current()) {
			rightLinks.push(this.createNavLink('login', 'Login'));
			rightLinks.push(this.createNavLink('register', 'Register'));
		}
		else {
			leftLinks.push(this.createNavLink('dashboard', 'Dashboard'));
			rightLinks.push(<li><a href="#" onClick={this.logout}>Logout</a></li>);
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
						{leftLinks}
					</ul>
					<ul className="nav navbar-nav navbar-right">
						{rightLinks}
					</ul>
				</div>
			</div>
		);
	},
	logout: function(e) {
		e.preventDefault();
		Parse.User.logOut();
		this.props.router.navigate('', {trigger: true});
	},
	createNavLink: function(url, label) {
		var currentUrl = Backbone.history.getFragment();
		if(currentUrl === url) {
			return (<li className="active"><a href={'#'+url}>{label}</a></li>);
		}
		else {
			return (<li><a href={'#'+url}>{label}</a></li>);
		}
	}
});