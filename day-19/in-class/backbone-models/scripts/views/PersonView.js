var PersonView = Backbone.View.extend({
	initialize: function(options) {
		var innerHtml = $('#person-view').html();
		var personTemplate = _.template(innerHtml);
		this.el = personTemplate(this.model.attributes);
		this.$el = $(this.el);
	}
})