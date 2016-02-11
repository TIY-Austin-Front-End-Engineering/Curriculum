# JavaScript Primitives

### You should already know about
* [JavaScript Introduction](../javascript-introduction/README.md)

## JavaScript is a calculator

I like to think about JavaScript as a really fancy calculator that your browser uses to manipulate information. At the end of the day, everything we do with JavaScript is manipulation of information, so it makes sense to start out with the different types of information we might want to manipulate.

JavaScript has a notion of **types**, which are different categories of information that we can manipulate. Types can be broken down into two main categories - primitives and objects. Primitives are just simple values. Objects are a special type that are a far more complex data structure. For now, we are going to focus on the primitives.

## Numbers
JavaScript numbers are pretty much the same as numbers that we'd use to calculate things with a calculator. We can perform **operations** on them, like addition, subtraction, multiplication, etc.

Our JavaScript code is made up of a series of **expressions** like the one below:

```js
2+2
```

In the expression above, we are adding two different numbers together. Expressions in JavaScript can often be simplified, or **evaluated**. For example, `2+2` is evaluated to another number, `4`. Simple enough eh?

If you remember back to your arithmetic days, there is a special order in which mathematical operations are performed. Do you Remember *PEMDAS* or *please excuse my dear aunt sally*? These are easy ways to remember the order in which mathematical operations are done. The order is:

1. Parentheses
2. Exponents
3. Multiplication / Division
4. Addition / Subtraction

This is all the math you will ever need to know to become a web developer. Let's look at the following JavaScript expression:

```js
2+2*3
```

JavaScript is not smart. It can't evaluate this expression all at once. It has to break it down into parts, and do one operation at a time. Based on the order of operations we laid out above here are the steps JavaScript will take.

1. `2*3` is equal to `6`. The multiplication is done first because it has a higher precedence than addition.
2. After the multiplication calculation is complete, the expression will look like: `2+6`. This is simple enough. Now JavaScript will do the addition and get a final value of `8`.

##### NaN
`NaN` is a special number value the represents "Not a Number". Let's say, for example, you tried to do math with non-numbers, like so:

```js
2-"this string is not a number"
```
This expression will evaluate to `NaN`, because, you guessed it, the answer is not a number.

## Strings
JavaScript strings are text. Strings are denoted by quotation marks (either single '' or double ""). Think of them as 'strings' of characters. Any character can be in a string, including numbers. Revisit the [JavaScript Introduction](../javascript-introduction/README.md) for more details on strings.

```js
'unicorns'
```

##### String operators
JavaScript has one operator that works on strings. It looks (and technically is) the same as the plus sign, but in the case of strings it is actually a 'concatenation operator'. The `+` will add strings together, like so:

```js
"Hi! My name is " + "Billy Jo" // evaluates to "Hi! My name is Billy Jo"
```

## Booleans
JavaScript booleans are the value `true` or `false`. The words "true" and "false" are reserved words in JavaScript, so if you type them into your console without quotation marks, they will be interpreted as their value, and you will not get an error. Our computer thinks of booleans as either a 0 or a 1. Either nothing, or something.

```js
"false" // not a boolean! this is a string
false // the boolean value of false
```

##### Boolean operators
The `!` (bang) operator will turn a boolean into its opposite value. You can read it like the word 'not'. For example:

```js
!false // evaluates to true (aka not true)
!!true // evaluates to true (aka not not true)
```

There are many other operators that work in conjunction with booleans, we'll discuss them more when we get to [`if` statements](../javascript-if-statements/README.md).

## Null and Undefined
JavaScript has two primitives to represent the concept of "not a value". What?? Yeah, that's right, values that represent non-values. Kinda funky, but absolutely necessary. The first is `null`, which represents literally nothing. The second is `undefined`, which is the value assigned to variables that have no value. The differences are subtle, but for now you can think of them as just representing "no value".

## Type Coercion
Check this out:

```js
5-"2" // 3
2+"5" // "25"
2*"JavaScript is strange" // NaN
!"JavaScript is strange" + " for real!" // "false for real!"
```
Your first reaction might be "oh yeah, of course!" but more likely you're thinking "what in the world just happened??" What happened is this: JavaScript allows its operators to change the type of the value they are operating on, in attempt to make their expression evaluate properly. Any primitive value can be 'coerced' into either a number, string, or boolean.

I recommend playing around with this some. Until you are used to type coercion, it can cause unexpected results. The basic rule of thumb is:

* The `+` operator will always coerce into strings, unless both the operands (values it operates on) are numbers.
* All the other math operators (like `*` or `-`) will coerce their operands into numbers
* The `!` operator will coerce its operand into a boolean

## More Resources
* [JavaScript Types - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
* [JavaScript Operators and Expressions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
