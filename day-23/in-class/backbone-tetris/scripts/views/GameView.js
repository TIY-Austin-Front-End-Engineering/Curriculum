var GameView = Backbone.View.extend({
	el: '#game-view',
	initialize: function() {
		_.bindAll(
			this,
			'start',
			'rotate'
		);

		this.activePiece = null;

		this.$gameBox = this.$('#box');
	},

	start: function() {
		console.log('start');
		this.activePiece = new PieceModel({
			type: 0,
			rotation: 0,
			age: 0,
			left: 3
		});

		var pieceView = new PieceView({model: this.activePiece});
		this.$gameBox.append(pieceView.$el);
	},

	rotate: function() {
		if(this.activePiece) {
			var rotation = this.activePiece.get('rotation')+1;
			rotation = rotation%4;
			this.activePiece.set({ rotation: rotation });
		}
	},

	move: function(val) {
		if(this.activePiece) {
			var left = this.activePiece.get('left')+val;
			if(left < 0) left = 0;
			if()
			this.activePiece.set({ rotation: rotation });
		}
	}
});