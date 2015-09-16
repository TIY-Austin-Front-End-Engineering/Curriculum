'use strict';

$(document).ready(function() {

	// Step 1: select the elements
	var $form = $('#form');
	var $todoInput = $('#todo-input');
	var $todoList = $('#todo-list');

	// Step 2+3: create the function and add the event listener
	$form.submit(function(e) {
		e.preventDefault();
		
		// Grab the input from my input box
		var newTodo = $todoInput.val();

		// Make a post request to tiny pizza server
		$.post(
			'http://tiyfe.herokuapp.com/collections/aarons-todos',
			{get_this_done: newTodo},
			function(result) {
				console.log('todo saved!', result);
				console.log(result._id);
				$todoList.append('<div>'+result.get_this_done+'</div>');
			},
			'json'
		);
	});

	$.get(
		'http://tiyfe.herokuapp.com/collections/aarons-todos',
		function(response) {
			for(var i=0; i<response.length; i++) {
				$todoList.append('<div>'+response[i].get_this_done+'</div>');
			}
		},
		'json'
	);

});