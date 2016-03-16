// var car = {
// 	make: 'Honda',
// 	model: 'Pilot',
// 	color: 'red'
// };

// car.numPassengers = 3;
// car.color = 'blue';

// var key = prompt('What info do you want to change?');
// var value = prompt('What is the value?');

// // car.numPassengers = key;
// // car.key = value;
// car[key] = value;

// console.log(car);


var sentence = 'The quick brown fox jumps over the lazy dog';

// // Inputs: The sentence that we want to count

// // Create a bunch of counters, one for each character in the alphabet
// var a = 0;
// var b = 0;
// var c = 0;
// var d = 0;
// var e = 0;
// var f = 0;
// var g = 0;

// // Iterate over the characters in the string
// for(var i=0; i<sentence.length; i++) {
// 	// figure out what the current character is
// 	if(sentence.charAt(i).toLowerCase() === 'a') {
// 		a++;
// 	}
// 	else if(sentence.charAt(i).toLowerCase() === 'b') {
// 		b++
// 	}
// 	else if(sentence.charAt(i).toLowerCase() === 'b') {
// 		b++
// 	}
// 	else if(sentence.charAt(i).toLowerCase() === 'b') {
// 		b++
// 	}
// 	else if(sentence.charAt(i).toLowerCase() === 'b') {
// 		b++
// 	}
// 	else if(sentence.charAt(i).toLowerCase() === 'b') {
// 		b++
// 	}
// 	else if(sentence.charAt(i).toLowerCase() === 'b') {
// 		b++
// 	}
// 	// update the corresponding counter when we
// 	// for that character
// }

// // Display each counter

// // Outputs: Each letter of the alphabet and how many occurrences


// Inputs: The sentence that we want to count

// Set up a place to keep a list of each character that I encounter
var counts = {};
// Look at each character in the string one by one
for(var i=0; i<sentence.length; i++) {
	// Look at the individual character
	var char = sentence.charAt(i).toLowerCase();
	// Check the list to see if it's already on there
	if(char in counts) {
		// Update it's number on the list by one
		counts[char]++;
	}
	// Otherwise
	else if(char !== ' ') { // Make sure that we don't count spaces
		// Add it to the list with a count of one
		counts[char] = 1;
	}
}
// Display my final list
// delete counts[' '];
console.log(counts);

// Outputs: Each letter of the alphabet and how many occurrences













