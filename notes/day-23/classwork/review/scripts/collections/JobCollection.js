var Backbone = require('backbone');
var JobModel = require('../models/JobModel');

module.exports = Backbone.Collection.extend({
	model: JobModel,
	url: 'http://tiyfe.herokuapp.com/collections/jerbs'
});