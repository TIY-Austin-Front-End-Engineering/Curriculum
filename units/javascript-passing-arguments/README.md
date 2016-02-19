# Passing / Changing Arguments in JavaScript

### You should already know about
* JavaScript Primitives
* JavaScript Objects
* JavaScript Arrays
* JavaScript Functions

## A close look at function arguments

We know that we can create functions in JavaScript to create re-usable snippets of code, however there are some intricacies of how function arguments work that are worth discussing.

Imagine the following scenario:

```js
function increase(num) {
	num = num + 7;
}

var x = 3;
increase(x);
console.log(x);
```

What would you expect the output of this program to be? If you guessed 10 you've gotten tricked by the way JavaScript's function arguments work for numbers, strings and booleans. The actual output is `3` and here's why...

When [JavaScript primitives](/units/javascript-primitives) are passed into a function, their value is actually *copied* into the function. The result in the example above is that `num` and `x` are completely difference boxes to store information. When `num` gets changed, `x` remains the same, so our increase function has essentially no effect. Here's how we might fix the increase function to work as we would expect:

```js
function increase(num) {
	num = num + 7;
	return num;
}

var x = 3;
x = increase(x);
console.log(x);
```

The output of this program will be `10` as we would expect because we are re-assigning the value of `x` to the output of the increase function before displaying `x`. Make sense?

Okay so we've learned that JavaScript primitives are copied (aka. passed by their value or *pass by value*). What about non-primitives like objects and arrays? Consider this example:

```js
function birthday(person) {
	person.age = person.age + 1;
}

var justin = {
	firstName: 'Justin',
	lastName: 'Herrick',
	age: 99
};
birthday(justin);
console.log(justin.age);
```

If objects behave the same way as numbers we would expect `person` to become a new copy of `justin` when the birthday function is called. When we console.log the age after increasing it by one we should still get 99 if `person` was a copy of `justin`, but JavaScript is not that consistent. Objects and arrays in JavaScript are said to be *passed by reference*. This means that they are not duplicated / copied before they are passed into a function. Instead, the function is able to access the properties of the object, or elements of the array directly from inside the function and change them! The output of the code above will be `100`.

## The last catch

Everything written above is true, but there is one more subtle difference between the way JavaScript objects and arrays are treated vs. other traditional *pass by reference* style languages. You can read more about that [difference here](http://nsono.net/javascript-pass-by-value-or-pass-by-reference/).

## More Resources
* [Does JavaScript pass by reference?](http://stackoverflow.com/questions/13104494/does-javascript-pass-by-reference)
* [JAVASCRIPT: PASSING BY VALUE OR BY REFERENCE](http://snook.ca/archives/javascript/javascript_pass)
* [Passing JavaScript Function Arguments by Reference](http://www.htmlgoodies.com/html5/javascript/passing-javascript-function-arguments-by-reference.html#fbid=vvtQScIblcz)
