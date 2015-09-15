(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// 'use strict';
/*******************************/
/*   Setting up the examples   */
/*******************************/
'use strict';

var whatIsThis = function whatIsThis(a, b) {
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

var inAFunction = function inAFunction(a, b) {
	this.name = 'Sally';
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
// You are a scientist who has just discovered a *mysterious* new element
// in your lab. Since creativity isn't your strong suit, you name the element
// `this`. Your job is to figure out the properties of this new element as
// well as how it interacts with its environment. Run through each of the
// examples in whatIsThis.js, one by one (commenting out the previous example
// and uncomment the current example as necessary). In the comments section
// below each example fill in what `this` is referencing inside of the
// whatIsThis function. Why? If it throws an error, why is it throwing an
// error?

// You can open index.html in your browser and view your console to get
// started.

// * Problem 1
// whatIsThis('hello', 'world');
// * "this" is ...
// * because ...

// * Problem 2
// window.whatIsThis('hello', 'world');
// * "this" is ...
// * because ...

// * Problem 3
// inAnObject.test1('face', 'book');
// * "this" is ...
// * because ...

// * Problem 4
// inAnObject.anotherObject.test1('twitter', 'book');
// * "this" is ...
// * because ...

// * Problem 5
// inAnObject.anotherObject.test2('twitter', 'book');
// * "this" is ...
// * because ...

// * Problem 6
// whatIsThis.call();
// * "this" is ...
// * because ...

// * Problem 7
// whatIsThis.call(trickyTricky);
// * "this" is ...
// * because ...

// * Problem 8
// whatIsThis.call(trickyTricky, 'nice', 'job');
// * "this" is ...
// * because ...

// * Problem 9
// whatIsThis.call(confusing);
// * "this" is ...
// * because ...

// * Problem 10
// whatIsThis.call(confusing, 'hello');
// * "this" is ...
// * because ...

// * Problem 11
// whatIsThis.apply(trickyTricky);
// * "this" is ...
// * because ...

// * Problem 12
// whatIsThis.apply(confusing, ['nice', 'job']);
// * "this" is ...
// * because ...

// * Problem 13
// whatIsThis.apply(confusing, 'nice', 'job');
// * "this" is ...
// * because ...

// * Problem 14
inAFunction('what will', 'happen?');
// * "this" is ...
// * because ...

// * Problem 15
// inAFunction.test3('A', 'B');
// * "this" is ...
// * because ...

// * Problem 16
// var newObject = new inAFunction('what will', 'happen?');
// * "this" is ...
// * because ...

// * Problem 17
// var newObject = new inAFunction('what will', 'happen?');
// newObject.test3('C', 'D');
// * "this" is ...
// * because ...

// * Problem 18
// inAnObject.test1.call(trickyTricky, 'face', 'book');
// * "this" is ...
// * because ...

// * Problem 19
// inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
// * "this" is ...
// * because ...

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map