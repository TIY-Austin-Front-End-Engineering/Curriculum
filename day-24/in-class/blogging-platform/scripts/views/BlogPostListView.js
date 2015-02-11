var BlogPostListView = Backbone.View.extend({
	template: _.template($('#post-template').html()),
	initialize: function(options) {
		_.bindAll(
			this,
			'render'
		);

		var data = this.model.attributes;
		data.cid = this.model.cid;

		this.$el = this.template(data);
	}
});