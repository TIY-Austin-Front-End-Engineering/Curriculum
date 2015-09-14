(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var todoItemArray = [];
// // var form = document.querySelectorAll('#todo-form');
// // var form = document.getElementById('todo-form');
//    var form = $('#todo-form');
// console.log(form);

// var vanillaListItems = document.querySelectorAll('ul > li');

// var jQueryListItems = $('ul > li');

// Step 1: Select the right elements
var todoForm = document.getElementById('todo-form'); // vanilla
var $todoForm = $('#todo-form'); // jquery
var $todoInput = $('#todo-input');
var $todoList = $('#todo-list');

// Step 2: Create a function to do what we wanna do
function onTodoItemSubmit(e) {
	e.preventDefault();
	$('button').prop('disabled', true);
	if ($todoInput.val().length) {
		todoItemArray.push({
			todo: $todoInput.val(),
			finished: false
		});
		$todoInput.val('');
		console.log(todoItemArray);
		render();
	} else {
		throw 'Invalid input error';
	}
	console.log('todo item was submitted');
}

// Step 3: ad our event listener
// todoForm.addEventListener('submit', onTodoItemSubmit);	// vanilla
$todoForm.on('submit', onTodoItemSubmit); // jquery

function render() {
	$todoList.html('');
	for (var i = 0; i < todoItemArray.length; i++) {
		var item = todoItemArray[i];
		var $item = $('<div>' + item.todo + '</div>');
		if (item.finished === true) {
			$item.addClass('finished');
		}
		$item.on('click', onTodoItemClicked);
		$todoList.append($item);
	}
}

function onTodoItemClicked(e) {
	// console.log(e);
	// console.log(this);
	// console.log('onTodoItemClicked');
	// // this.style.textDecoration = 'line-through';
	// // $(this).css({textDecoration: 'line-through'});
	// $(this).toggleClass('finished');
	var index = $(this).index();
	var item = todoItemArray[index];
	item.finished = !item.finished;
	render();
}

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map