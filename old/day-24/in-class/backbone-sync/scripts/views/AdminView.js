var AdminView = Backbone.View.extend({
	el: '#admin-view',
	initialize: function(options) {
		_.bindAll(
			this,
			'onAddProject'
		);
		console.log(options);
		this.projects = options.projects;

		this.$name = this.$el.find('#project-name');
		this.$url = this.$el.find('#project-url');
		this.$description = this.$el.find('#project-description');
		this.$addProjectButton = this.$el.find('#add-project-button');

		this.$addProjectButton.on('click', this.onAddProject);

	},

	onAddProject: function() {
		var p = new ProjectModel({
			name: this.$name.val(),
			url: this.$url.val(),
			description: this.$description.val()
		});
		this.projects.add(p);
		p.save();
		p.on('sync', function(model) {
			console.log(model);
		})
		this.$name.val('');
		this.$url.val('');
		this.$description.val('');
	}
});