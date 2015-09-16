(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

	// Step 1: select my elements
	var $collectionName = $('#collection-name');
	var $form = $('#form');

	// Step 2: create callback function
	function onDeleteCollection(e) {
		e.preventDefault();
		$.get('http://tiyfe.herokuapp.com/collections/' + $collectionName.val(), onGetCollectionRecords, 'json');
	}

	function onGetCollectionRecords(response) {
		response.forEach(function (record) {
			var url = 'http://tiyfe.herokuapp.com/collections/' + $collectionName.val() + '/' + record._id;
			console.log(url);
			$.ajax({
				url: url,
				method: 'DELETE'
			});
		});
	}

	// Step 3: add event listener
	$form.submit(onDeleteCollection);
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map