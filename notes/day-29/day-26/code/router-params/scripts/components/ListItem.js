var React = require('react');

module.exports =  React.createClass({
	render: function() {
		return (
			<a href={'#details/'+this.props.model.get('name')+'/'+this.props.model.get('id')}>{this.props.model.get('name')}</a>
		);
	}
})