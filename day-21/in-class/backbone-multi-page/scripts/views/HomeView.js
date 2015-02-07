var HomeView = Backbone.View.extend({
	el: '#home-view',
	initialize: function(options) {
		_.bindAll(
			this,
			'render'
		);
		this.$currentPosition = this.$el.find('#current-position');
		this.$recentProject = this.$el.find('#recent-project');
		this.$recentProjectName = this.$el.find('#recent-project-name');

		this.projects = options.projects;
		this.projects.on('add', this.render);

		this.render();
	},

	render: function() {
		console.log('render');
		this.$currentPosition.hide();
		this.$recentProject.hide();

		var numProjects = this.projects.length;

		if(numProjects) {
			var lastProject = this.projects.at(numProjects-1);
			this.$recentProject.show();
			this.$recentProjectName.text(lastProject.get('name'));
			this.$recentProjectName.attr('href', lastProject.get('url'));
		}
	}
});