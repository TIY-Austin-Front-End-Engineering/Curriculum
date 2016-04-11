import cat from './../../assets/orangecat.jpg';
import React from 'react';

const ListItem = React.createClass({
	render: function() {
		return (
			<li>
				<img src={cat} />
				this is a list item
			</li>
		);
	}
});

export default ListItem;