var BlogPostView = Backbone.View.extend({
	el: '#blog-post-view',
	initialize: function(options) {
		_.bindAll(
			this,
			'render'
		);

		this.$title = this.$('.post-title');
		this.$body = this.$('.post-body');
	},
	render: function() {
		this.$title.text(this.model.get('title'));
		this.$body.text(this.model.get('body'));
	}
});