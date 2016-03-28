var expect = require('chai').expect;
var longest = require('../exercises').longest;

describe('longest', function() {
	// All of our longest tests go here
	it('should exist', function() {
		expect(longest).not.to.be.undefined;
	});

	it('should return the longest argument', function() {
		expect(longest('red', 'green', 'blue', 'orange', 'white', 'grey', 'black'))
		.to.equal('orange');
	});

	it('should work even when there are numbers', function() {
		expect(longest('red', 'green', 'blue', 'orange', 'white', 'grey', 7))
		.to.equal('orange');
	});

	it('should work even when a number is the longest', function() {
		expect(longest('red', 'green', 777777777, 'orange', 'white', 'grey'))
		.to.equal(777777777);
	});

	it('should not get tripped up by and empty string', function() {
		expect(longest('', '', 'W'))
		.to.equal('W');
	});
});