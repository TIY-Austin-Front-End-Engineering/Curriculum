import React from 'react';
import TodoCollection from '../collections/TodoCollection.js';

export default React.createClass({
	getInitialState: function() {
		console.log('getInitialState');
		console.log(this.state);
		let thing = new TodoCollection();
		return {
			items: thing
		};
	},
	componentDidMount: function() {
		console.log('componentDidMount');
		console.log(this.state);
		this.state.items.on('update', () => {
			console.log('update');
			console.log(this.state);
			this.setState({
				items: this.state.items
			});
		});
		this.state.items.fetch();
	},
	render: function() {
		console.log('render');
		console.log(this.state);
		
		let todoItemElements = this.state.items.map((val, index, array) => {
			return (
				<div>{val.get('name')}</div>
			);
		});

		console.log(todoItemElements);

		return (
			<div>
				<h1>It worked</h1>
				<form onSubmit={this.addTodo}>
					<input type="text" ref="name" />
					<button type="submit">Add Todo</button>
				</form>
				{todoItemElements}
			</div>
		);
	},
	addTodo: function(e) {
		e.preventDefault();
		console.log('addTodo');
		console.log(this.state);
		this.state.items.create({
			name: this.refs.name.value,
			completed: false
		});

	}
});