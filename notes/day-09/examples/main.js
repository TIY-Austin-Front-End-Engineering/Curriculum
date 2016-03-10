var names = ["Jess", "Aaron", "Abby", "Justin", "Travis", "Karly"];
var cities = ["Boston", "Mokpo", "Austin", "Asheville", "Nashville"];

// write a function that takes an array of strings
function printList(arr) {
  // loop over the array (and do something to each item in it)
  for (var i = 0; i < arr.length; i++) {
    // spit out the item into the console.
    console.log(arr[i]);
    //return value: none
  }
  return arr;
}

printList(names);
citiesPrinted = printList(cities);
console.log(citiesPrinted);

//count how many times some character occurs in a string

//inputs: a character to match, and a string
function charFrequency(string, character) {
  // make a counter to keep track of matches
  var counter = 0;
  // go through every character in the string
    for (var i = 0; i < string.length; i++) {
      // get a the character we're working on inside the string
      var letter = string.charAt(i);
      // compare the string character to the test character
      if (letter === character) {
        // if they are equal add one to the counter
        counter++;
      }
    }
    // return the counter
    return counter;
//return value(s): number (character frequency in string)
}

console.assert(charFrequency('breakfast', 'b') === 1, 'wanted 1, got something else');
console.assert(charFrequency('breakfast', 'a') === 2, 'wanted 2, got something else');
