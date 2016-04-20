import React from 'react';
import Navigation from './Navigation';

export default React.createClass({
	render: function() {
		return (
			<section>
				<Navigation />
				<h1>Login</h1>
				<form>
					<input type="text" placeholder="email"/>
					<input type="password" placeholder="password" />
					<button type="submit">Login</button>
				</form>
			</section>
		);
	}
});