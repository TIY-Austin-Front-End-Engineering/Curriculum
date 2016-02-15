'use strict';

function Animal() {
	this.x = 0;
	this.y = 0;
	this.numLegs = 4;
	this.numToes = 5;

	this.move = function(x, y) {
		this.x = x;
		this.y = y;
	};
};

function Cat() {
	this.cutenessFactor = 100;
}

Cat.prototype = new Animal();

function Tabby() {
	this.numToes = 6;
}

Tabby.prototype = new Cat();

var sammy = new Tabby();
console.log(sammy);

// sammy.move(3, 5);
// console.log(sammy);


// function greeting(prefix, suffix) {
// 	if(!this) {
// 		throw 'Greeting must be called with "this"';
// 	}
// 	return prefix+' '+this.firstName+' '+suffix;
// }

// var person = {
// 	firstName: 'Aaron',
// 	lastName: 'Larner'
// };

// var greetingArgs = [
// 	'Goodbye',
// 	'Have a nice day'
// ]

// var message = greeting();
// // var message = greeting.call(person, 'Goobye', 'Have a nice day');
// // var message = greeting.apply(person, greetingArgs)

// console.log(message);

function Event() {
	this.on = function(eventName, triggerFunction) {

	};

	this.trigger = function(eventName) {

	};
}


function Model() {
	this.attributes = {};
	this.set = function(propname, propvalue) {
		this.attributes[propname] = propvalue;
	};

	this.get = function(propname) {
		return this.attributes[propname] || null;
	};
}

Model.prototype = new Event();

function UserModel() {
	this.attributes = {
		userId: null,
		username: '',
		teacher: false
	};
}

UserModel.prototype = new Model();

var aaron = new UserModel();