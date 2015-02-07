var AppView = Backbone.View.extend({
	el: '#app',
	initialize: function() {
		console.log(ProjectsCollection);
		this.projects = new ProjectsCollection();

		this.homeView = new HomeView({
			projects: this.projects
		});
		this.resumeView = new ResumeView({
			projects: this.projects
		});
		this.adminView = new AdminView({
			projects: this.projects
		});
		this.projectsView = new ProjectsView({
			projects: this.projects
		});

		var self = this;

		var Router = Backbone.Router.extend({
			routes: {
				'home': 	'home',
				'resume': 	'resume',
				'projects': 'projects',
				'admin': 	'admin'
			},

			home: function() {
				console.log('home');
				self.hideAllPages();
				self.homeView.$el.show();
			},

			resume: function() {
				self.hideAllPages();
				self.resumeView.$el.show();
			},

			projects: function() {
				self.hideAllPages();
				self.projectsView.$el.show();
			},

			admin: function() {
				self.hideAllPages();
				self.adminView.$el.show();
			}
		});

		var appRouter = new Router();

		Backbone.history.start();
	},

	hideAllPages: function() {
		$('.page-view').hide();
	}
});