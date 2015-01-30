var MessageView = Backbone.View.extend({
	template: _.template($('#message-view').html()),
	initialize: function(options) {
		_.bindAll(
			this,
			'render'
		);
		this.render(options.imageUrls);
	},
	render: function(imageUrls) {
		this.$el.html(this.template(this.model.attributes));
		var $message = this.$el.find('.message');
		for(var i=0; i<imageUrls.length; i++) {
			$message.append('<img src="'+imageUrls[i]+'">');
		}
	}
});