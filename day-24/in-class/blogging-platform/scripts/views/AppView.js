var AppView = Backbone.View.extend({
	el: '#app',
	initialize: function() {
		this.posts = new PostCollection();

		var self = this;

		var Router = Backbone.Router.extend({
			routes: {
				'blog': 		'blog',
				'blog/:id': 	'blogPost',
				'admin': 		'admin',
				'*page': 		'blog'
			},

			blog: function() {
				self.hideAllPages();
				self.blogView.$el.show();
			},

			blogPost: function(cid) {
				self.hideAllPages();
				self.blogPostView.model = self.posts.get(cid);
				self.blogPostView.render();
				self.blogPostView.$el.show();
			},

			admin: function() {
				self.hideAllPages();
				self.adminView.$el.show();
			}
		});

		var appRouter = new Router();

		this.blogView = new BlogView({
			posts: this.posts,
			router: appRouter
		});
		this.blogPostView = new BlogPostView({
			router: appRouter
		});
		this.adminView = new AdminView({
			posts: this.posts,
			router: appRouter
		});

		this.posts.fetch();

		Backbone.history.start();
	},

	hideAllPages: function() {
		$('.page-view').hide();
	}
});