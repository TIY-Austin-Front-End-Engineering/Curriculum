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
	for(var i=0; i<arr.length; i++) {
		if(!_.isNumber(arr[i])) {
			throw 'Array should only contain numeric values.';
		}
		if(arr[i] > max) max = arr[i];
	}
	return max;
}

function salesTax(subtotal, percent) {
	if(arguments.length === 0) {
		throw('No arguments entered.');
	}

	if(arguments.length > 2) {
		throw('More than two arguments entered.');
	}

	if(arguments.length < 2) {
		throw('Less than two arguments entered.');
	}

	if(!_.isNumber(subtotal)) {
		throw('First argument is not a number.');
	}

	if(!_.isNumber(percent)) {
		throw('Second element is not a number.');
	}

	if(subtotal<0){
		throw('First argument should not be a negative number');
	}
	if(percent<0){
		throw('Second argument should not be a negative number');
	}
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