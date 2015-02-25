[Table of Contents](/README.md)

# Day 32: Recursion and Angular Filters

## Goals
* Learn how to use recursion to iterate over nested objects
* Learn how to create custom angular filters

## Notes
Recursion is a general programming concept that describes a particular type of function (a "recursive" function). Recursive functions are simply function that call themselves.

Why do we need recursion? Think about trying to `console.log()` all of the items in the following object.

```js
var obj = {
	name: 'parent',
	children: [
		{
			name: 'child 1',
			children: []
		},
		{
			name: 'child 2',
			children: [
				{
					name: 'grandchild a'
				},
				{
					name: 'grandchild c'
				}
			]
		},
		{
			name: 'child 3',
			children: []
		},
	]
}
```

We could use a bunch of nested `for ... in` loops, but if our grandchildren ever have children of their own, then we would have to modify our code to accommodate. Recursion allows us to iterate through this object regarless of how many generations there are (as long as each object follows the convention of having a `name` and `children` properties).

Recursion is particuarly useful for problems that can be broken down into a series of similar steps. Calculating a factorial is a traditional example of a problem that lends itself well to a recursive solution. *Not all problems can be written with a recursive solution!*

If you dont know, a factorial is calculated by taking a number and continually multiplying it by one less than itself untill you reach one. For example:

> 3! (aka 3 factorial) is equal to:
> 3 * 2 * 1

Similarly...

> 4! is equal to:
> 4 * 3 * 2 * 1

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

Notice that this recursive factorial function calls itself (in the last else statement). Let's break it down:

```js
function factorial(n) {
```

> Here we are declaring our function just like we would declare any non-recursive function.

```js
if(n < 1) {
	throw 'n cannot be less than 1';
}
```

> Here we are doing some simple error checking to make sure that the data passed in to our function is not less than 1. Factorials can only be calculated for numbers greater than or equal to 1.

```js
else if(n == 1) {
	return n;
}
```

> After we do our basic error checking (like we would do with any non-recursive javascript function) we create what is called the "base case". The "base case" is our simplest case. For the factorial example, if we try to calculate `1!` that's pretty much as simple as it gets. `1! = 1` so we say `if(n == 1)` then `return 1`. Recursive functions always start with one or more base cases.

```js
else {
	return n * factorial(n-1);
}
```

> Finally we write our "recursive case". Basically, if we don't hit our base case, then we want to call our function again but this time with a different argument. In this case we are using the observation we made earlier that `n! = n * (n-1)!. If each time we hit our recursive case we keep decreasing the argument then eventually we will call `factorial(1)` (our base case).


# Assignment

# Resources
* [Memory game wireframes](/day-30/Memory-Game.pdf)