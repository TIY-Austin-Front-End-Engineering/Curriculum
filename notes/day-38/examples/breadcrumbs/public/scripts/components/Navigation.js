import React from 'react';
import {Link} from 'react-router';
import user from '../models/user';
import $ from 'jquery';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user
		};
	},
	componentDidMount: function() {
		this.state.user.on('change', () => {
			console.log('the use was changed');
			this.setState({
				user: user
			});
		});
	},
	render: function() {
		console.log('navigation render');
		if(this.state.user.get('id')) {
			return (
				<nav>
					<Link to="/">Home</Link>
					<a href="#" onClick={this.logout}>Logout</a>
					<a href="#">{this.state.user.get('firstName')}</a>
				</nav>
			);
		}
		else {
			return (
				<nav>
					<Link to="/">Home</Link>
					<Link to="/login">Login</Link>
					<Link to="/register">Register</Link>
				</nav>
			);
		}
	},
	logout: function(e) {
		e.preventDefault();
		console.log('logout click happened');
		this.state.user.clear();
		$.ajax({
			type: 'POST',
			url: '/auth/logout'
		});
	}
});