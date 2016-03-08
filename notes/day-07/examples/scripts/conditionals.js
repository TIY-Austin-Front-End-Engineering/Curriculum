var age = '32';

32 === 32 // true
age === 32 // false, 'triple' or 'strict' equals will not coerce the string to a number
age == 32 // true, 'double' equals WILL coerce the string to a number
'4' == 4 // true
'4' >= 4 // true, there is no 'strict' option for greater than or equal to OR less than or equal to
32 || 33 // 32; || or returns the first TRUTHY value it finds
32 && 33 // 33; && and returns the last value OR the first falsey value it finds
age && 32 // 32; both are "truthy" even tho they are not the same. returns the last truthy value

var firstName = prompt('what is your first name?');
var lastName = prompt('what is your last name?');
//
if (firstName) {
  console.log('hi ' + firstName);
} else {
  firstName = prompt('sorry, what ?');
  console.log(firstName);
}

// this while block will keep asking the user for their firstName until they give a truthy answer! it's commented out so the ternary below can give interesting results;
// while (!firstName) {
//   firstName = prompt('Sorry, what was that?')
// }

console.log('hi ' + firstName)

var greeting;

//ternary operator ? : check if the expression before the ? is truthy, if so, evaluate to whatever's between the ? and the : otherwise, evaluate to what's after the : 
greeting = firstName ? 'Hi ' + firstName : lastName ? 'Hi ' + lastName : 'you don\'t have any name?'

console.log(greeting);
