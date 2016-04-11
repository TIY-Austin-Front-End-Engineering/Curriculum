import Backbone from 'backbone';

const ImageModel = Backbone.Model.extend({
	defaults: {
		src: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Comic_image_missing.png',
		caption: 'No image available'
	},
	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/polar-bears',
	idAttribute: '_id'
});

export default ImageModel;

// default
// urlRoot
// idAttribute