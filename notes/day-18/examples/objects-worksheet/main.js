var person1 = {};

var person2 = {
	firstName: 'Bob',
	lastName: 'Smith',
	addressLine1: '3601 South Congress Ave',
	addressLine2: 'Austin, TX 78704',
	numPets: 2
}};

person1.firstName = 'Aaron';
person1.lastName = 'Larner';
person1.addressLine1 = '2303 East Side Dr.';
person1.addressLine2 = 'Austin, TX 78704';
person1.numPets = 0;
person1.parents = ['Veronica', 'Andy'];

var people = [];
people.push(person1);
people.push(person2);

people.forEach(function(person) {
	console.log(person.firstName, person.lastName);
});

var pets = [
	{
		name: 'Sammy',
		type: 'cat',
		age: 17
	},
	{
		name: 'Whiskers',
		type: 'cat',
		age: 18
	},
	{
		name: 'Domino',
		type: 'dog',
		age: 3
	},
	{
		name: 'Junior',
		type: 'cat',
		age: 1
	},
	{
		name: 'Pearl',
		type: 'panda',
		age: 4
	}
];

pets.forEach(function(pet) {
	if(pet.type === 'dog') {
		console.log(pet.name);
	}
});

pets.filter(function(pet) {
	return pet.age > 4;
}).forEach(function(pet) {
	console.log(pet.name);
});

pets[1].age = 7;