import Backbone from 'backbone';
export default Backbone.Model.extend({
	defaults: {
		name: '',
		completed: false
	},
	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/aaronsAnnoyingStuffTodo',
	idAttribute: '_id'
});