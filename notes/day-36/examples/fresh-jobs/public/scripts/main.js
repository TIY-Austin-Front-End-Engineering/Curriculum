import React from 'react';
import ReactDOM from 'react-dom';
import TodoItemComponent from './components/TodoItemComponent.js';

import {Router, Route, hashHistory} from 'react-router';

import JobPostComponent from './components/job-post.js';



ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={TodoItemComponent} />
		<Route path="/new-job" component={JobPostComponent} />
	</Router>,
	document.querySelector('main')
);
