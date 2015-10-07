var React = require('react');
var PetModel = require('../models/PetModel');

module.exports = React.createClass({
	getInitialState: function() {
	    return {
	         pets: [] 
	    };
	},
	componentWillMount: function() {
		var query = new Parse.Query(PetModel);
		query
		.equalTo('user', Parse.User.current())
		.find().then(
			(pets) => {
				this.setState({pets: pets});
			},
			(err) => {
				console.log(err);
			}
		);
	},
	render: function() {
		var petElements = this.state.pets.map(function(pet) {
			return (<a href={'#pet/details/'+pet.id}>{pet.get('name')}</a>);
		});
		return (
			<div className="container">
				<h1>List Pets</h1>
				{petElements}
			</div>
		);
	}
});