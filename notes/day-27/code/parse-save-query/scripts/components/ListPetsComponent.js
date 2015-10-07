var React = require('react');
var PetModel = require('../models/PetModel');

module.exports = React.createClass({
	getInitialState: function() {
	    return {
	         pets: [],
	         currentType: null
	    };
	},
	componentWillMount: function() {
		var query = new Parse.Query(PetModel);
		query
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
		var petElements = this.state.pets
		.filter((pet) => {
			if(this.state.currentType === null) {
				return true;
			}
			return (pet.get('type') == this.state.currentType)
		})
		.map(function(pet) {
			return (<a href={'#pet/details/'+pet.id}>{pet.get('name')}</a>);
		});
		return (
			<div className="container pets">
				<h1>List Pets</h1>
				<button onClick={this.showCorgies}>Corgies</button>
				<button onClick={this.showPitBulls}>Pit Bulls</button>
				{petElements}
			</div>
		);
	},
	showCorgies: function() {
		this.setState({
			currentType: 1
		});
	},
	showPitBulls: function() {
		this.setState({
			currentType: 5
		});
	}
});