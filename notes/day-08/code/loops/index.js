var prompt = require('prompt-sync').prompt;

var ready = 'y';

var number1 = 0;
var number2 = 15;

while(number1 < number2) {
	number1 += 2;
	number2--;
	console.log(number1, number2);
}

var people = ['Mike', 'Noel', 'Jacob'];
var index = 0;

// while(index < people.length) {
// 	var name = people[index];
// 	console.log('What is '+name+'\'s last name?');
// 	var lastName = prompt();
// 	console.log('Hello '+name+' '+lastName);
// 	index++;
// }

// var length = people.length;

// for(var index = 0; index < length; index++) {
// 	console.log('What is '+people[index]+'\'s last name?');
// 	var lastName = prompt();
// 	// console.log('Hello '+people[index]+' '+lastName);
// 	// people[index] = people[index] + ' ' + lastName;
// 	people.push(lastName);
// }

// console.log(people);

var colors = {
	dark: 'red',
	light: 'blue',
	normal: 'green',
	opaque: 'pink'
};

for(var prop in colors) {
	// console.log(prop);
	// if(prop === 'dark') {
	// 	console.log('red');
	// }
	// else if(prop === 'light') {
	// 	console.log('blue');
	// }
	// else if(prop === 'normal') {
	// 	console.log('green');
	// }

	// console.log(colors[prop]);

	console.log(typeof prop);
}

var colors2 = [
	{name: 'red', rating: 5},
	{name: 'blue', rating: 3},
	{name: 'green', rating: 1},
	{name: 'pink', rating: 4}
];

for(var index = 0; index < colors2.length; index++) {
	// console.log(colors2[index].name);
	if(colors2[index].rating > 2) {
		console.log('I really like '+colors2[index].name);
	}
	else {
		console.log('I don\'t like '+colors2[index].name);
	}
}

console.log('I really like '+colors2[0].name);



// while(ready !== 'y' && ready !== 'n') {
// 	console.log('Are you ready to begin (y/n)?');
// 	ready = prompt();
// 	ready = ready.toLowerCase();
// }

// do {
// 	console.log('Are you ready to begin (y/n)?');
// 	ready = prompt();
// 	ready = ready.toLowerCase();
// } while(ready !== 'y' && ready !== 'n');


// if(ready === 'y') {
// 	console.log('you answered yes');
// }
// else {
// 	console.log('Well you better get ready then');
// }

// console.log('Are you ready to begin (y/n)?');
// var ready = prompt();

// if(ready === 'y') {
// 	console.log('What display type is a div?');
// 	var answer = prompt();
// }
// else if(ready !== 'n') {
// 	console.log('You must type in either y or n');
// 	console.log('Are you ready to begin (y/n)?');
// 	var ready = prompt();

// 	if(ready === 'y') {
// 		console.log('What display type is a div?');
// 		var answer = prompt();
// 	}
// 	else if(ready !== 'n') {
// 		console.log('You must type in either y or n');
// 		console.log('Are you ready to begin (y/n)?');
// 		var ready = prompt();
// 	}
// }