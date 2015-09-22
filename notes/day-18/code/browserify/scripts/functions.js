var foo = 'bar';

function max(a, b) {
	console.log(foo);
	if(a > b) {
		return a;
	}
	else {
		return b;
	}
}

function min(a, b) {
	if(a < b) {
		return a;
	}
	else {
		return b;
	}
}

module.exports = {
	largest: max,
	smallest: min
};
