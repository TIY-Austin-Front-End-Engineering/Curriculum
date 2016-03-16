var aaron = {
	eatNutella: function() {
		console.log('yum yum yum');
	}
};

// var border1 = 0;
// function addBorder1() {
// 	border1 += 100;
// }
// addBorder1();
// console.log(border1); // 100


// function addBorder2() {
// 	var border2 = 100;
// }
// addBorder2();
// console.log(border2); // ReferenceError: border2 is not defined


// function addBorder3() {
// 	var border = 100;
// 	return border;
// }
// var border3 = addBorder3();
// console.log(border3);


// function addBorder4() {
// 	var border1 = 500;
// 	return border1;
// }
// var border4 = addBorder4();
// console.log(border4); // 500
// console.log(border1); // 100

function addBorder() {
	var border = 7;

	var increaseBorder = function() {
		border += 10;
	}
	increaseBorder();
	console.log(border);
}

addBorder();

console.log(border);

increaseBorder();

// Self invoked function
(function(value) {
	var aaron = value;
})(12.99);

aaron.eatNutella();















