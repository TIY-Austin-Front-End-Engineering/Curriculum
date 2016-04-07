import Backbone from 'backbone';
import PictureModel from '../models/PictureModel';
export default Backbone.Collection.extend({
	model: PictureModel,
	url: 'http://small-tiyfe.herokuapp.com/collections/polar-bears'
});

// model
// url