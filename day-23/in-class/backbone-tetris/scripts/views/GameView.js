var GameView = Backbone.View.extend({
	el: '#game-view',
	initialize: function() {
		_.bindAll(
			this,
			'start',
			'newPiece',
			'addToGraveyard',
			'renderGraveyard',
			'onAgeChanged',
			'onTick'
		);

		this.activePiece = null;

		this.$gameBox = this.$('#box');
		this.graveyard = [];
	},

	start: function() {
		this.graveyard = [];
		for(var y=0; y<Constant.GAME_HEIGHT; y++) {
			this.graveyard.push([]);
			for(var x=0; x<Constant.GAME_WIDTH; x++) {
				this.graveyard[y].push(false);
			}
		}

		this.activePiece = this.newPiece();
		
		this.$gameBox.append(this.activePiece.$el);
		this.interval = setInterval(this.onTick, 2000/this.model.get('level'));
	},

	newPiece: function() {
		var type = Math.floor(Math.random()*7);
		if(type > 6) type--;
		var rotation = Math.floor(Math.random()*4);
		if(rotation > 4) rotation--;

		var pieceModel = new PieceModel({
			type: type,
			rotation: rotation,
			left: 3
		});

		pieceModel.set({
			age: -2 - pieceModel.bottom()
		});

		pieceModel.on('change:age', this.onAgeChanged);

		var pieceView = new PieceView({model: pieceModel});

		return pieceView;
	},

	addToGraveyard: function(pieceModel) {
		var yoffset = pieceModel.get('age')+1;
		var xoffset = pieceModel.get('left');
		var type = pieceModel.get('type');
		var self = this;
		pieceModel.iterateMatrix(function(x, y) {
			console.log(xoffset, x);
			self.graveyard[yoffset + y][xoffset + x] = type;
		});
	},

	renderGraveyard: function() {
		this.$gameBox.children('.box.dead').remove();
		for(var y=0; y<this.graveyard.length; y++) {
			for(var x=0; x<this.graveyard[y].length; x++) {
				var type = this.graveyard[y][x];
				if(type !== false) {
					var $dead = $('<div class="box dead">&nbsp;</div>');
					this.$gameBox.append($dead);
					$dead.css({
						top:Constant.BOX_WIDTH*y,
						left:Constant.BOX_WIDTH*x
					});
				}
			}
		}
	},

	onAgeChanged: function(piece) {
		var dead = false;

		// Check if the active piece is going to collide with something


		// Check if the active piece has hit the bottom
		if(this.activePiece.model.bottom(true) > Constant.GAME_HEIGHT) {
			this.activePiece.model.set({
				alive: false,
				age: this.activePiece.model.get('age')-1
			});
			dead = true;
		}


		// If the piece died then create a new piece
		if(dead) {
			console.log('dead');
			this.activePiece.model.set({age: this.activePiece.model.get('age')-1});
			this.activePiece.$el.remove();
			this.addToGraveyard(this.activePiece.model);
			this.renderGraveyard();
			delete this.activePiece;
			this.activePiece = this.newPiece();
			this.$gameBox.append(this.activePiece.$el);
		}
	},

	onTick: function() {
		if(this.activePiece) {
			var age = this.activePiece.model.get('age')+1;
			this.activePiece.model.set({age: age});
		}
	}
});