var AppView = Backbone.View.extend({
	el: '#app-view',
	initialize: function() {
		// console.log('Hello Backbone!');
		// console.log(this.el);
		// console.log(this.$el);

		_.bindAll(
			this,
			'onMouseClick'
		);

		this.$textBox = $('#text-box');
		this.$clickButton = $('#click-button');

		this.$textBox.on('keyup', this.onTextBoxKeyUp);
		this.$clickButton.on('click', this.onMouseClick);
	},

	onTextBoxKeyUp: function(e) {
		//this.$el.append(String.fromCharCode(e.which)+'<br>');
	},

	onMouseClick: function() {
		var myMessage = new MessageView({message: this.$textBox.val()});
		// console.log(myMessage.el);
		// console.log(myMessage.el);
		this.$el.append(myMessage.el);
	}
});