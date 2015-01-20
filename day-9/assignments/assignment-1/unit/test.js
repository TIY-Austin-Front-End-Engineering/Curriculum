var assert = chai.assert;
describe("randomElement", function() {
	it("should require one parameter (array)", function() {
		assert.throw(function () { randomElement(); });
		assert.throw(function () { randomElement(124); });
		assert.throw(function () { randomElement([]); });
		assert.doesNotThrow(function () { randomElement(['Aaron']); });
	});
});