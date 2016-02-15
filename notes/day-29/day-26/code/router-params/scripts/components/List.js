var React = require('react');
var ListItem = require('./ListItem');

module.exports =  React.createClass({
	render: function() {
		console.log(this.props.router);
		// var jobElements = this.props.jobs.map(function(job) {
		// 	var companyId = job.get('companyId');
		// 	var company = this.props.companies.get(companyId)
		// 	return <JobItem company={company} job={job} key={job.cid} />
		// });
		var companyElements = this.props.companies.map(function(x) {
			return (<ListItem model={x} key={x.id} />);
		});
		return (
			<div>
				<h1>List</h1>
				{companyElements}
			</div>
		);
	}
})