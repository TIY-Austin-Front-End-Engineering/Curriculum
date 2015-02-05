var IndividualProjectView = Backbone.View.extend({
	initialize: function() {
		var t = _.template($('#project-template').html());
		var el = t(this.model.attributes);
		this.$el = $(el);
	}
});