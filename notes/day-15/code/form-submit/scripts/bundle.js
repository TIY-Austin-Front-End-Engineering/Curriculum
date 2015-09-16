(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

	// Step 1: select the elements
	var $form = $('#form');
	var $todoInput = $('#todo-input');
	var $todoList = $('#todo-list');

	// Step 2+3: create the function and add the event listener
	$form.submit(function (e) {
		e.preventDefault();

		// Grab the input from my input box
		var newTodo = $todoInput.val();

		// Make a post request to tiny pizza server
		$.post('http://tiyfe.herokuapp.com/collections/aarons-todos', { get_this_done: newTodo }, function (result) {
			console.log('todo saved!', result);
			console.log(result._id);
			$todoList.append('<div>' + result.get_this_done + '</div>');
		}, 'json');
	});

	$.get('http://tiyfe.herokuapp.com/collections/aarons-todos', function (response) {
		for (var i = 0; i < response.length; i++) {
			$todoList.append('<div>' + response[i].get_this_done + '</div>');
		}
	}, 'json');
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map