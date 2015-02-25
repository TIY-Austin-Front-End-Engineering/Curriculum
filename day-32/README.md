[Table of Contents](/README.md)

# Day 32: Recursion and Angular Filters

## Goals
* Learn how to use recursion to iterate over nested objects
* Learn how to create custom angular filters

## Notes
Recursion is a general programming concept that describes a particular type of function (a "recursive" function). Recursive functions are simply function that call themselves. Recursion is particuarly useful for problems that can be broken down into a series of similar steps. Calculating a factorial is a traditional example of a problem that lends itself well to a recursive solution.

If you dont know, a factorial is calculated by taking a number and continually multiplying it by one less than itself untill you reach one. For example:

> 3! (aka 3 factorial) is equal to:
> 3*2*1

Similarly...

> 4! is equal to:
> 4*3*2*1

Notice that `4!` is equal to `4*3!` and `3!` is equal to `3*2!`. In fact if we take any number `n` then `n!` is equal to `n*(n-1)` factorial. The trivial, non-recursive way to calculate a factorial is like this:

```js
function factorial(n) {
	var f = 1;
	for(var i=1; i<=n; i++) {
		f = f*i;
	}
	return f;
}
```

But we can also write write our factorial function recursively like so:

```js
function factorial(n) {
	if(n < 1) {
		throw 'n cannot be less than 1';
	}
	else if(n == 1) {
		return n;
	}
	else {
		return n * factorial(n-1);
	}
}
```

# Assignment

# Resources
* [Memory game wireframes](/day-30/Memory-Game.pdf)