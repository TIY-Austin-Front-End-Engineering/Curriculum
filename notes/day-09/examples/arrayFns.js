//=============================================================================
//                      Functions as arguments/parameters
//=============================================================================
// a simple function that prints the string "this is cool":
function myCoolFunction() {
  console.log('this is cool');
}

// set timeout takes a function as it's first argument, and runs it after
// waiting the milliseconds specified in the second argument
// notice we are passing the NAME of the function, not the invoked function
// (myCoolFunction, and not myCoolFunction())
setTimeout(myCoolFunction, 5000);

// Write a function that invokes another function
// runFunction accepts one parameter that is a function. We invoke that function
// by putting () after it inside the function body
function runFunction(fn) {
  return fn();
}

// trying our 'runFunction' function by passing it another function. This call
// is essentially the same as just writing myCoolFunction();
runFunction(myCoolFunction);


//=============================================================================
//                        Array iterator methods
//=============================================================================
var arr = ["jess", "aaron", "abby", "justin"];


//=============================================================================
//                           Array.prototype.forEach()
//=============================================================================
// the callback function we're using in our .forEach()
function printValue(currentValue, index) {
  console.log('order' + index + ': ' +currentValue);
  return 'currentValue: ' + currentValue; // does nothing - forEach's callback ignores our return statements!
}

// running arr.forEach(), and attempting to store it's return value in the var
// forEachResult. By forEach'ing with printValue, we are will console.log each
// value in the array one at a time.
var forEachResult = arr.forEach(printValue);

// logging the result we attempted to store in forEachResult
console.log(forEachResult); // undefined

//=============================================================================
//                           Array.prototype.map()
//=============================================================================
// .map() always returns a new array of the same length as the array on which it
// ran. The values in the new array will be determined by the callback function
// passed to map. The return value of that callback is the new array value.

// Defining our callback
function makeGreeting(newValue) {
  return 'hi ' + newValue;
}

// calling our function and storing the result in a variable
var greetings = arr.map(makeGreeting);

// logging the result
// notice the order of the new array matches the order of the old array.
// They are said to "map" to each other
console.log(greetings); // ['hi jess', 'hi aaron', 'hi abby', 'hi justin']

//=============================================================================
//                           Array.prototype.filter()
//=============================================================================
// .filter() always returns a new array of the same OR SHORTER length as the
// array on which it ran. The values in the new array will be THE SAME AS the
// values in the original array. The values included in the new array are
// detemined by the return value of the callback passed to filter. If it
// returns true, the value is included. If it returns false, the value is
// excluded.

//creating a callback for the filter function
function dropJess(element, index, array) {
  if (element !== 'jess') {
    return true;
  }
  return false;
}

// storing the result of our filter function
var filteredNames = arr.filter(dropJess);

// logging the stored new array.
console.log(filteredNames);
