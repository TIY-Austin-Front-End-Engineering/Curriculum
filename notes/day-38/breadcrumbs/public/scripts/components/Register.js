import React from 'react';
import $ from 'jquery';
import {hashHistory} from 'react-router';
import Navigation from './Navigation';
import user from '../models/user';

export default React.createClass({
	getInitialState: function() {
		console.log('getInitialState');
		return {
			errors: {},
			user: user
		};
	},
	render: function() {
		console.log('render');
		return (
			<section>
				<Navigation />
				<h1>Register</h1>
				<form onSubmit={this.register}>
					<input type="text" placeholder="first name" ref="firstName"/>
					<input type="text" placeholder="last name" ref="lastName"/>
					<input type="text" placeholder="email" ref="email"/>
					<div className="error">{this.state.errors.email ? this.state.errors.email.message : null}</div>
					<input type="password" placeholder="password" ref="password" />
					<div className="error">{this.state.errors.password ? this.state.errors.password.message : null}</div>
					<button type="submit">Register</button>
				</form>
			</section>
		);
	},
	register: function(e) {
		console.log('register');
		e.preventDefault();
		$.ajax({
			url: '/auth/register',
			type: 'POST',
			data: {
				email: this.refs.email.value,
				password: this.refs.password.value,
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value
			},
			// dataType: 'json',
			headers: {
				Accept: 'application/json'
			},
			success: (registeredUser) => {
				console.log('success');
				console.log(registeredUser);
				this.state.user.set(registeredUser);
				console.log(this.state.user);
				hashHistory.push('/');
			},
			error: (errorArg) => {
				console.log('error');
				console.log(errorArg);
				this.setState({errors: errorArg.responseJSON});
			}
		});
	}
});