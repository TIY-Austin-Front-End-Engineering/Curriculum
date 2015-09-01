var prompt = require('prompt-sync').prompt;

var numCorrectAnswers = 0;

console.log('What is your name?');
var name = prompt();


console.log('Hey '+name+' here is your first question...');
console.log('Which one of these is a JavaScript type: boolean, chicken, ostrich');
var answer1 = prompt();

if(answer1 === 'boolean') {
	numCorrectAnswers = numCorrectAnswers + 1;
	console.log('You are correct!')
}
else {
	console.log('Not quite');
}