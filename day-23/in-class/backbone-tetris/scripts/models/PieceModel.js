var PieceModel = Backbone.Model.extend({
	defaults: {
		type: 0,
		rotation: 0,
		age: 0,
		left: 0,
		alive: true
	},

	width: function() {
		var matrix = Constant.PIECES[this.get('type')][this.get('rotation')];
		var min = null;
		var max = null;
		for(var y=0; y<matrix.length; y++) {
			for(var x=0; x<matrix[y].length; x++) {
				if(matrix[y][x] === 1) {
					if(min === null) {
						min = x;
					}
					max = x;
				}
			}
		}
		return min-max+1;
	},

	rotate: function() {
		if(!this.get('alive')) return false;
		var rotation = this.get('rotation')+1;
		rotation = rotation%4;
		this.set({ rotation: rotation });
	},

	move: function(val) {
		if(!this.get('alive')) return false;
		var left = this.get('left')+val;
		var width = this.width();
		if(left < 0) left = 0;
		if(left + width > Constant.GAME_WIDTH) {
			left = Constant.GAME_WIDTH - width;
		}
		this.set({ left: left });
	},

	drop: function() {
		if(!this.get('alive')) return false;
		var age = this.get('age');
		var newAge = age+1;
		if(newAge > Constant.GAME_HEIGHT+1) newAge = Constant.GAME_HEIGHT+1;
		if(newAge != age) {
			this.set({ age: newAge });
		}
	}
});