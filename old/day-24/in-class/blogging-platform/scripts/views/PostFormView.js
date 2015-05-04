var PostFormView = Backbone.View.extend({
	template: _.template($('#post-form-template').html()),
	initialize: function(options) {
		_.bindAll(
			this,
			'onSubmitClick'
		);

		var data = {};
		if(!this.model) {
			this.model = new PostModel();
		}
		this.$el = $(this.template(data));
		this.$submit = this.$('.submit');
		this.$submit = this.$el.find('.submit');
		this.$error = this.$('.error');
		this.$error.hide();
		this.$title = this.$('.title');
		this.$body = this.$('.body');
		this.$pinned = this.$('.pinned');

		this.$submit.on('click', this.onSubmitClick);
	},

	onSubmitClick: function() {
		this.$error.hide();
		this.model.set({
			title: this.$title.val(),
			body: this.$body.val(),
			pinned: this.$pinned.is(':checked')
		});

		// if(!this.model.get('title')) {
		// 	this.$error.html('Please enter a title.').show()
		// }

		// else if(!this.model.get('body')) {
		// 	this.$error.html('Please enter a body.').show()
		// }

		if(!this.model.isValid()) {
			this.$error.html(this.model.validationError).show();
		}
		else {
			console.log(this.model.attributes);
			this.model.save();
			var self = this;
			// $.post(
			// 	'http://tiny-pizza-server.herokuapp.com/collections/aaron-blog-post',
			// 	this.model.attributes,
			// 	function(data) {
			// 		self.model.set(data);
			// 	}
			// );

			this.trigger('submit', this.model);
		}
	}
});