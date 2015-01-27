(function() {
	var people = [
		{firstName: 'Aaron', lastName: 'Larner', type: 'Instructor'},
		{firstName: 'Alex', lastName: 'Hidalgo', type: 'Student'},
		{firstName: 'Charlie', lastName: 'Lueker', type: 'Student'},
		{firstName: 'Daniel', lastName: 'St. Clair', type: 'Student'},
		{firstName: 'Erika', lastName: 'Moller', type: 'Student'},
		{firstName: 'Gabe', lastName: 'Rubio', type: 'Student'},
		{firstName: 'Hughie', lastName: 'Devore', type: 'Student'},
		{firstName: 'Jacob', lastName: 'Burkhart', type: 'Student'},
		{firstName: 'Justin', lastName: 'Herrick', type: 'Instructor'},
		{firstName: 'Katlyn', lastName: 'Whittenburg', type: 'Campus Director'},
		{firstName: 'Nathan', lastName: 'Hall', type: 'Teaching Assistant'},
		{firstName: 'Paul', lastName: 'Kokoszyna', type: 'Student'},
		{firstName: 'Ryan', lastName: 'Luedecke', type: 'Student'},
		{firstName: 'Sam', lastName: 'Kapila', type: 'Instructor'},
		{firstName: 'Travis', lastName: 'Czerw', type: 'Student'}
	];

	// _.forEach(people, eachPerson)

	// function eachPerson(person) {
	// 	console.log(person);
	// }


	var tiy = {
		forEach: function(array, cb) {
			for(var i in array) {
				cb(array[i]);
			}
		},
		filter: function(array, cb) {
			var results = [];
			for(var i in array) {
				var result = cb(array[i]);
				if(result === true) {
					results.push(array[i]);
				}
			}
			return results;
		},
		map: function(array, cb) {
			var results = [];
			for(var i in array) {
				results.push(cb(array[i]));
			}
		}
	};

	// tiy.forEach(people, eachPerson);
	// tiy.forEach(people, personFirstName);

	// function eachPerson(person) {
	// 	console.log(person);
	// }

	// function personFirstName(person) {
	// 	console.log(person.firstName);
	// }

	// // // Lodash longhand
	// function isStudent(person) {
	// 	if(person.type === 'Student') {
	// 		return true;
	// 	}
	// 	else if(person.type !== 'Student') {
	// 		return false;
	// 	}
	// }

	// // var students = _.filter(people, isStudent);


	// // // Custom code
	// var results = [];
	// for(var i in people) {
	// 	if(people[i].type === 'Student') {
	// 		results.push(people[i]);
	// 	}
	// }

	// console.log(results);

	// // Lodash shorthand

	// var students = _.filter(people,
	// 	function(person) {
	// 		return (person.type === 'Student');
	// 	}
	// );
	// console.log(students);


	var names = _.map(people, function(person) {
		return {
			name: person.firstName+' '+person.lastName,
			type: person.type
		};
	});

	console.log(names);


	var sums = [
		[1, 2],
		[7, 2.7],
		[19, 0.5],
		[-1, 26],
		[17, 93],
		[5, 12],
	];

	var result = _.map(sums, function(n) {
		return n[0]+n[1];
	});
	console.log(result);




})();