'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('randomElement', function() {
	it('should exist', function() {
		expect(functions.randomElement).not.to.be.undefined;
	});
	it('should return an element from the array that is passed in', function() {
		var elements = ['a', 'd', 'cc'];
		for(var i = 0; i < 1000; i++) {
			var randomEl = functions.randomElement(elements);
			expect(elements.indexOf(randomEl)).to.be.above(-1);
		}
	});
});