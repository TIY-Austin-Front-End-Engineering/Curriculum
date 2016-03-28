var expect = require('chai').expect;
var average = require('../exercises').average;

describe('average', function() {
	// All of our longest tests go here
	it('should exist', function() {
		expect(average).not.to.be.undefined;
	});

	it('should return the average', function() {
		expect(average(2, 4)).to.equal(3); 
	});

	it('should return average even if all arguments are string numerals', function() {
		expect(average('2', '4')).to.equal(3);
	});

	it('should return average even if  some arguments are string numerals', function() {
		expect(average('1', 1, 1)).to.equal(1);
	});

	it('should throw an error if a non-numeric string is given', function() {
		expect(function() { average('1', 'aaron', 1) }).to.throw('Average can only take numbers or numeric strings');
	});
});







