// Computer, please say "Type in some text" and prompt for
// input, then remember it
var text = prompt('Type in some text');

// Computer, please tell me how many characters there
// are in the text I remembered and display that number
// to the console.
console.log(text.length);

// Computer, please say "What is the quote?" and prompt for
// input, then remember it
var quote = prompt('What is the quote?');

// Computer, please say "Who said it?" and prompt for
// input, then remember it
var who = prompt('Who said it?');

// Computer, please display the quote and who said it.
document.write(who+' says \''+quote+'\'');

// This does the same as above but uses string interpolation
document.write(`${who} says "${quote}"`);

// Computer, please say "How old are you?" and prompt for
// input, then remember it
var currentAge = prompt('How old are you?');

// Computer, please convert the currentAge to a number and
// remember it.
var numericAge = parseFloat(currentAge);

// Computer, please add one to the numericAge and remember it.
var newAge = numericAge + 1;

// var newAge = parseFloat(prompt('How old are you?')) + 1;
// var newAge = parseFloat('29') + 1;
// var newAge = 29 + 1;
// var newAge = 30;

// Computer, please display the new age
document.write('You will be '+newAge+' years old a year from now');
