var SettingsView = Backbone.View.extend({
	el: '#chat-view',
	initialize: function() {
		_.bindAll(
			this,
			'render',
			'onEditSettings',
			'onSaveSettings'
		);

		this.$username = $('#username');
		this.$room = $('#room');
		this.$filter = $('#filter');
		this.$sounds = $('#sounds');
		this.$editSettings = $('#edit-settings');
		this.$saveSettings = $('#save-settings');
		this.$cancelChanges = $('#cancel-changes');

		this.$editSettings.on('click', this.onEditSettings);
		this.$saveSettings.on('click', this.onSaveSettings);
		this.$cancelChanges.on('click', this.render);

		this.render();
	},

	render: function() {
		this.$username.val(this.model.get('username'));
		this.$room.val(this.model.get('room'));
		this.$filter.prop('checked', this.model.get('filter'));
		this.$sounds.prop('checked', this.model.get('sounds'));

		this.$username.prop('disabled', true);
		this.$room.prop('disabled', true);
		this.$filter.prop('disabled', true);
		this.$sounds.prop('disabled', true);

		this.$saveSettings.hide();
		this.$cancelChanges.hide();
		this.$editSettings.show();
	},

	onEditSettings: function() {
		this.$username.prop('disabled', false);
		this.$room.prop('disabled', false);
		this.$filter.prop('disabled', false);
		this.$sounds.prop('disabled', false);

		this.$saveSettings.show();
		this.$cancelChanges.show();
		this.$editSettings.hide();
	},

	onSaveSettings: function() {
		this.model.set({
			username: this.$username.val(),
			room: this.$room.val(),
			filter: this.$filter.is(':checked'),
			sounds: this.$sounds.is(':checked')
		});
		this.render();
	}
});