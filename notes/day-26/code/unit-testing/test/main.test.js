var expect = require('chai').expect;
var sum = require('../main.js').sum;

describe('sum', function() {
	it('should exist', function() {
		expect(sum).not.to.be.undefined;
	});
	it('should add 7 and 3 to get 10', function() {
		expect(sum(7, 3)).to.equal(10);
	});
	it('should add 0 and 3.4 to get 3.4', function() {
		expect(sum(0, 3.4)).to.equal(3.4);
	});
	it('should add -1 and 12 to get 11', function() {
		expect(sum(-1, 12)).to.equal(11);
	});
	it('should throw an error if less than two arguments are supplied', function() {
		expect(function() { sum() }).to.throw('Invalid arguments');
		expect(function() { sum(7) }).to.throw('Invalid arguments');
	});
});