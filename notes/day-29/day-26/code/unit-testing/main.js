exports.sum = function(a, b) {
	if(typeof a === 'undefined' || typeof b === 'undefined') {
		throw 'Invalid arguments';
	}
	else {
		return a + b;
	}
};