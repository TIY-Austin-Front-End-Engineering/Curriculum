'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('studentPairs', function() {
	it('should exist', function() {
		expect(functions.studentPairs).not.to.be.undefined;
	});
	it('should not accept empty input', function() {
		expect(function() { functions.studentPairs() }).to.throw('Invalid input');
	});
	it('should not accept string input', function() {
		expect(function() { functions.studentPairs('g') }).to.throw('Invalid input');
	})
	it('should return an array', function() {
		var pairs1 = functions.studentPairs(['a','b']);
		expect(pairs1).to.be.instanceof(Array);
		expect(pairs1.length).to.equal(1);

		var pairs2 = functions.studentPairs(['a','b', 'c', 'd']);
		expect(pairs2).to.be.instanceof(Array);
		expect(pairs2.length).to.equal(2);
	});
	it('should work if there are an odd number of students', function() {
		var pairs = functions.studentPairs(['a','b', 'c', 'd', 'e']);
		expect(pairs).to.be.instanceof(Array);
		expect(pairs.length).to.equal(2);
		expect(pairs[0].length === 3 || pairs[1].length === 3).to.be.true;
	});
	it('should not allow non-string students', function() {
		expect(function() { functions.studentPairs([1,2,3]) }).to.throw('Invalid input: student must be a string');
	})
});