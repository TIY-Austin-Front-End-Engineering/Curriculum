var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore')
module.exports = Backbone.View.extend({
	tagName: 'div',
	initialize: function() {
		_.bindAll(
			this,
			'render',
			'toggleCompletion',
			'remove'
		);

		this.$el.on('click', this.toggleCompletion);
		this.model.on('change', this.render);
		this.render();
	},
	render: function() {
		var todoText = this.model.get('listItem');
		this.$el.html('<span>'+todoText+'</span><button>delete</button>');
		if(!this.model.get('incomplete')) {
			this.$el.css('text-decoration', 'line-through');
		}
		else {
			this.$el.css('text-decoration', 'none');
		}

		this.$el.find('button').on('click', this.remove);
	},
	toggleCompletion: function() {
		this.model.set({
			incomplete: !this.model.get('incomplete')
		});
	},
	remove: function() {
		this.$el.remove();
	}
});