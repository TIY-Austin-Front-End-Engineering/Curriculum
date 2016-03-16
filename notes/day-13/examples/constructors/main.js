// var myObject = {
// 	key1: 'value1',
// 	key2: 'value2'
// 	// ...
// };

// var currentDate = new Date();


// function Car(color) {
// 	this.color = color;
// 	this.make = 'Honda';
// }

// var blueHonda1 = new Car('Purple');
// var blueHonda2 = new Car();
// var blueHonda3 = new Car();

// console.log(blueHonda1);

// function Bike(color, speed) {
// 	this.numWheels = 2;
// 	this.color = color || 'Blue';
// 	this.speed = speed || 5;
// 	this.ride = function() {
// 		if(this.speed < 10) {
// 			console.log('Umpf!!');
// 		}
// 		else {
// 			console.log('Wheeee!@');
// 		}
// 	}
// }
// // var userColor = prompt('Katy, what color would you like your bike to be?');

// var katysBike = new Bike('Fancy');
// var haythemsBike = new Bike('Black', 20);
// // katysBike.color = 'Blue'
// console.log(katysBike.color);
// console.log(haythemsBike.color);
// katysBike.ride();
// haythemsBike.ride();

function Product(name, price, materials) {
	this.name = name || 'Unknown';
	this.price = price || 100;
	this.materials = materials || [];
	// Input: material that I'm looking for
	// Output: boolean true / false
	this.hasMaterial = function(searchMaterial) {
		// Method 1
		return (this.materials.indexOf(searchMaterial) !== -1);

		// Method 2
		// if(this.materials.indexOf(searchMaterial) !== -1) {
		// 	return true;
		// }
		// else {
		// 	return false;
		// }

		// Method 3
		// get list of materials for this object
		// var matchingMaterials = this.materials.filter(function(currentMaterial) {
		// 	if(searchMaterial === currentMaterial) {
		// 		return true;
		// 	}
		// 	else {
		// 		return false;
		// 	}
		// });
		// // return true if the given material appears in that list
		// if(matchingMaterials.length > 0) {
		// 	return true;
		// }
		// // return false if it doesn't
		// else {
		// 	return false;
		// }
	}

}

var product1 = new Product('Ikea Table', 100, ['wood', 'chrome', 'plastic']);

console.log(product1.hasMaterial('plastic'));
console.log(product1.hasMaterial('silver'));



























