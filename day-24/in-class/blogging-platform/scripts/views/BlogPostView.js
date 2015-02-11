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
		this.$title.html(this.model.get('title'));
		this.$body.html(this.model.get('body'));
	}
});