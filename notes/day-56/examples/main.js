import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';

// import Unicorn from './models/Unicorn';

const ListOfUnicorns = React.createClass({
	getInitialState: function() {
		return {
			collection: [{id: 1}, {id: 2}, {id: 3}]
		}
	},
	render: function() {
		var links = this.state.collection.map((val, i, arr) => {
			return (
				<Link to={`/unicorns/${val.id}`}>unicorn {val.id}</Link>
			)
		})
		return (
			<div>
				{links}
			</div>
		)
	}
})

const SingleUnicorn = React.createClass({
	// getInitialState: function() {
		// return {
		// 	unicorn: new Unicorn({id: this.props.params.unicornId})
		// }
	// },
	componentDidMount: function() {
		// this.state.unicorn.fetch();
		// this.state.unicorn.on('change', (unicorn) => {
		// 	this.setState: this.state.unicorn;
		// })
	},
	render: function() {
		console.log(this.props)
		return (
			<h1>Unicorn {this.props.params.unicornId}</h1>
		)
	}
})

const router = (
	<Router history={hashHistory}>
		<Route path="/unicorns" component={ListOfUnicorns}/>
		<Route path="/unicorns/:unicornId" component={SingleUnicorn}/>
	</Router>
)

render(router, document.getElementById('app'));
