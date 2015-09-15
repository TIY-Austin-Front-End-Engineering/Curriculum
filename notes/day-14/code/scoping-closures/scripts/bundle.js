(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
// function start() {
//     var name = 'Sam Smith';

//     function foo(test) {
//         var fooTest = 'Facebook';
//         console.log(test+' '+name);
//     }

//     function bar() {
//         console.log(test+' '+name);
//         console.log(fooTest);   // fooTest is not available here
//     }

//     foo('hi');
// }

// foo('blah');        // foo is not avaibable here
// console.log(name)   // either is name

// start();

// (function() {

// 	var firstName = prompt();
// 	var lastName = prompt();

// 	function greet(n) {
// 		n = 'Hello! '+n;
// 		console.log(n);
// 	}

// 	greet(firstName);
// 	greet(lastName);

// 	// var test = 'Aaron';
// 	// var $ = 'money';
// 	// function start() {
// 	// 	var name = 'Bob';
// 	// 	console.log(test);
// 	// }

// 	// start();

// 	// console.log(name);

// })();

function makeFunc(name) {
	// var name = "Foo";
	function displayName() {
		console.log(name);
	}
	return displayName;
}

var myFooFunc = makeFunc('Foo');
var myBarFunc = makeFunc('Bar');
myFooFunc();
myBarFunc();

function cachedCalculation(n) {
	function longCalculation() {
		var x = 0;
		for (var i = 0; i < n; i++) {
			for (var j = 0; j < 99999; j++) {
				x = i + j;
			}
		}
		return x;
	}

	var results = {};
	if (!results.hasOwnProperty(n)) {
		result[n] = longCalculation();
	}
	return results[n];
}
var result = cachedCalculation();
console.log(result);

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map