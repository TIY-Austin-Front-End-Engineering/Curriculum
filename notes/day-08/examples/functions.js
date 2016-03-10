//==============================================================================
//                            Functions
//==============================================================================
// functions are blocks of code that can be reused. They have names, just like
// variables. We define a function by "declaring" it with the following syntax.
// Inside the paranthesis of a function declaration we define parameters, which
// work like variables inside of our function.
// declaring a function does not run it, it is simply a definition.

function helloWorld(firstName) {
  console.log('hello ' + firstName);
};

// to run a function (or invoke a function) we use the variable name, followed
// by parantheses. If we declared parameters when we declared our function, we
// can pass in VALUES for those parameters. These values can be actual values,
// or variables that refer to values. The order of the values/parameters should
// match.

var teacherName = 'Aaron';
helloWorld('Jess'); // console.log's 'hello Jess'
helloWorld(teacherName); // console.log's 'hello Aaron'

// functions can have return values. A function invocation's value is equivelent to the functions return value.
// by default a function's return value is undefined.

var helloWorldValue = helloWorld('Jess');
console.log(helloWorldValue); // undefined

function helloWorldWithReturn(firstName) {
  return 'hello ' + firstName;
}

var helloWorldWithReturnValue = helloWorldWithReturn('Jess');
console.log(helloWorldWithReturnValue); // 'hello Jess'

//==============================================================================
//            turning asking a quiz question into a reusable function
//==============================================================================

function quizQuestion(question, rightAnswer1, rightAnswer2) {
  var userAnswer = prompt(question).toLowerCase();
  if (userAnswer === rightAnswer1) {
    console.log('right!')
    return 1;
  } else {
    console.log('wrong');
    return 0;
  }
};

counter += quizQuestion('How many body tags are there in an html document?', '1', 'one');
console.log(counter);
counter += quizQuestion('why?', 'because');
console.log(counter);


// functions invocations don't care how many arguments you pass them. They will
// try to match each argument to a parameter in their definition. If they cannot
// find a definition (there are more arguments than parameters) they will just
// ignore the extra arguments. If there are more parameters than arguments, the
// parameters will receive the default value of undefined.
var old = 99;

function helloWorld(name, age) {
  age = age || 50;
  return 'hi ' + name + ' are you really ' + age + ' old?';
}

helloWorld('Jess', 32); // 'hi Jess are you really 32 old?'
helloWorld('Aaron', old); // 'hi Aaron, are you really 99 old?'
helloWorld('Jess'); // 'hi Jess, are you really 50 old?'
helloWorld(); // 'hi undefined, are you really 50 old?'

//==============================================================================
                        // For Loop and arrays
//==============================================================================

// arrays are indexed (ordered) lists of values.
var myList = ['blue', 'green', 'yello', 4, 5, 6, 7];

// access values in an array with bracket syntax
console.log(myList[0]); // 'blue'
console.log(myList[5]); // 6

for (var i = 0; i < myList.length; i++) {
  console.log(myList[i+2]);
}
