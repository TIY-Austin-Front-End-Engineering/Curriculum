import React from 'react';
import ListItem from './ListItem.js';

const List = React.createClass({
	render: function() {
		let myListItems = [
			<ListItem key="1" />,
			<ListItem key="2" />,
			<ListItem key="3" />,
			<ListItem key="4" />,
			<ListItem key="5" />
		];
		return (
			<div>
				<h1>Hello</h1>
				<ul>
					{myListItems}
				</ul>
			</div>
		);
	}
});

export default List;