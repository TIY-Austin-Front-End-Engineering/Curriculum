import React from 'react';

export default React.createClass({
	render: function() {
		let tags = this.props.model.get('tags').map(tag => {
			return <span className="skill" key={tag}>{tag}</span>;
		});
		return (
			<div className="job-post">
				<span className="date-posted">{this.props.model.get('createdAt')}</span>
				<h2>{this.props.model.get('title')}</h2>
				<p className="company-info"><span className="emphasis">{this.props.model.get('companyName')}</span> &middot; {this.props.location}</p>
				<p className="job-description">{this.props.model.get('description')}</p>
				<p>
					{tags}
				</p>	
			</div>
		);
	}
});