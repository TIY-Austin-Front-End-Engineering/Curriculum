var AppView = Backbone.View.extend({
	el: '#app-view',
	initialize: function() {
		console.log('Initialize AppView');

		_.bindAll(
			this,
			'onButtonClick'
		);

		var $button = $('#my-button');
		$button.on('click', this.onButtonClick);

		this.$random1 = $('#random1');
		this.$random2 = $('#random2');
		this.$random3 = $('#random3');
	},

	onButtonClick: function(e) {
		var randomNum1 = Math.random();
		var randomNum2 = Math.random();
		var randomNum3 = Math.random();

		this.$random1.html(randomNum1);
		this.$random2.html(randomNum2);
		this.$random3.html(randomNum3);
	}
});