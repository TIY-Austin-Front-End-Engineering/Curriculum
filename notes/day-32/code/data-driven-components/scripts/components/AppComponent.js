var React = require('react');
var LikeComponent = require('./LikeComponent');
var LikeModel = require('../models/LikeModel');

var likeModel1 = new LikeModel({likes: 3, label: 'Stars'});
var label1 = "Foo";
var other = 7;

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<LikeComponent model={likeModel1} />
			</div>
		);
	}
});