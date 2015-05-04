(function() {
	// function cat() {
	// 	this.name = 'Sammy';
	// 	this.color = 'Gray';
	// 	this.breed = 'Liger';
	// }

	// var cat1 = new cat();
	// var cat2 = new cat();
	// var cat3 = new cat();
	// var cat4 = new cat();

	// cat1.name = 'Whiskers';

	// console.log(cat1, cat2, cat3, cat4);

	// var cat1 = {
	// 	name: 'Sammy',
	// 	color: 'Gray',
	// 	breed: 'Liger'
	// };
	// var cat2 = {
	// 	name: 'Sammy',
	// 	color: 'Gray',
	// 	breed: 'Liger'
	// };
	// var cat3 = {
	// 	name: 'Sammy',
	// 	color: 'Gray',
	// 	breed: 'Liger'
	// };
	// var cat4 = {
	// 	name: 'Sammy',
	// 	color: 'Gray',
	// 	breed: 'Liger',
	// 	meow: function() {

	// 	}
	// };

	// function cat(name, color, breed) {
	// 	var spayed = false;

	// 	this.name = name;
	// 	this.color = color;
	// 	this.breed = breed;
	// 	this.habits = [
	// 		'sleeping',
	// 		'eating',
	// 		'pooping'
	// 	];
	// 	this.meow = function() {
	// 		console.log('meooow!!');
	// 	};
	// 	this.isSpayed = function() {
	// 		return spayed;
	// 	}

	// 	return 'hello';
	// }

	// var cat1 = new cat('Sammy', 'Gray', 'Liger');
	// var cat2 = new cat('Whiskers', 'Orange', 'Bagle');
	// var cat3 = new cat('Merlin', 'Black', 'Tabby');
	// var cat4 = new cat('Chester', 'Blue', 'Cheshire');

	// console.log(cat1, cat2, cat3, cat4);


	// var whatIsThis = cat('Jimmy', 'Purple', 'Human');

	// console.log(whatIsThis);
	// console.log(cat1.isSpayed());

	// function person(firstName, lastName, type) {
	// 	var password = 'password123';

	// 	this.firstName = firstName;
	// 	this.lastName = lastName;
	// 	this.type = type;
	// 	this.fullName = this.firstName + ' '+ this.lastName;
	// 	this.fullNameFunc = function() {
	// 		return this.firstName + ' ' + this.lastName;
	// 	};

	// 	this.authenticate = function(guess) {
	// 		return (guess === password);
	// 	};
	// }

	// var aaron = new person('Aaron', 'Larner', 'Instructor');

	// var character1 = {
	// 	a: 'hello',
	// 	b: false,
	// 	c: 12.5,
	// 	d: [1, 2, 3],
	// 	e: { a: 'world' },
	// 	f: function(a, b) {
	// 		console.log(a, b);
	// 	}
	// };

	// var character2 = {
	// 	a: 'hello',
	// 	b: false,
	// 	c: 12.5,
	// 	d: [1, 2, 3],
	// 	e: { a: 'world' },
	// 	f: function(a, b) {
	// 		console.log(a, b);
	// 	}
	// };

	function characterBlueprint(name, characterClass, agility, strength, intelligence) {
		if(_.isUndefined(agility)) agility = 0;
		if(_.isUndefined(strength)) strength = 0;
		if(_.isUndefined(intelligence)) intelligence = 0;

		this.name = name;
		this.characterClass = characterClass;
		this.agility = agility;
		this.strength = strength;
		this.intelligence = intelligence;
		this.swing = function() {
			console.log('Swinging...');
			var random = Math.random();
			if(random < 0.3) {
				console.log('Slice!');
				return true;
			}
			else if(random < 0.6) {
				console.log('Swoosh!');
				return false;
			}
			else {
				console.log('Smash!');
				return true;
			}
		}
	};

	var blahCharacter = new characterBlueprint('Blah', 'Blob');

	var vanillaCharacter = {
		name: 'Blah',
		characterClass: 'Blob'
	}

	console.log(vanillaCharacter === characterBlueprint);
	// var myObject2 = new myObjectBlueprint(1, 2, 3, 4, 5);
	console.log(blahCharacter.constructor === characterBlueprint);
	// myObject1.swing()

	// console.log(myObject);
	// console.log(myObject.f('hi', 'there'));

})();