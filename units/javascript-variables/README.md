# JavaScript Variables

### You should already know about
* [JavaScript Primitives](../javascript-primitives/README.md)

## A place for everything and everything in its place
Writing values and expressions in the console is cool and all, but it's not very practical. As soon as the interpreter spits out the evaluation of our input, all memory of our input and its evaluated value immediately disappear. That's fine if we want to just use the console as a one off calculator, but generally speaking, that's not at all what we're trying to do.

This means we need a way to hold onto values. In JavaScript, we do this with **variables**. I like to think of variables as labeled drawers. We can put any value or expression in a drawer, give it a label, and then go get the contents of the drawer again later by looking it up with its label.

When we put the label on the drawer, so to speak, we are **declaring** a variable. Variable declaration is done with the keyword `var`.

```js
var firstName;
```

The above example declares the variable called `firstName`. It makes the drawer and puts a label on it. Variable labels (or names) can be pretty much anything you want, except for existing reserved words (like `var`), but they cannot start with numbers or most special characters (the `$` and `_` are notable exceptions). The JavaScript community has generally agreed that variable names should begin with lowercase letters. Naming things is one of the hardest parts of coding!

You'll notice that we didn't put anything _in_ the drawer when we declared it. Right now, it's just an empty drawer. This unassigned variable will evaluate to `undefined`. To put something in it, we must use the the **assignment operator**, `=`. Don't be confused. While that `=` may _look_ like an equals sign, it is not the same as the mathematical equals sign you're used to. Here's how it works:

```js
var firstName = "Billy Jo";
```

```js
var five = 2+3;
```

Notice that we can assign values _or_ an expression to a variable. The variable will put our data in the drawer either way, but in the case of expressions, the variable will store the _evaluated value_ of the expression, not the expression itself.

## Pass it around
Variables are powerful because they allow us to store information. After declaring a variable, we can reference that variable elsewhere in our code by using its label. For example:

```js
var five = 2+3;
five+5; // evaluates to 10

var ten = five + five;
ten + ten; // evaluates to 20
```

The variables remember the value that was assigned to them, and can be used in place of that value anywhere in our code.

## Assign, and then reassign
Variables can be reassigned new values with the assignment operator. In other words, we can change what we put in the drawer. JavaScript doesn't care at all! When we reassign a variable to a new value, we don't use the keyword `var`. Remember, the keyword `var` is for _declaring_ variables, not for assigning them. We often do both in the same statement, but we can break them into separate steps if it serves us. Watch this:

```js
var five;
five = 5;
five; // evaluates to 5
five = 6;
five; // evaluates to 6
```

## More Resources
