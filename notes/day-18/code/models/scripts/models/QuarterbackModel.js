'use strict';
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		name: '',
		team: '',
		attempts: 0,
		completions: 0,
		yards: 0,
		touchdowns: 0,
		interceptions: 0,
		sacks: 0,
		longestCompletion: 0
	},
	completionPercentage: function() {
		return Math.round(this.get('completions') / this.get('attempts') * 100)+'%';
	},
	yardsPerAttempt: function() {
		return this.get('yards')/this.get('attempts');
	},
	addAttempt: function(type, yards) {
		type = type.toLowerCase();
		yards = parseInt(yards);
		if(isNaN(yards)) {
			yards = 0;
		}
		if(type === 'completion'){
			this.set({
				attempts: this.get('attempts')+1,
				yards: this.get('yards')+yards,
				completions: this.get('completions')+1
			});
		}
		
		if(yards > this.get('longestCompletion')){
			this.set({longestCompletion: yards});
		}
		

		if(type === 'incomplete'){
			this.set({ attempts: this.get('attempts')+1 });
		}
		else if(type === 'touchdown'){
			this.set({
				touchdowns: this.get('touchdowns')+1,
				attempts: this.get('attempts')+1,
				completions: this.get('completions')+1,
				yards: this.get('yards')+yards
			});
		}
		else if(type === 'sack'){
			this.set({
				sacks: this.get('sacks')+1,
				yards: this.get('yards')+yards
			});

		}
		else if(type === 'interception'){
			this.set({
				interceptions: this.get('interceptions')+1
			});
		}
	}
});