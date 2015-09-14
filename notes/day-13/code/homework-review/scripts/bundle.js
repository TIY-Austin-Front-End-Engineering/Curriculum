(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

	if (todoInput.value.length !== 0) {
		todoItemArray.push(todoInput.value);
		todoInput.value = '';
		render();
	} else {
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
	var htmlArray = todoItemArray.map(function (item) {
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

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map