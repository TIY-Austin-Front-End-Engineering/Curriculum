import React from 'react';
import $ from 'jquery';
import user from '../stores/user';
import {hashHistory} from 'react-router';

export default React.createClass({
	getInitialState: function() {
		return {
			errors: {}
		};
	},
	render: function() {
		return (
			<section>
				<h1>Register Page</h1>
				<form onSubmit={this.register}>
					<div>
						<div className="error">{this.state.errors.firstName}</div>
						<input type="text" placeholder="first name" ref="firstName" />
					</div>
					<div>
						<div className="error">{this.state.errors.lastName}</div>
						<input type="text" placeholder="last name" ref="lastName" />
					</div>
					<div>
						<div className="error">{this.state.errors.email}</div>
						<input type="text" placeholder="email" ref="email" />
					</div>
					<div>
						<div className="error">{this.state.errors.password}</div>
						<input type="password" placeholder="password" ref="password" />
					</div>
					<button type="submit">Register</button>
				</form>
			</section>
		);
	},
	register: function(e) {
		e.preventDefault();
		$.ajax({
			url: '/auth/register',
			method: 'post',
			accepts: 'application/json',
			data: {
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				email: this.refs.email.value,
				password: this.refs.password.value
			}
		})
		.done(u => {
			user.set(u);
			hashHistory.push('/');
		})
		.error(err => {
			this.setState({
				errors: err.e.toJSON()
			});
		});
	}
});