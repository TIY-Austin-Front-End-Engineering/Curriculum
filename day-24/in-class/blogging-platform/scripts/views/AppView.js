var AppView = Backbone.View.extend({
	el: '#app',
	initialize: function() {

		_.bindAll(
			this,
			'onLinkClick'
		);

		this.posts = new PostCollection();

		var self = this;
		$('.link').on('click', this.onLinkClick);

		var Router = Backbone.Router.extend({
			routes: {
				'blog': 			'blog',
				'blog/:id': 		'blogPost',
				'admin': 			'admin',
				'': 				'blog',
				'*page': 			'pageNotFound'
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

			pageNotFound: function() {
				self.$el.text('Page not found');
			},

			admin: function() {
				self.hideAllPages();
				self.adminView.$el.show();
			}
		});

		this.appRouter = new Router();

		this.blogView = new BlogView({
			posts: this.posts,
			router: this.appRouter
		});
		this.blogPostView = new BlogPostView({
			router: this.appRouter
		});
		this.adminView = new AdminView({
			posts: this.posts,
			router: this.appRouter
		});

		this.posts.fetch();

		Backbone.history.start({pushState: true});
	},

	hideAllPages: function() {
		$('.page-view').hide();
	},

	onLinkClick: function(e) {
		var $link = $(e.target);
		var href = $link.attr('href');

		if(href.substring(0,1) === '#') {
			console.log(href.substring(1));
			this.appRouter.navigate(href.substring(1));
		}
	}
});