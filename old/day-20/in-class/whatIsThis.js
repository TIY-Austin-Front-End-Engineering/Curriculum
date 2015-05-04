/*******************************/
/*   Setting up the examples   */
/*******************************/
var whatIsThis = function(a, b) {
	console.log('This is...', this);
	console.log('a = ', a);
	console.log('b = ', b);
};

var inAnObject = {
	name: 'inAnObject',
	test1: whatIsThis,
	anotherObject: {
		name: 'anotherObject',
		test2: whatIsThis
	}
};

var inAFunction = function(a, b) {
	whatIsThis(a, b);
};

inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
	name: 'trickyTricky',
	why: 'does this work?',
	what: 'is going on here?'
};

var confusing = {
	name: 'confusing',
	state: 'Alaska',
	city: 'Anchorage'
};


/*******************************/
/*     Running the examples    */
/*******************************/

// Instructions:
// Run through each of these examples one by one (commenting out
// the previous example and uncomment the current example as 
// necessary). In the comments section below each example fill 
// in what "this" is referencing inside of the whatIsThis
// function. Why?

// * Problem 1
whatIsThis('hello', 'world');
// * "this" is ...
// * because ...




// * Problem 2
// inAnObject.test1('face', 'book');
// * "this" is ...
// * because ...




// * Problem 3
// inAnObject.anotherObject.test1('twitter', 'book');
// * "this" is ...
// * because ...




// * Problem 3
// whatIsThis.call(trickyTricky);
// * "this" is ...
// * because ...




// * Problem 4
// whatIsThis.call(trickyTricky, 'nice', 'job');
// * "this" is ...
// * because ...




// * Problem 5
// whatIsThis.call(confusing);
// * "this" is ...
// * because ...




// * Problem 5
// whatIsThis.call(confusing, 'hello');
// * "this" is ...
// * because ...




// * Problem 6
// whatIsThis.apply(trickyTricky);
// * "this" is ...
// * because ...




// * Problem 7
// whatIsThis.apply(confusing, ['nice', 'job']);
// * "this" is ...
// * because ...




// * Problem 8
// inAFunction('what will', 'happen?');
// * "this" is ...
// * because ...




// * Problem 9
// inAFunction.test3('A', 'B');
// * "this" is ...
// * because ...




// * Problem 10
// var newObject = new inAFunction('what will', 'happen?');
// * "this" is ...
// * because ...




// * Problem 11
// newObject.test3('C', 'D');
// * "this" is ...
// * because ...




// * Problem 12
// inAnObject.test1.call(trickyTricky, 'face', 'book');
// * "this" is ...
// * because ...




// * Problem 13
// inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
// * "this" is ...
// * because ...