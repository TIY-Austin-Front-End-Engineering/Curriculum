console.log('hi');

var today = new Date();

today.getFullYear(); //2016
// today.getFullYear().getMonth() //error!
today.getMonth(); //zero indexed number of the current month

Math.round(123.43); // takes a number and returns closest integer
Math.ceil(123.23); //always rounds up
Math.floor(123.12); //always rounds down.

var age; // declaring the age variable

console.log(age); // logs the age - it's undefined!

age = 42; // variable assignment; age now represents the numer 42

console.log(age); // logs 42

age = 52; // variable reassignment; age now represets the number 52

var isHappy = true; // variable declaration AND assignment in one fell swoop
