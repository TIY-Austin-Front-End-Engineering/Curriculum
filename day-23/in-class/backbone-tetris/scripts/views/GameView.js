var GameView = Backbone.View.extend({
	el: '#game-view',
	initialize: function() {
		_.bindAll(
			this,
			'start',
			'newPiece',
			'onAgeChanged'
		);

		this.activePiece = null;

		this.$gameBox = this.$('#box');
	},

	start: function() {
		console.log('start');
		this.activePiece = this.newPiece();
		var pieceView = new PieceView({model: this.activePiece});
		this.$gameBox.append(pieceView.$el);
	},

	newPiece: function() {
		var type = Math.floor(Math.random()*7);
		if(type > 6) type--;
		var rotation = Math.floor(Math.random()*4);
		if(rotation > 4) rotation--;

		var pieceModel = new PieceModel({
			type: type,
			rotation: rotation,
			age: 0,
			left: 3
		});

		pieceModel.on('change:age', this.onAgeChanged);

		return pieceModel;
	},

	onAgeChanged: function(piece) {

	}
});