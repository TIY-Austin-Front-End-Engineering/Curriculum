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

		if(!this.model.isValid()) {
			this.$error.text(this.model.validationError).show();
		}
		else {
			this.model.save();
			this.trigger('submit', this.model);
		}
	}
});