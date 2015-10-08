var React = require('react');
var ProductModel = require('../models/ProductModel');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			error: null,
			product: this.props.productId ? null : new ProductModel()
		};
	},
	componentWillMount: function() {
		var query;
		if(this.props.productId) {
			query = new Parse.Query(ProductModel);
			query.get(this.props.productId).then(
				(productModelFromServer) => {
					this.setState({
						product: productModelFromServer
					});
				},
				(err) => {
					this.setState({
						error: err.message
					})
				}
			);
		}
	},
	render: function() {
		var errorElement = null;
		var formElement = null;
		if(this.state.error) {
			errorElement = (
				<p className="red">{this.state.error}</p>
			);
		}

		if(this.state.product) {
			var addEditVerbage = this.props.productId ? 'Edit' : 'Add';
			var optionFound = false;
			var selectOptions = ['Books', 'Electronics', 'Clothing'].map((option) => {
				if(option.toLowerCase() === this.state.product.get('category')) {
					optionFound = true;
					return <option defaultValue={option.toLowerCase()} selected>{option}</option>
				}
				else {
					return <option defaultValue={option.toLowerCase()}>{option}</option>
				}
			});

			if(optionFound) {
				selectOptions.unshift(<option defaultValue="" disabled>Category</option>);
			}
			else {
				selectOptions.unshift(<option defaultValue="" disabled selected>Category</option>);
			}

			formElement = (
				<form className="col s12" onSubmit={this.onAddProduct}>
					<h1>{addEditVerbage} Product</h1>
					<div className="row">
						<div className="input-field col s12">
							<input type="text" ref="name" className="validate" defaultValue={this.state.product.get('name')} />
							<label>Product Name</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<textarea id="textarea1" className="materialize-textarea" ref="description" defaultValue={this.state.product.get('description')}></textarea>
							<label>Description</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s6">
							<input type="number" step="0.01" className="validate" ref="price" defaultValue={this.state.product.get('price')} />
							<label>Price</label>
						</div>
						<div className="input-field col s6">
							<select className="browser-default" ref="category">
								{selectOptions}
							</select>
						</div>
					</div>
					<div className="row">
						<button className="waves-effect waves-light btn">{addEditVerbage} Product</button>
					</div>
				</form>
			);
		}

		return (
			<div className="container">
				<div className="row">
					{errorElement}
					{formElement}
				</div>
			</div>
		);
	},
	onAddProduct: function(e) {
		e.preventDefault();

		this.state.product.save({
			name: this.refs.name.value,
			description: this.refs.description.value,
			price: parseFloat(this.refs.price.value),
			category: this.refs.category.value.toLowerCase()
		})

		this.props.router.navigate('', {trigger: true});

	}
});