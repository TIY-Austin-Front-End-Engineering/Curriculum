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

_.each(people, function(person) {
	console.log(person.firstName);
});

var newPeople = _.map(people, function(person) {
	return {
		fullName: person.firstName+' '+person.lastName,
		type: person.type
	}
});

console.log(newPeople);

var studentsOnly = _.filter(people, function(person) {
	return person.type === 'Student';
});

console.log(studentsOnly);