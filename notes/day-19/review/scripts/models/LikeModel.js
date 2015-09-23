var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		likes: 0,
		lastClick: null
	}
});