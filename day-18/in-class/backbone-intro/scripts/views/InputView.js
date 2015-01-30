var InputView = Backbone.View.extend({
	el: '#input-view',
	initialize: function(options) {
		_.bindAll(
			this,
			'submit',
			'onInputButtonClick',
			'onInputBoxKeyUp',
			'onMessageSent'
		)

		this.$inputBox = $('#input-box');
		this.$inputButton = $('#input-button');

		this.$inputBox.on('keyup', this.onInputBoxKeyUp);
		this.$inputButton.on('click', this.onInputButtonClick);
	},

	submit: function(message) {
		if(!message) return;

		this.$inputBox.prop('disabled', true);
		this.$inputButton.prop('disabled', true);
		$.post(
			'http://localhost:1337/message',
			{
				message: message,
				username: this.model.get('username'),
				room: this.model.get('room')
			},
			this.onMessageSent
		);
	},

	onInputButtonClick: function() {
		this.submit(this.$inputBox.val());
	},

	onInputBoxKeyUp: function(e) {
		if(e.which == 13) {
			this.submit(this.$inputBox.val());
		}
	},

	onMessageSent: function(data) {
		this.$inputBox.prop('disabled', false);
		this.$inputButton.prop('disabled', false);
		this.$inputBox.val('');
	}
});