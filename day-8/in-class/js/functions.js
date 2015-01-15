// min must be >= max
var randomRange = function(min, max) {
	if(typeof min !== 'number') {
		throw 'Min must be a number';
	}
	if(typeof max !== 'number') {
		throw 'Max must be a number';
	}
	if(min > max) {
		throw 'Max must be greater than or equal to min.';
	}

	return Math.random() * (max - min) + min;
}

var randomRangeWholeNumber = function(min, max) {
	if(typeof min !== 'number') {
		throw 'Min must be a number';
	}
	if(typeof max !== 'number') {
		throw 'Max must be a number';
	}
	if(min > max) {
		throw 'Max must be greater than or equal to min.';
	}

	return Math.ceil(Math.random() * (max - min) + min);
}

randomRange(4, 10);

// var fourAndTen = function(generator) {
// 	return generator(4, 10);
// }

// var min = 4;
// var max = 10;
// randomRange();


// var randomNumber = fourAndTen(randomRangeWholeNumber);
// console.log(randomNumber);

// var myOtherFunction = randomRange;

// console.log(myOtherFunction(0, 100));

// console.log(myRandomRange);
// console.log(randomRange);

// var numSevenToTen = randomRange(7, 10);

// console.log(numSevenToTen);

// var myMinValue = 7;
// var myMaxValue = 10;

// randomRange(myMaxValue, myMinValue);
// randomRange(7);
// randomRange('hello');



// function testReturn() {
// 	return 5;
// 	console.log('I returned 5');
// }

// var thisVar = testReturn();

// myReturnValue = myReturnValue + 10:

// console.log(myReturnValue);



// a(); // will work

// b(); // won't work


// function a() {
// 	b(); // will work
// 	var bb = 'test';

// 	var b = function() {

// 	}

// 	b(); // will work
// }

// b() // won't work

// a(); // will work

// var result = function() {
// 	return "meow meow meow";
// }();

// result()


// var privateFunction = function() {

// 	var b = 'test'
// 	console.log(b);
// }();


// console.log(b);

function add_numbers(num1, num2) {
	if(typeof num1 !== 'number') {
		throw 'num1 is not a number.';
	}
	if(typeof num2 !== 'number') {
		throw 'num2 is not a number.';
	}
	return num1+num2;
}

function reverse_num(a) {
	var numString = a.toString();
	var reversedString = '';
	for(var i=0; i<numString.length; i++) {
		reversedString = numString.charAt(i) + reversedString;
	}

	return parseInt(reversedString);
	// if(typeof a !== 'number') {
	// 	throw 'a is not a number.';
	// }
	// // console.log(a.split(""));
	// // console.log(a.split("").reverse());
	// // console.log(a.split("").reverse().join());
	// return parseInt(a.toString().split("").reverse().join(""));
	// // var x = a;
	// // var y = x.toString();
	// // console.log(y.split(""));
	// // // var z = y.split("").reverse().join("");
	// // // return Number(z);
}
