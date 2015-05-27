# `this`, call and apply

### You should already know about
* Functions
* [Scoping / Closures](../scoping-closures/README.md)

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

This is pretty cool.