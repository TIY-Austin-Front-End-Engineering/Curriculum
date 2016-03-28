var expect = require('chai').expect;
var sum = require('../exercises').sum;

describe('sum', function() {
	it('should exist', function() {
		expect(sum).not.to.be.undefined;
	});

	it('should add numbers successfully', function() {
		expect(sum(1, 2, 3)).to.equal(6);
	});

	it('should throw an error if I don\'t pass in all numbers', function() {
		expect(function() { sum(1, 2, 3, 'a') }).to.throw();
	});

	it('should work with negative numbers', function() {
		expect(sum(0, 0, -5, -3, 7)).to.equal(-1);
	});
});