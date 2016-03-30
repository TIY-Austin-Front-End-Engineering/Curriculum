var expect = require('chai').expect;
var removeSmallest = require('../exercises').removeSmallest;

describe('removeSmallest', function() {
	it('should exist', function() {
		expect(removeSmallest).not.to.be.undefined;
	});

	it('should return the smallest letter in the array', function() {
		expect(removeSmallest(['a', 'b', 'c'])).to.equal('a');
		expect(removeSmallest(['b', 'c', 'a'])).to.equal('a');
		expect(removeSmallest(['B', 'b', 't', 'T', 's'])).to.equal('B');
	});

	it('should return the smallest letter even with capitals', function() {
		expect(removeSmallest(['Z', 'b', 't', 'T', 's'])).to.equal('b');
	});
});