var PieceView = Backbone.View.extend({
	tagName: 'div',
	initialize: function() {
		_.bindAll(
			this,
			'render',
			'generate'
		);

		this.boxWidth = 20;

		this.pieces = [
			// Types
			[
				// Rotations
				[
					[0, 0, 0, 0],
					[0, 0, 0, 0],
					[0, 0, 0, 0],
					[1, 1, 1, 1]
				],
				[
					[0, 1, 0, 0],
					[0, 1, 0, 0],
					[0, 1, 0, 0],
					[0, 1, 0, 0],
				],
				[
					[0, 0, 0, 0],
					[0, 0, 0, 0],
					[0, 0, 0, 0],
					[1, 1, 1, 1]
				],
				[
					[0, 1, 0, 0],
					[0, 1, 0, 0],
					[0, 1, 0, 0],
					[0, 1, 0, 0],
				]
			],
			[
				// Rotations
				[
					[1, 1],
					[1, 1]
				],
				[
					[1, 1],
					[1, 1]
				],
				[
					[1, 1],
					[1, 1]
				],
				[
					[1, 1],
					[1, 1]
				]
			],
			[
				// Rotations
				[
					[0, 0, 0],
					[0, 1, 0],
					[1, 1, 1]
				],
				[
					[0, 1, 0],
					[0, 1, 1],
					[0, 1, 0]
				],
				[
					[0, 0, 0],
					[1, 1, 1],
					[0, 1, 0]
				],
				[
					[0, 1, 0],
					[1, 1, 0],
					[0, 1, 0]
				]
			],
			[
				// Rotations
				[
					[0, 0, 0],
					[1, 0, 0],
					[1, 1, 1]
				],
				[
					[0, 1, 1],
					[0, 1, 0],
					[0, 1, 0]
				],
				[
					[0, 0, 0],
					[1, 1, 1],
					[0, 0, 1]
				],
				[
					[0, 1, 0],
					[0, 1, 0],
					[1, 1, 0]
				]
			],
			[
				// Rotations
				[
					[0, 0, 0],
					[0, 0, 1],
					[1, 1, 1]
				],
				[
					[0, 1, 0],
					[0, 1, 0],
					[0, 1, 1]
				],
				[
					[0, 0, 0],
					[1, 1, 1],
					[1, 0, 0]
				],
				[
					[1, 1, 0],
					[0, 1, 0],
					[0, 1, 0]
				]
			],
			[
				// Rotations
				[
					[0, 0, 0],
					[0, 1, 1],
					[1, 1, 0]
				],
				[
					[1, 0, 0],
					[1, 1, 0],
					[0, 1, 0]
				],
				[
					[0, 0, 0],
					[0, 1, 1],
					[1, 1, 0]
				],
				[
					[1, 0, 0],
					[1, 1, 0],
					[0, 1, 0]
				]
			],
			[
				// Rotations
				[
					[0, 0, 0],
					[1, 1, 0],
					[0, 1, 1]
				],
				[
					[0, 1, 0],
					[1, 1, 0],
					[1, 0, 0]
				],
				[
					[0, 0, 0],
					[1, 1, 0],
					[0, 1, 1]
				],
				[
					[0, 1, 0],
					[1, 1, 0],
					[1, 0, 0]
				],
			]
		];

		this.model.on('change', this.render);

		this.generate();
	},

	render: function() {
		var matrix = this.pieces[this.model.get('type')][this.model.get('rotation')];

		var counter = 0;
		for(var y=0; y<matrix.length; y++) {
			for(var x=0; x<matrix[y].length; x++) {
				if(matrix[y][x]) {
					this.$el.children().eq(counter).css({
						top: y*this.boxWidth,
						left: x*this.boxWidth
					});
					counter++;
				}
			}
		}

		console.log(this.model.get('left'));

		this.$el.css({
			top: this.boxWidth*(this.model.get('age')),
			left: this.boxWidth*this.model.get('left')
		});
	},

	generate: function() {
		var matrix = this.pieces[this.model.get('type')][this.model.get('rotation')];

		this.$el.width(this.boxWidth*matrix[0].length);
		this.$el.height(this.boxWidth*matrix[0].length);
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