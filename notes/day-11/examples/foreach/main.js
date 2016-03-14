// var me = 'Aaron Larner';

// greeting(me);
// greeting('jen');
// greeting('mory');
// greeting('anna');

// 		 // greeting('anna');
// function greeting(name) {
// 	console.log('Hello '+name);
// }


// var numberOfChildren = [1, 2, 3, 4];
// var bananas = ['green', 'yellow', 'brown'];
// var fruit = ['bananas', 'apples', 'oranges'];

// var lessFruit = fruit.slice(1, 2);

// console.log(lessFruit.toString(), ['apples'].toString());
// console.assert(lessFruit.toString() === ['apples'].toString());

// function grandchildren(numberOfChildren) {
// 	console.log('You will probably have '+(numberOfChildren*2.5)+' grandchildren');
// }

// function monkeysFavorite(bananaColor) {
// 	console.log('The monkey likes '+bananaColor+' bananas');
// }

// function doILikeThisFruit(fruit) {
// 	if(fruit.charAt(0) === 'a') {
// 		console.log('I like '+fruit);
// 	}
// 	else {
// 		console.log('I don\'t like '+fruit);
// 	}
// }

// iterate(numberOfChildren, grandchildren);
// iterate(numberOfChildren, monkeysFavorite);


// function iterate(array, callback) {

// 	// array.forEach(callback);

// 	// 1. Iterate over the array
// 	for(var i=0; i<array.length; i++) {
// 		// 2a. store the current element in a variable
// 		var currentElement = array[i];
// 		// 2b. run my callback on that element
// 		callback(currentElement);

// 	}
// }




var odds = [1, 3, 7, 13, 5];
var evens = [];

function addOne(element, index, array) {
	array[index] = element+1;
}

odds.forEach(addOne);
console.log(odds);














