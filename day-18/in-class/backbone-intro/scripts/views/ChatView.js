var ChatView = Backbone.View.extend({
	el: '#chat-view',
	initialize: function(options) {
		console.log(options)
		_.bindAll(
			this,
			'render',
			'getDataFromServer',
			'onGetDataFromServer',
			'onMessageAdded',
			'onRoomChange'
		);
		this.startDate = new Date();
		this.lastId = 0;
		this.messages = options.messages;

		this.messages.on('add', this.onMessageAdded);
		this.model.on('change:room', this.onRoomChange);

		setInterval(this.getDataFromServer, 1000);
	},

	getDataFromServer: function() {
		$.get(
			'http://localhost:1337/message',
			{
				where: JSON.stringify({
					createdAt: { '>': this.startDate.toISOString() },
					id: { '>': this.lastId },
					room: this.model.get('room')
				}),
				sort: 'id ASC'
			},
			this.onGetDataFromServer
		);
	},

	getImageUrls: function(message) {
		console.log(message);
		var words = message.split(' ');
		var imageUrls = [];
		for(var i=0; i<words.length; i++) {
			var word = words[i];
			var hasImagePrefix = (
				word.substring(0, 7).toLowerCase() === 'http://' ||
				word.substring(0, 8).toLowerCase() === 'https://' || 
				word.substring(0, 7).toLowerCase() === 'file://'
			);
			var hasImageSuffix = (
				word.substring(word.length-4).toLowerCase() == '.gif' ||
				word.substring(word.length-4).toLowerCase() == '.png' ||
				word.substring(word.length-4).toLowerCase() == '.jpg' ||
				word.substring(word.length-5).toLowerCase() == '.jpeg'
			);
			if(hasImagePrefix && hasImageSuffix) {
				imageUrls.push(word);
			}
		}
		return imageUrls;
	},

	onGetDataFromServer: function(data) {
		if(data.length > 0) {
			this.lastId = data[data.length-1].id;
			this.messages.add(data);
		}
	},

	onMessageAdded: function(message) {
		var imageUrls = this.getImageUrls(message.get('message'));
		var messageView = new MessageView({model: message, imageUrls: imageUrls});
		this.$el.append(messageView.el);
	},

	onRoomChange: function() {
		this.$el.append('<hr>Changed room to... '+this.model.get('room')+'<hr>');
	}
});