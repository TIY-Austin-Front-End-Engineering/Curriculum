# JavaScript Operators

### You should already know about
* [JavaScript variables](../javascript-variables/README.md)
* [JavaScript primitives](../javascript-primitives/README.md)

## Logical operators
JavaScript has many logical operators:

* `>` greater than
* `<`  less than
* `===` equal to
* `!==` not equal to
* `>=` greater than or equal to
* `<=` less than or equal to
* `&&` AND, evaluates true when BOTH operands evaluate to true
* `||` OR, evaluates to true when EITHER operand evaluates to true

Most of these work as you might expect. We can evaluate expressions with these operators like so:

```js
5 > 6 // false
6 > 5 // true
5 === 6 // false
```

We can also pass expressions and variables, instead of just values:

```js
var firstName = "Billy Jo";

4+4 > 6; //true
firstName === "Billy Jo"; // true
5>6 || 6>5 // true
5>6 && 6>5 // false, only one of the two statements evaluates to true
firstName === "Billy Jo" && 6>5 // true, both of the statements evaluate to true
```

## What if...
Often in programming, we want to run some code only if certain criteria are met. Check out the following example:

```js
if (5 > 6) {
  console.log('five is greater than six');
}
```

This is called an 'if statement', and it is denoted by the keyword `if` and the following `()`. If statements check the expression inside the parentheses to see if it evaluates to `true`. Any expression that can evaluate to a boolean value can be placed inside the parentheses of an if statement. If this expression evaluates to true, the block of code that follows the parentheses is run. If the expression evaluates to false, the block of code will be ignored, as if it wasn't even there. The if statement block is any code contained within the curly braces (`{}`) following the parentheses. In the above example, the block of code never runs, because 5 is not greater than 6.

## Or else!
If statements can (optionally) be followed by an else block. Check this out:

```js
if (5 > 6) {
  console.log('five is greater than six');
} else {
  console.log('six is greater than five');
}
```

The else block (again, encapsulated by curly braces) runs, but the if block does not. It is also possible to chain if statements together using else and if, like so:

```js
if (5 > 6) {
  console.log('five is greater than six');
} else if (5 === 6){
  console.log('five is equal to six');
}
```

In this example, neither of the `console.log`'s will run, because neither of the if statements evaluate to true.

## It's not false, it's just... falsey
If statements look for true or false values to determine whether to run their block of code or not. But they are not very strict about how they interpret true or false. In fact, if statements don't care at all if an expression evaluates to the boolean `true` or `false`, because in JavaScript there is what is called 'truthy' and 'falsey'.

Say what?? Yes, this is screwy, hang onto your hats.

Every value or expression that evaluates to a value in JavaScript can be evaluated as either truthy or falsey, without actually having to be coerced into a true boolean `true` or `false`. There are some simple rules you should memorize regarding JavaScript falsiness:

##### Falsey values
  * numbers: `0`, `NaN`
  * strings: `''`
  * `null`
  * `undefined`

All other values will evaluate to true. For example:

```js
var firstName;
firstName // undefined, aka falsey
firstName = "Billy Jo";
firstName // "Billy Jo", aka truthy
5>6// false, aka falsey
```

While this may seem kind of crazy, it allows us to write much simpler if statements. Check this out:

```js
if (firstName) {
  console.log('well hello there, ' + firstName);
} else {
  console.log('please provide a name');
}
```

Instead of checking the actual value of `firstName`, we are able to check the truthiness of `firstName`. If `firstName` checks out as truthy, we go ahead and run the first block of code. If `firstName` is falsey (`undefined`, or an empty string, perhaps), we will run the else block instead.

## == vs ===
You may run across some code out there in the world wide web that contains the double equal (`==`) operator.  The `==` operator is the equality operator, while the `===` operator is the 'strict equality' operator. What is the difference? The `==` will coerce its operands into various types to attempt to find equality. For example:

```js
"5" == 5; // true
"5" === 5; // false
```

While it is technically a valid JavaScript operator, I strongly warn against using `==`.

## The ternary operator
If statements are only one way to run logical tests in JavaScript. Another option is the **ternary operator**. Unary operators (such as `!`) take one operand. Binary operators (such as `*`) take two operands. Can you guess how many operands the ternary operator takes?? That's right, three operands. The operator itself consists of two characters: the `?` and the `:`. Just like other operands, it can accept simple values or expressions. It is best reserved for simple if/else cases.

```js
'Unicorns are ' + (isMagical ? 'my friends' : 'not real');
```

In the above example, `isMagical` is a variable name. It is being evaluated as either truthy or falsey by the ternary operator. If it is truthy, the expression would evaluate to `'Unicorns are my friends'`, whereas if `isMagical` evaluates to falsey, the expression would evaluate to `'Unicorns are not real'`.

## More Resources
