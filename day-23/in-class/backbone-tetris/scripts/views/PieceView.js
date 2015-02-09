var PieceView = Backbone.View.extend({
	tagName: 'div',
	initialize: function() {
		_.bindAll(
			this,
			'render',
			'generate'
		);

		Constant.BOX_WIDTH = 20;
		
		this.model.on('change', this.render);

		this.generate();
	},

	render: function() {
		var matrix = Constant.PIECES[this.model.get('type')][this.model.get('rotation')];

		var counter = 0;
		for(var y=0; y<matrix.length; y++) {
			for(var x=0; x<matrix[y].length; x++) {
				if(matrix[y][x]) {
					this.$el.children().eq(counter).css({
						top: y*Constant.BOX_WIDTH,
						left: x*Constant.BOX_WIDTH
					});
					counter++;
				}
			}
		}

		this.$el.css({
			top: Constant.BOX_WIDTH*(this.model.get('age')),
			left: Constant.BOX_WIDTH*this.model.get('left')
		});
	},

	generate: function() {
		var matrix = Constant.PIECES[this.model.get('type')][this.model.get('rotation')];

		this.$el.width(Constant.BOX_WIDTH*matrix[0].length);
		this.$el.height(Constant.BOX_WIDTH*matrix[0].length);
		this.$el.html('');
		this.$el.addClass('type-'+this.model.get('type'));
		this.$el.addClass('piece');

		for(var y=0; y<matrix.length; y++) {
			for(var x=0; x<matrix[y].length; x++) {
				if(matrix[y][x]) {
					this.$el.append('<div class="box">&nbsp;</div>')
				}
			}
		}
		this.render();
	}
});