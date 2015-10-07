var React = require('react');
var PetModel = require('../models/PetModel');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-sm-offset-3">
						<h1>Add a Pet</h1>
						<form onSubmit={this.onAddPet}>
							<div className="form-group">
								<label htmlFor="name">Name</label>
								<input type="text" ref="name" className="form-control" id="name" placeholder="Name" />
							</div>
							<div className="form-group">
								<label htmlFor="type">Type</label>
								<select className="form-control" id="type" ref="type">
									<option value="1">Corgie</option>
									<option value="2">Sheltie</option>
									<option value="3">Centaur</option>
									<option value="4">Puma</option>
									<option value="5">Pitt Bull</option>
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="leg-length">Leg Length</label>
								<input type="text" ref="legLength" className="form-control" id="leg-length" placeholder="Leg Length" />
							</div>
							<div className="checkbox">
								<div>Color</div>
								<label>
									<input type="checkbox" value="brown" /> Brown
								</label>
								<label>
									<input type="checkbox" value="black" /> Black
								</label>
								<label>
									<input type="checkbox" value="white" /> White
								</label>
								<label>
									<input type="checkbox" value="pink" /> Pink
								</label>
							</div>
							<button type="submit" className="btn btn-default">Add Pet</button>
						</form>
					</div>
				</div>
			</div>
		);
	},
	onAddPet: function(e) {
		e.preventDefault();
		console.log('save pet');
		var newPet = new PetModel({
			name: this.refs.name.getDOMNode().value,
			type: this.refs.type.getDOMNode().value,
			legLength: this.refs.legLength.getDOMNode().value,
			user: Parse.User.current()
		});

		newPet.save();
	}
});