var React = require('react');
var Backbone = require('backbone');
var NavigationComponent = require('./NavigationComponent');
var JobListPageComponent = require('./JobListPageComponent');
var JobDetailsPageComponent = require('./JobDetailsPageComponent');
var AddJobPageComponent = require('./AddJobPageComponent');
var LikeButtonComponent = require('./LikeButtonComponent');
var JobCollection = require('../collections/JobCollection');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			pageName: 'list',
			id: null
		};
	},
	componentWillMount: function() {
		var self = this;
		this.jobs = new JobCollection();
		this.jobs.fetch();
		var Router = Backbone.Router.extend({
			routes: {
				'': 			'list',
				'list': 		'list',
				'add': 			'add',
				'details/:id': 	'details'
			},
			list: function() {
				self.setState({
					pageName: 'list'
				});
			},
			add: function() {
				self.setState({
					pageName: 'add'
				});
			},
			details: function(id) {
				self.setState({
					pageName: 'details',
					id: id
				});
			}
		});

		var r = new Router();
		Backbone.history.start();
	},
	render: function() {
		// console.log('render', this.jobs);
		var pageComponent = null;

		if(this.state.pageName === 'list') {
			pageComponent = <JobListPageComponent jobs={this.jobs} />;
		}
		else if(this.state.pageName === 'details') {
			pageComponent = <JobDetailsPageComponent  />;
		}
		else if(this.state.pageName === 'add') {
			pageComponent = <AddJobPageComponent />;
		}

		return (
			<div>
				<LikeButtonComponent />
				<NavigationComponent />
				<main>
					{pageComponent}
				</main>
			</div>
		);
	}
});