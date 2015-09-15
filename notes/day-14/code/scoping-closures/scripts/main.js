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
		for(var i=0; i<n; i++) {
			for(var j=0; j<99999; j++) {
				x = i + j;
			}
		}
		return x;
	}

	var results = {};
	if(!results.hasOwnProperty(n)) {
		result[n] = longCalculation();
	}
	return results[n];
}
var result=cachedCalculation();
console.log(result);




