import $ from 'jquery';
import Backbone from 'backbone';
const TodoItemView = Backbone.View.extend({
	tagName: 'li',
	events: {
		'click': 'toggleCompletion'
	},
	className: 'incomplete',
	initialize: function(thingToDo) {
		this.item = thingToDo;
		this.render();
	},
	render: function() {
		this.$el.html(this.item);
	},
	toggleCompletion: function() {
		console.log('test');
		this.$el.toggleClass('incomplete complete');
	}
});

export default TodoItemView;