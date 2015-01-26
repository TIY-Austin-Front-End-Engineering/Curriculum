function createPerson(l, f, a) {
	// console.log(a, b, c);
	// console.log(firstName, lastName, age);

	// c -= 70;
	// age1 += 1;

	// console.log(a, b, c);

	return {
		firstName: f,
		lastName: l,
		age: a,
		friends: ['Bob', 'Sue', 'Liz']
	};
}

// var firstName1 = 'Aaron';
// var lastName1 = 'Larner';
// var age1 = 99;

// createPerson(firstName1, lastName1, age1);

// console.log(age1);


// setInterval(onTick, 1000, 7);

// function onTick(num) {
// 	console.log(num);
// }

// function createOnTick(startingPoint) {
// 	var onTick = function() {
// 		startingPoint++;
// 	}
// 	return onTick;
// }

// setInterval(createOnTick(10), 1000);