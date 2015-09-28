var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="greeting">
				Hello <strong>React!</strong>
				<form>
					<input type="text" placeholder="name" />
					<button>Awesome Button</button>
				</form>
			</div>
		);
	}
});