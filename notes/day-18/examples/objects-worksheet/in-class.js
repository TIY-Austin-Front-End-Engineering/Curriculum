var person1 = {};

var person2 = {
	name: {
		firstName: 'Bob',
		lastName: 'Smith'
	},
	addressLine1: '3601 South Congress Ave.',
	addressLine2: 'Austin, TX 78704',
	numPets: 2
};

// person1.firstName = 'Aaron';
// person1.lastName = 'Muela';
person1.name = {
	firstName: 'Aaron',
	lastName: 'Muela'
}
person1.addressLine1 = '3601 South Congress Ave.';
person1.addressLine2 = 'Austin, TX';
person1.numPets = 2;
person1.parents = ['Mike', 'Barb'];
var people = [];
people.push(person1);
people[1] = person2;
people.push({
	name: {
		firstName: 'Obi-wan',
		lastName: 'Kenobi'
	}
});

//function          (element, index, array)
// function displayName(person, anythingRandom, allPeople) {
// 	console.log(anythingRandom+1, person.firstName, person.lastName);
// 	allPeople[anythingRandom].firstName = 'Aaron';
// }

// people.forEach(displayName);


for(var i=0; i<people.length; i++) {
	console.log(i+1, people[i].name['firstName'], people[i].name.lastName);
}

// console.log(person1);















