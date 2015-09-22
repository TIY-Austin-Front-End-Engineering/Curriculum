var Backbone = require('backbone');
var QuarterbackModel = require('../models/QuarterbackModel');

module.exports = Backbone.Collection.extend({
	model: QuarterbackModel
});