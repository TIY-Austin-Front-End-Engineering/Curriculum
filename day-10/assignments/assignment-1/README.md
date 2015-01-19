# Assignment 1: Javascript Object review
## Don't forget to validate all the arguments of your functions and throw errors if the argurments are incorrect!
### 1. Create a function that takes an object and console.logs each property int he object. For example:
```js
var person = {firstName: "Bob", lastName: "Smith", age: 32};
listProperties(person)
```
> firstName: Bob
> lastName: Smith
> age: 32

### 2. Create a function that takes an object and console.logs that object. Then delete the `rollno` property of the object and console.log the object again. For example:
```js
var person = {firstName: "Bob", lastName: "Smith", age: 32, rollno: 12};
deleteRollno(person)
```
> {firstName: "Bob", lastName: "Smith", age: 32, rollno: 12}
> {firstName: "Bob", lastName: "Smith", age: 32}

### 3. Create a function that takes an object and returns the number of properties on that object that start with the letter "a" or "A"
```js
var person = {firstName: "Bob", lastName: "Smith", age: 32, rollno: 12};
countAProperties(person);
```
> 1

### 4. Create a function that takes a cylinder object and returns the volume of that cylinder. The cylinder object will have `radius` and `height` properties.

### 5. Create a function that takes a firstName, lastName and age and returns an object with `firstName`, `lastName` and `age` properties as well as a `friends` property that contains a list of friend names. Add at least 3 friends to the `friends` list.

### 6. Create a function that takes the result of the last problem and a friend name and adds that friend to the `friends` property of the object.