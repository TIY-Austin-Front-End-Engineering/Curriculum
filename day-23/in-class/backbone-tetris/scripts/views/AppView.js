var AppView = Backbone.View.extend({
	el: '#app-view',
	initialize: function() {

		_.bindAll(
			this,
			'hideAllPages',
			'onKeyDown'
		);

		var self = this;

		var Router = Backbone.Router.extend({
			routes: {
				'loading': 	'loading',
				'menu': 	'menu',
				'game': 	'game',
				'*path':  'loading'
			},

			loading: function() {
				self.hideAllPages();
				self.loadingView.$el.show();
				self.loadingView.start();
			},

			menu: function() {
				self.hideAllPages();
				self.menuView.$el.show();
			},

			game: function() {
				self.hideAllPages();
				self.gameView.$el.show();
				self.gameView.start();
			}
		});

		var appRouter = new Router();

		this.loadingModel = new LoadingModel();

		this.loadingView = new LoadingView({model: this.loadingModel});
		this.menuView = new MenuView({router: appRouter});
		this.gameView = new GameView({router: appRouter});

		this.loadingView.on('loading-complete', function() {
			appRouter.navigate('menu', {trigger: true});
		});

		Backbone.history.start();

		$(window).on('keydown', this.onKeyDown);
	},

	hideAllPages: function() {
		this.$('.page-view').hide();
	},

	onKeyDown: function(e) {
		if(this.gameView.activePiece) {
			var code = e.keyCode || e.which;
			if(code === 38) {
				this.gameView.activePiece.rotate();
			}
			else if(code === 37) {
				this.gameView.activePiece.move(-1);
			}
			else if(code === 39) {
				this.gameView.activePiece.move(1);
			}
			else if(code === 40) {
				this.gameView.activePiece.drop();
			}
		}
	}
});