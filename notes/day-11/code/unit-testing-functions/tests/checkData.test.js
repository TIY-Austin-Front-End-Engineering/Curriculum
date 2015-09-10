'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('checkData', function() {
	it('should exist', function() {
		expect(functions.checkData).not.to.be.undefined;
	});
});