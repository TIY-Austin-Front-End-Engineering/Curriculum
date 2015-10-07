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
							<div className="checkbox" ref="colors">
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
		// colorBoxes is a DomNodeList of all of the checkboxes (it's like an
		// array but not)
		var colorBoxes = this.refs.colors.getDOMNode().querySelectorAll('input');
		// console.log(colorBoxes);

		// DOMNodeList's don't have a filter or map methods, so we need to
		// convert the DOMNodeList to an array
		// var colorBoxesArray = [].slice.call(colorBoxes);

		var colorStringsArray = [];
		for(var i = 0; i < colorBoxes.length; i++) {
			var currentColor = colorBoxes[i];
			if(currentColor.checked) {
				colorStringsArray.push(currentColor.value);
			}
		}

		// Now colorBoxesArray is an array and we can use filter to find all of
		// // the checked boxes and then map to convert those elements to their
		// // string values.
		// var colorStringsArray = colorBoxesArray
		// .filter(function(input) {
		// 	return input.checked;
		// })
		// .map(function(input) {
		// 	return input.value;
		// });

		// console.log(colorStringsArray);

		var newPet = new PetModel({
			name: this.refs.name.getDOMNode().value,
			type: this.refs.type.getDOMNode().value,
			legLength: this.refs.legLength.getDOMNode().value,
			user: Parse.User.current(),
			colors: colorStringsArray
		});

		newPet.save();
	}
});