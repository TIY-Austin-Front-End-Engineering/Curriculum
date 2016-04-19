import React from 'react';
import CompanySelection from './CompanySelection';
import JobModel from '../models/JobModel';
import {hashHistory} from 'react-router';

export default React.createClass({
	getInitialState: function() {
		return {
			company: null,
			loading: false,
			errors: {}
		};
	},
	render: function() {
		return (
			<section>
				<h1>Post your Job</h1>
				<form onSubmit={this.postJob}>
					<div className="form-row">
						<label>
							<div className="label">Title</div>
							<input type="text" ref="title" />
						</label>
						<div className="error">{this.state.errors.title}</div>
					</div>
					<div className="form-row">
						<label>
							<div className="label">Location</div>
							<input type="text" ref="location" />
						</label>
						<div className="error">{this.state.errors.location}</div>
					</div>
					<div className="form-row">
						<label>
							<div className="label">Description</div>
							<textarea ref="description" />
						</label>
						<div className="error">{this.state.errors.description}</div>
					</div>
					<div className="form-row">
						<label>
							<div className="label">Tags</div>
							<input type="text" ref="tags" />
						</label>
						<div className="error">{this.state.errors.tags}</div>
					</div>
					<input type="submit" style={{display: 'none'}} />
				</form>
				<CompanySelection onCompanyClick={this.onCompanyChange} company
				={this.state.company} />
				<div className="error">{this.state.errors.company}</div>
				<button className="btn primary" onClick={this.postJob} disabled={this.state.loading}>Post Job</button>
			</section>
		);
	},
	onCompanyChange: function(company) {
		this.setState({company: company});
	},
	postJob: function(e) {
		e.preventDefault();
		let errors = {};
		if(!this.refs.title.value) {
			errors.title = 'Please enter a job title';
		}
		if(!this.refs.location.value) {
			errors.location = 'Please enter a job location';
		}
		if(!this.refs.description.value) {
			errors.description = 'Please enter a job description';
		}
		console.log(this.state.company);
		if(!this.state.company || !this.state.company.id) {
			errors.company = 'Please add or select a company';
		}

		if(Object.keys(errors).length) {
			this.setState({
				errors: errors
			});
		}
		else {
			let tags = this.refs.tags.value.split(',').map(tag => tag.trim());
			this.setState({ loading: true, errors: {}});
			let model = new JobModel();
			model.save(
				{
					title: this.refs.title.value,
					description: this.refs.description.value,
					location: this.refs.location.value,
					tags: JSON.stringify(tags),
					companyId: this.state.company.id
				},
				{
					success: (job) => {
						hashHistory.push('/');
					},
					error: (model, err) => {
						this.setState({ errors: err.e.toJSON(), loading: false });
					}
				}
			);
		}
	}
});