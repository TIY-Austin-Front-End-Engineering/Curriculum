var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			popup: null
		};
	},
	componentWillMount: function() {
		this.props.router.on('route', () => {
			this.forceUpdate();
		});
	},
	render: function() {
		var popupEl = null;
		var currentPage = Backbone.history.getFragment();
		console.log(currentPage === 'category/books');

		var links = [
			<li key="home" className={currentPage === '' ? 'active' : ''}><a href="#">Home</a></li>,
			<li key="books" className={currentPage === 'category/books' ? 'active' : ''}><a href="#category/books">Books</a></li>,
			<li key="electronics" className={currentPage === 'category/electronics' ? 'active' : ''}><a href="#category/electronics">Electronics</a></li>,
			<li key="clothing" className={currentPage === 'category/clothing' ? 'active' : ''}><a href="#category/clothing">Clothing</a></li>
		];

		if(Parse.User.current()) {
			links.push(<li key="add" className={currentPage === 'add' 	? 'active' : ''}><a href="#add">Add Product</a></li>)
			links.push(<li key="logout"><a href="#logout" onClick={this.onLogout}>Logout</a></li>)
		}
		else {
			links.push(<li key="login" className={currentPage === 'login' 		? 'active' : ''}><a href="#login" onClick={this.onLogin}>Login</a></li>);
			links.push(<li key="register" className={currentPage === 'register' 	? 'active' : ''}><a href="#register" onClick={this.onRegister}>Register</a></li>);
		}

		if(this.state.popup === 'login') {
			popupEl = (
				<div className="popup login">
					<h4>Login</h4>
				</div>
			);
		}
		else if(this.state.popup === 'register') {
			popupEl = (
				<div className="popup register">
					<h4>Register</h4>
				</div>
			);
		}


		return (
			<div className="nav-wrapper">
				<a href="#" className="brand-logo left">Login Example</a>
				<ul id="nav-mobile" className="right">
					{links}
				</ul>
				{popupEl}
			</div>
		);
	},
	onLogout: function(e) {
		e.preventDefault();
		Parse.User.logOut();
		this.props.router.navigate('', {trigger: true});
	},
	onLogin: function(e) {
		e.preventDefault();
		if(this.state.popup === 'login') {
			this.setState({
				popup: null
			});
		}
		else {
			this.setState({
				popup: 'login'
			});
		}
	},
	onRegister: function(e) {
		e.preventDefault();
		if(this.state.popup === 'register') {
			this.setState({
				popup: null
			});
		}
		else {
			this.setState({
				popup: 'register'
			});
		}
	}
})