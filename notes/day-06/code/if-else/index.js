// To use prompt-sync
// 1. run the `npm init` command in your project folder. Fill in the answers (or don't).
// 2. install the node module that you'd like to use. For example: `npm install --save prompt-sync`
// 3. require the module that we just installed inside of our code (like we do right below here)

var prompt = require('prompt-sync').prompt;

console.log('What is your age?');

var myAge = prompt();



// if(myAge >= 21) {
// 	console.log('You may enter');
// }
// else {
// 	console.log('You may not enter');
// }

if(myAge < 16) {
	console.log('You cannot drive');
}
else if((myAge > 16) && (myAge < 21)) {
	console.log('You can drive but not drink');
}
else {
	console.log('You can drink and drive, but not at the same time');
}

console.log('The end');