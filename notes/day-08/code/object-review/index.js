var person1 = {};

var person2 = {
	firstName: 'Bob',
	lastName: 'Smith',
	addressLine1: '3601 South Congress Ave',
	addressLine2: 'Austin, TX 78704',
	numPets: 2
};

person1.firstName = 'Joseph';
person1.lastName = 'Acosta';

person1.addressLine1 = '7201 Essex Way';
person1.lastName = 'Acosta';
person1.addressLine2 = 'Cedar Park, TX 78613';
person1.numPets = 2;
person1.parents = ['Chris', 'Melissa'];

var pets = [
	{
		name: "Jazz",
		type: "cool",
		age: "old"
	},
	{
		name: "Ruca",
		type: "dog",
		age: 3
	},
	{
		name: "bubbles",
		type: "fish",
		age: 1
	},
	{
		name: "hammersack",
		type: "goldfish",
		age: 500
	}
];



var people = [];
people.push(person1);
people.push(person2);
console.log(person1);
console.log(person2);
console.log(people);
console.log(pets);


pets[1].age = 7;

console.log(pets);