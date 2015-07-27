# `this`, call and apply

### You should already know about
* Functions
* [Scoping / Closures](../scoping-closures/README.md)

## `this`

Sometimes it's useful to know who initiated a particular function call. For example, let's imagine we have a method on a function called getFullName:

```js
var person1 = {
	firstName: 'Sam',
	lastName: 'Smith',
	getFullName: function() {
		return person1.firstName+' '+person1.lastName;
	}
};
```

This is pretty cool. Now if we change the `firstName` or `lastName` properties the `person1.getFullName()` method will automatically update to reflect the new name. Could we do this if we had an array of people?

```js
var people = [
	{
		firstName: 'Sam',
		lastName: 'Smith',
		getFullName: function() {
			// ????
		}
	},
	{
		firstName: 'Aruna',
		lastName: 'Philotheos',
		getFullName: function() {
			// ????
		}
	}
]
```

We'd like to still be able to reference the `firstName` and `lastName` properties from within our getFullName method, but this time we don't have a variable name to reference. Instead, we can use a special keyword that is built into javascript called `this`. For example:


```js
var people = [
	{
		firstName: 'Sam',
		lastName: 'Smith',
		getFullName: function() {
			return this.firstName+' '+this.lastName;
		}
	},
	{
		firstName: 'Aruna',
		lastName: 'Philotheos',
		getFullName: function() {
			return this.firstName+' '+this.lastName;
		}
	}
]
```

The `this` keyword refrences the data (usually an object) that called the particular function.

So if I call `people[0].getFullName()` then `this` inside of the `getFullName` method references `people[0]`. Read that ten times until it sinks in.

Here's another example:

```js
var cat = {
	sound: 'meoooowww!',
	speak: function(prefix, suffix) {
		if(typeof prefix === 'undefined') {
			prefix = '';
		}
		if(typeof suffix === 'undefined') {
			suffix = '';
		}
		console.log(prefix+' '+this.sound+' '+suffix);
	}
}
```

In the above example, calling `cat.speak('fancy', 'time')` will console.log "fancy meoooowww! time" because `this` references the `cat` object.

## call and apply

Got it? Okay, let's make it a bit more complicated. Sometimes we want to call a function or method using a different object. For example:

```js
var lion = {
	sound: 'roar'
}
```

What if we want to call the speak method on our `cat` object from above, but we want to do it using our `lion` object. For this we can use `call` or `apply`.

```js
cat.speak.call(lion); // " roar "
```

This code is a bit difficult to parse, but essentially what it is saying is that we should call `cat.speak` but using the `lion` object instead of the `cat` object. When we run this code `this` references the `lion` object instead of the `cat` object.

If we want to pass a prefix and a suffix into our `cat.speak` call, we can add them as parameters inside of call. For example:

```js
cat.speak.call(lion, 'scary', 'RAH RAH'); // "scary roar RAH RAH"
```

The Mozilla Developer Network has [great documentation on call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) that describes how to use it.

The `apply` method is exactly the same as `call` but it takes an array of arguments instead of separate arguments. For example:

```js
cat.speak.apply(lion, ['scary', 'RAH RAH']); // "scary roar RAH RAH"
``` 