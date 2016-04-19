import Backbone from 'backbone';
import ItemModel from '../models/ItemModel.js';
export default Backbone.Collection.extend({
	models: ItemModel,
	url: 'http://small-tiyfe.herokuapp.com/collections/aaronsAnnoyingStuffTodo'
});