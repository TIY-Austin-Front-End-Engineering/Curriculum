var AppView = Backbone.View.extend({
	el: '#app-view',
	initialize: function() {
		_.bindAll(
			this,
			'onAddButtonClick'
		);

		this.$descriptionBox = $('#description');
		this.$addButton = $('#add-button');

		this.$addButton.on('click', this.onAddButtonClick);
	},

	onAddButtonClick: function() {
		console.log(this.$descriptionBox.val());
	}
});