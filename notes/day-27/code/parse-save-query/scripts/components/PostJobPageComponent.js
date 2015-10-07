var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-sm-offset-3">
						<h1>Post a Job</h1>
						<form onSubmit={this.onPostJob}>
							<div className="form-group">
								<label htmlFor="job-title">Title</label>
								<input type="text" ref="jobTitle" className="form-control" id="job-title" placeholder="Job Title" />
							</div>
							<div className="form-group">
								<label htmlFor="company-name">Company Name</label>
								<input type="text" ref="companyName" className="form-control" id="company-name" placeholder="Company Name" />
							</div>
							<div className="form-group">
								<label htmlFor="job-description">Description</label>
								<textarea ref="jobDescription" className="form-control" rows="5" id="job-description" placeholder="Job Description"></textarea>
							</div>
							<button type="submit" className="btn btn-default">Post Job</button>
						</form>
					</div>
				</div>
			</div>
		);
	},
	onPostJob: function(e) {
		e.preventDefault();
		console.log('post job');
	}
});