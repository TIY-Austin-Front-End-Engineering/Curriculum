var React = require('react');
var Backbone = require('backbone');
var NavigationComponent = require('./NavigationComponent');
var JobListPageComponent = require('./JobListPageComponent');
var JobDetailsPageComponent = require('./JobDetailsPageComponent');
var AddJobPageComponent = require('./AddJobPageComponent');
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
		// this.jobs.fetch();
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

		this.router = new Router();
		Backbone.history.start();
	},
	render: function() {
		// console.log('render', this.jobs);
		var pageComponent = null;

		if(this.state.pageName === 'list') {
			console.log(this.jobs);
			pageComponent = <JobListPageComponent jobs={this.jobs} />;
		}
		else if(this.state.pageName === 'details') {
			var currentJobId = this.state.id;
			var jobModel = this.jobs.find(function(job) {
				return job.cid === this.state.id;
			}, this);
			console.log(jobModel);
			pageComponent = <JobDetailsPageComponent job={jobModel} />;
		}
		else if(this.state.pageName === 'add') {
			pageComponent = <AddJobPageComponent jobs={this.jobs} router={this.router} />;
		}

		return (
			<div>
				<NavigationComponent />
				<main>
					{pageComponent}
				</main>
			</div>
		);
	}
});