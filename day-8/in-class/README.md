[Day 8](/day-8/README.md)

# Questions

With a partner take turns answering each of the following questions and explaining what the answer is and why.

### 1. What does the following code evaluate to?
```js
var first_name = function (name) {
  return name;
}
first_name("bob");
```

### 2. What does the following code evaluate to?

```js
function add(x, y) {
  return x + y;
}
add(2, 3);
```

### 3. What does the following code print to the console?
```js
function square (x) {
  return(x * x);
}
console.log(square(5));
```

### 4.  What does the following code print to the console?

```js
function square (x) { return(x * x) };
function cube (x) {
  return(x * square(x));
}
console.log(cube(2));
```

### 5. What does the following code print to the console?

```js
var what = function () { return "HI!!!!" };
console.log(typeof(what));
```

### 6. What does the following code print to the console?

```js
function doctor_name (last_name) {
  return "Dr. " + last_name
}
console.log(doctor_name());
```

### 7. What does the following code print to the console?

```js
function add(x, y) {
  return(x + y);
}
console.log(add(1, 2, 3, 4, 10, 20));
```

### 8. What does the following code print to the console?

```js
function lamp() {
  var my_special_variable = "I am special";
}
lamp();
console.log(my_special_variable);
```

### 9. What does the following code print to the console?

```js
var result;
if (undefined) {
  result = function () { return "blah blah blah"; }();
} else {
  result = function () { return "meow meow meow"; }();
}
console.log(result);
```

# Exercises

1. Define a function called add_numbers() that adds two numbers and throws an error if the arguments supplied to the function are not numbers.
2. Write a JavaScript function that will reverse a number. For example, entering 32243 would return 34223.