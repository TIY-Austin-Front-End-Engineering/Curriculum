var PersonModel = Backbone.Model.extend({
	defaults: {
		firstName: '',
		lastName: '',
		age: 30
	},
	getFullName: function() {

		return this.get('firstName') + ' ' + this.get('lastName');
	}
});