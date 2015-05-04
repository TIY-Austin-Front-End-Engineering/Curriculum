var BlogView = Backbone.View.extend({
	el: '#blog-view',
	initialize: function(options) {
		_.bindAll(
			this,
			'onAddPost'
		);

		this.posts = options.posts;
		this.posts.on('add', this.onAddPost);

		this.$pinned = this.$('.pinned');
		this.$recent = this.$('.recent');
	},

	onAddPost: function(model) {
		var postView = new BlogPostListView({model: model});
		if(model.get('pinned')) {
			this.$pinned.append(postView.$el);
		}
		else {
			this.$recent.append(postView.$el);
		}
	}
});