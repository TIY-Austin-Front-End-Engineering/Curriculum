var React = require('react');
var ProductModel = require('../models/ProductModel');

module.exports = React.createClass({
	getInitialState: function() {		
	    return {
	    	products: [],
	    };
	},
	componentWillMount: function() {
		this.getProducts(this.props.category);
	},
	componentWillReceiveProps: function(nextProps) {
		this.getProducts(nextProps.category);
	},
	render: function() {
		var displayCategory = this.props.category.charAt(0).toUpperCase();
		displayCategory += this.props.category.substr(1);

		var productElements = this.state.products.map(function(product) {
			var tableCells = [
				<td>{product.get('name')}</td>,
				<td>{product.get('description')}</td>,
				<td>{product.get('price')}</td>,
				<td>{product.get('category')}</td>
			];
			if(Parse.User.current()) {
				tableCells.push(<td><a href={'#add/'+product.id}>Edit</a></td>)
			}
			return (
				<tr>
					{tableCells}
				</tr>
			);
		});

		return (
			<div className="container">
				<div className="row">
					<h1>{displayCategory}</h1>
					<table>
						<thead>
							<tr>
									<th data-field="name">Name</th>
									<th data-field="description">Description</th>
									<th data-field="price">Price</th>
									<th data-field="category">category</th>
									{Parse.User.current() ? <th>Edit</th> : null }
							</tr>
						</thead>

						<tbody>
							{productElements}
						</tbody>
					</table>
				</div>
			</div>
		);
	},
	getProducts: function(category) {
		var query = new Parse.Query(ProductModel);
		query.equalTo('category', category);
		query.find().then((products) => {
			this.setState({products: products});
		});
	}
});