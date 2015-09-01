console.log(100+4);			// 104
console.log('a'+'b');		// ab
console.log('Bob'+'Smith');	// BobSmith
console.log('7'+'9');		// 79
console.log('7'+9);			// 79
console.log('7'-9);			// -2
console.log('abc'*3);		// NaN

var foo = 3;
console.log(foo++);
console.log(foo++);
console.log(foo/2);

var age = 29.8;
var wholeAge = Math.floor(age);
var nextAge = Math.ceil(age);

console.log(nextAge - wholeAge);

console.log(!Infinity);

var x = 10;
var y = 73.3;

var point = '[' + x + ', ' + y + ']';
console.log('point: '+point);

var numberOfSheep = 16;
var numberOfGoats = 3;

console.log(numberOfGoats + numberOfSheep++);

// var numberOfSheep = 16;
// var numberOfGoats = 3;

console.log(numberOfGoats - ++numberOfSheep);

var x;
var y = x = 7;

var x = 7;
var y = x;


console.log(x += 2);

console.log(x = x + 2);