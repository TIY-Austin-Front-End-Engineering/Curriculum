var AppView = Backbone.View.extend({
	tagName: 'div',
	initialize: function() {
		this.messages = new MessageCollection();
		this.settings = new SettingsModel();

		this.chatView = new ChatView({model: this.settings, messages: this.messages});
		this.inputView = new InputView({model: this.settings, messages: this.messages});
		this.settingsView = new SettingsView({model: this.settings});
	}
});