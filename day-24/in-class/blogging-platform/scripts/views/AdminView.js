var AdminView = Backbone.View.extend({
	el: '#admin-view',
	initialize: function(options) {
		_.bindAll(
			this,
			'onNewPost'
		);

		this.posts = options.posts;
		this.router = options.router;

		this.formView = new PostFormView();
		this.$el.append(this.formView.$el);

		this.formView.on('submit', this.onNewPost);

		this.formView.model.on('change', this.onNewPost);

	},
	onNewPost: function(model) {
		this.posts.add(model);
		this.router.navigate('blog/'+model.cid, {trigger: true});
	}
});