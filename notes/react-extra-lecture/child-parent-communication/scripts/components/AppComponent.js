var React = require('react');
var ListItem = require('./ListItem');
var ImageBoard = require('./ImageBoard');

var categories = [
	'Vegetarian',
	'Burgers',
	'Pizza',
	'Tacos',
	'Salads'
];

module.exports = React.createClass({
	getInitialState: function() {
		return {
			category: null
		};
	},
	render: function() {
		var categoryElements = categories.map((cat) => {
			return <ListItem key={cat} category={cat} onCategoryChange={this.changeCategory} />;
		});

		return (
			<div>
				<ImageBoard>
					<img src="/images/attendance.png" onClick={this.imageClick} />
					<img src="/images/check7.png" onClick={this.imageClick} />
					<img src="/images/createQuiz.png" onClick={this.imageClick} />
				</ImageBoard>
				<h1>{this.state.category || 'Types of food'}</h1>
				<ul>
					{categoryElements}
				</ul>
			</div>
		);
	},
	imageClick: function() {
		console.log('image was clicked');
	},
	changeCategory: function(cat) {
		console.log('category changed', cat);
		this.setState({category: cat})
	}
});