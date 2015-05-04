var LoadingView = Backbone.View.extend({
	el: '#loading-view',
	initialize: function() {
		_.bindAll(
			this,
			'start',
			'render',
			'onProgress'
		);

		this.$progress = this.$('.progress-bar');
		this.model.on('change', this.render);
	},

	start: function() {
		if(this.interval) return;
		this.interval = setInterval(this.onProgress, 20);
	},

	render: function() {
		var progress = this.model.get('progress')+'%';
		this.$progress.css('width', progress).text(progress);
		this.$progress.attr('aria-value-now', this.model.get('progress'));
	},

	onProgress: function() {
		var progress = this.model.get('progress') + 1;
		this.model.set({progress: progress});
		if(progress >= 100) {
			clearInterval(this.interval);
			this.trigger('loading-complete');
		}
	}
});