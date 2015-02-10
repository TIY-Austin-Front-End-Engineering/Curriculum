var PieceModel = Backbone.Model.extend({
	defaults: {
		type: 0,
		rotation: 0,
		age: 0,
		left: 0,
		alive: true
	},

	width: function() {
		return this.right()-this.left();
	},

	height: function() {
		return this.bottom()-this.top();
	},

	left: function(global) {
		var left = null;
		this.iterateMatrix(function(x, y) {
			if(left === null || x < left) {
				left = x;
			}
		});
		console.log(this.get('left'), left);
		if(global) left += this.get('left');
		return left;
	},

	right: function(global) {
		var right = 0;
		this.iterateMatrix(function(x, y) {
			if(x > right) {
				right = x;
			}
		});
		if(global) right += this.get('left');
		return right+1;
	},

	top: function(global) {
		var top = 0;
		this.iterateMatrix(function(x, y) {
			if(y < top) {
				top = y;
			}
		});
		if(global) top += this.get('age');
		return top;
	},

	bottom: function(global) {
		var bottom = 0;
		this.iterateMatrix(function(x, y) {
			if(y > bottom) {
				bottom = y;
			}
		});
		if(global) bottom += this.get('age');
		return bottom + 1;
	},

	iterateMatrix: function(cb) {
		var matrix = Constant.PIECES[this.get('type')][this.get('rotation')];
		for(var y=0; y<matrix.length; y++) {
			for(var x=0; x<matrix[y].length; x++) {
				if(matrix[y][x]) cb(x, y);
			}
		}
	},

	rotate: function() {
		if(!this.get('alive')) return false;
		var oldRotation = this.get('rotation');
		var rotation = oldRotation+1;
		rotation = rotation%4;
		this.set({ rotation: rotation });

		// We rotated outside of the game bounds... reset
		if(this.right(true) > Constant.GAME_WIDTH) {
			this.set({ rotation: oldRotation });
		}

		if(this.left(true) < 0) {
			this.set({ rotation: oldRotation });
		}
	},

	move: function(val) {
		if(!this.get('alive')) return false;
		var oldLeft = this.get('left');
		var left = oldLeft+val;
		this.set({ left: left });
		if(this.left(true) < 0) {
			this.set({ left: oldLeft });
		}
		if(this.right(true) >Constant.GAME_WIDTH) {
			this.set({ left: oldLeft });
		}
	},

	drop: function() {
		if(!this.get('alive')) return false;
		var age = this.get('age');
		var newAge = age+1;
		if(newAge != age) {
			this.set({ age: newAge });
		}
		if(this.bottom(true) > Constant.GAME_HEIGHT) {
			this.set({ age: age });
		}
	}
});