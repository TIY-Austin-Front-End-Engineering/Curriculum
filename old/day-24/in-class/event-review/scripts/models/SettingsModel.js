var SettingsModel = Backbone.Model.extend({
	defaults: {
		id: null,
		username: 'anonymous',
		room: 'home',
		filter: false,
		sounds: false
	}
});