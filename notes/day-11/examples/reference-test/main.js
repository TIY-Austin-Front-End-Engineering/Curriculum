var testMe = {
	id: 7,
	name: 'Macbook Pro'
};

runTest(testMe);

function runTest(thing) {
	thing.id = 8;
}

console.log(testMe);


// Run this test for:
//  arrays
//  booleans
//  objects