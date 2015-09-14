'use strict';

var todoItemArray = [];

// Step 1: Target all of the elements that I need to use (and store them in variables).
var todoForm = document.getElementById('todo-form');
var todoInput = document.getElementById('todo-input');
var todoItems = document.getElementById('todo-items');

console.log(todoForm);
console.log(todoInput);
console.log(todoItems);

// Step 2: Create a function to handle the event
function onTodoItemSubmit(e) {
	console.log('onTodoItemSubmit');
	e.preventDefault();

	if(todoInput.value.length !== 0) {
		todoItemArray.push(todoInput.value);
		todoInput.value = '';
		render();
	}
	else {
		throw 'Invalid input error';
	}
}

// Step 3: Add our event listener
todoForm.addEventListener('submit', onTodoItemSubmit);


function render() {
	// // Render Step 1: Convert our array into HTML
	// var htmlString = todoItemArray.join('</div><div>');
	// htmlString = '<div>' + htmlString + '</div>';


	// Render Step 1: Convert our array into HTML using map method
	var htmlArray = todoItemArray.map(function(item) {
		// return '<div><input type="checkbox"> ' + item + '</div>';
		return '<div>todo item</div>';
	});
	var htmlString = htmlArray.join('\n');
	console.log(todoItemArray);
	console.log(htmlArray);
	console.log(htmlString);

	// Render Step 2: Replace the HTML inside of todoItems
	// element with the htmlString that we created above
	todoItems.innerHTML = htmlString;
}

function test() {
	console.log('test');
}