# JavaScript Scope and Closures

### You should already know about
* Function Basics

## Scoping

Within JavaScript, any variables and functions that we create have a spcific **scope**. Scope is a special term that refers to *where* a variable or function can be used. JavaScript only allows other functions and variables to be accessed from within the function where they were defined, or any child functions. Let's look at an example...

```js
function start() {
	var name = 'Sam Smith';

	function foo(test) {
		var fooTest = 'Facebook';
		console.log(test+' '+name);
	}

	function bar() {
		console.log(test+' '+name);
		console.log(fooTest);	// fooTest is not available here
	}

	foo('hi');
}

foo('blah'); 		// foo is not avaibable here
console.log(name) 	// either is name

start();
```

In the example above, the variable `name` is only available from within the function `start` or any other functions that are defined within `start`, such as `foo`. Functions act like a one way mirror. Anyone on the outside looking in cannot see their variables or functions, but on the inside looking out you can see everything.

## Closures

In JavaScript, we have lots of freedom to pass around functions as if they were variables. Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created. Take a look at this example:

```js
function makeFunc() {
  var name = "Pandora";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

The function `makeFunc` above is a function that returns a function. *Wait what!??*. Yep. `makeFunc` defines a function inside of it and returns that function. It's not return the result of the `displayName` function. It's returning the function itself, so that it can be invoked (called) later.

When `displayName` is called later in the code on the line that looks like: `myFunc();` it will still be able to console.log the string "Pandora". When displayName was defined, it kept track of the invironment in which it was created, namely that `var name = "Pandora"`. When it is called later, it still knows that `name` holds the value of Pandora and so it is able to properly console.log the appropriate value, even though it is being called outside of `makeFunc` where the `name` variable was defined.

This can sometimes cause unexpected behavior. Consider the code below for example:

```js
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
	nodes[i].addEventListener('click', function() {
		console.log('You clicked element #' + i);
	});
}
```

If there are 10 button, what will be logged to the console when you click on the third button? You might be surprised to learn that it's actually "You clicked element #10". In-fact, no matter which button you click, the string "You clicked element #10" will always be logged to the console. This is because each anonymous function created on lines 3-5 is a closure. Each event handler references variable `i` when the button is clicked, but by the time the button is clicked, `i` has already gone from 0 all the way up to 10 before the loop stops. 