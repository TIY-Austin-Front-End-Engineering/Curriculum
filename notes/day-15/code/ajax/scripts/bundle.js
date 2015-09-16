(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
	console.log('everything is working');
	// $.get(
	// 	'http://tiyfe.herokuapp.com/collections/aaron',
	// 	onGetRequestComplete,
	// 	'json'
	// );
	// $.post(
	// 	'http://tiyfe.herokuapp.com/collections/aaron',
	// 	{ message: 'hello world' },
	// 	onPostRequestComplete,
	// 	'json'
	// );
	$.ajax({
		url: 'http://tiyfe.herokuapp.com/collections/aaron/55f98d832b51c10300000017',
		method: 'DELETE',
		// data: { message: 'hello earth' },
		success: function success(response) {
			console.log('ajax', response);
		}
	});
	console.log('end of stuff');
});

function onGetRequestComplete(response) {
	console.log('get', response);
}

function onPostRequestComplete(response) {
	console.log('post', response);
}

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map