import React from 'react';
import Navigation from './Navigation';

export default React.createClass({
	render: function() {
		return (
			<main>
				<Navigation />
				{this.props.children}
			</main>
		);
	}
});