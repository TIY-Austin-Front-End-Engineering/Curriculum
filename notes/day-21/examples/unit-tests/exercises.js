function longest() {
	var argumentArray = [].slice.call(arguments);
	
	// input: array of arguments

	// 0. keep track of the currenlty longest argument
	var longestArgumentIndex = 0;



	// 1. look at each argument
	for(var i=0; i<argumentArray.length; i++) {
		// console.log(longestArgumentIndex, argumentArray[longestArgumentIndex]);
		// console.log(i, argumentArray[i]);
		// console.log('---');

		// If the length of the new element that I'm encountering
		// is longer than the longest I've encountered thus far
		// then update the longest to be the new element position

		// new element
		var newElement = argumentArray[i];

		// longest element I've encountered thus far
		var currenltyLongest = argumentArray[longestArgumentIndex];

		if(newElement.toString().length >= currenltyLongest.length) {
			longestArgumentIndex = i;
		}

		// if(argumentArray[longestArgumentIndex].length >= argumentArray[i].length) {
		// 	longestArgument = i;
		// }
	}


	// output: longest argument
	return argumentArray[longestArgumentIndex];
}

function average() {
	var argumentArray = [].slice.call(arguments);
	total = 0;
	// input is  of numbers
	for (i = 0; i < argumentArray.length; i++) {
		total += Number(argumentArray[i]);		
	}
	
	if(isNaN(total)) {
		throw new Error('Average can only take numbers or numeric strings');
	}

	return total / argumentArray.length;
	// 1. add array numbers
	// 2. divide by length of array

	// output is a number that is average of input numbers
}

function sum() {
	var args = [].slice.call(arguments);
	var total = 0;
	for(var i=0; i<args.length; i++) {
		if(typeof args[i] !== 'number') {
			throw new Error('Sum can only take numbers');
		}
		total += args[i];
	}
	return total;
}

module.exports = {
	longest: longest,
	average: average,
	sum: sum
}

