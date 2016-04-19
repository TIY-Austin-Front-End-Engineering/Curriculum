import React from 'react';
import jobs from '../stores/jobs';
import JobRow from './JobRow';

export default React.createClass({
	render: function() {
		let jobElements = jobs.map(job => {
			return <JobRow model={job} key={job.cid} />;
		});
		return (
			<section>
				<h1>Home</h1>
				<form>
					<div>
						<label htmlFor="keyword">Keyword</label>
						<input type="text" id="keyword" placeholder="keyword" />
					</div>
					<div>
						<label htmlFor="location">Location</label>			
						<input type="text" id="location" placeholder="location" />
					</div>
					<button>Search</button>
				</form>
				<div>
					{jobElements}
				</div>
			</section>
		);
	}
});