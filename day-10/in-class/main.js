var person = {
  name: 'Aaron',
  age: 28,
  address: {
    streetName: '1400 Rio Grande St.',
    zip: 78701,
    city: 'Austin',
    state: 'TX'
  },
  i: 'test',
  birthday: function() {
  	person.age++;
  }
};

// for(var i=0; i<myArray.length; i++) {

// }

for(var i in person) {
	console.log(i, person[i]);
}

var person1 = {name: 'Aaron'};
var person2 = {name: 'Bob'};

var myArray = [
  person1,
  person2
];

for(var i in myArray) {
	console.log(myArray[i]);
}