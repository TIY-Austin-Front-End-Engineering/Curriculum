function maxOfThree(a, b, c) {
	if(!_.isNumber(a)) {
		throw 'The first argument must be a number.';
	}
	if(!_.isNumber(b)) {
		throw 'The second argument must be a number.';
	}
	if(!_.isNumber(c)) {
		throw 'The third argument must be a number.';
	}


	var numbers = [a, b, c];
	var max = a;
	for(var i=1; i<numbers.length; i++) {
		if(numbers[i] > max) max = numbers[i];
	}
	return max;
}

function maxInArray(arr) {
	if(!_.isArray(arr)) {
		throw 'First argument must be an array.';
	}
	if(!arr.length) {
		throw 'Array must have at least one element.';
	}
	var max = arr[0]
	for(var i=1; i<arr.length; i++) {
		if(arr[i] > max) max = arr[i];
	}
	return max;
}

function salesTax(subtotal, percent) {
	
}

function square(num) {

}

function isPrime(num) {

}

function midPoint(start, end) {

}

function fizBuz1() {
	
}

function fizBuz2(start, end) {
	
}

function numOccurrences(needle, haystack) {

}

function relationship(a, b) {
	if(!_.isNumber(a)) {
		throw 'The first argument must be a number.';
	}
	if(!_.isNumber(b)) {
		throw 'The second argument must be a number.';
	}

	var returnString;

	if(a > b) {
		returnString = a+' is greater than '+b;
	}
	else if(a < b) {
		returnString = b+' is greater than '+a;
	}
	else {
		returnString = a+' and '+b+' are equal';
	}
	return returnString;
}

function inArray(needle, haystack) {
	
}