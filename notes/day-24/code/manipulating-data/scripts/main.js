'use strict';
var React = require('react');

var testScores = [86, 73, 97, 56, 78, 88, 90];

// prevousValue   |   	newValue
// 0					86
// 86					73
// 159					97

var studentScores = [
	{ name: 'Andrea', score: 86 },
	{ name: 'Billy', score: 73 },
	{ name: 'Charles', score: 97 },
	{ name: 'David', score: 56 },
	{ name: 'Edward', score: 78 },
	{ name: 'Francis', score: 88 },
	{ name: 'Gabby', score: 90 },
];

var products = [
	{ name: 'Motorola Moto X', category: 'Electronics', price: 329.99, sellerId: 1 },
	{ name: 'Suede Classic Sneaker', category: 'Shoes', price: 119.99, sellerId: 1 },
	{ name: 'Roma Basic Sneaker', category: 'Shoes', price: 145.00, sellerId: 1 },
	{ name: 'Lightning Cable', category: 'Electronics', price: 20.00, sellerId: 2 },
	{ name: 'Learning JavaScript Design Patterns', category: 'Books', price: 18.11, sellerId: 2 },
	{ name: 'GEL-Cumulus 16 Running Shoe', category: 'Shoes', price: 200.00, sellerId: 2 },
	{ name: 'Dual USB Car Phone Charger', category: 'Electronics', price: 7.0, sellerId: 3 },
	{ name: 'The Principles of Object-Oriented JavaScript', category: 'Books', price: 15.96, sellerId: 3 },
	{ name: 'JavaScript: The Good Parts', category: 'Books', price: 17.69, sellerId: 3 },
	{ name: 'USB Desktop Rapid Charger', category: 'Electronics', price: 30.00, sellerId: 3 }
];

var productSellers = [
	{productId: 1, sellerId: 1},
	{productId: 1, sellerId: 2},
];

var sellers = [
	{ id: 1, name: 'Amazon', location: 'The Internet', rating: 4.5 },
	{ id: 2, name: 'Tech Armor', location: 'The Web', rating: 3.2 },
	{ id: 3, name: 'O\'Reiley', location: 'A Place', rating: 5 }
];

// map
// filter
// find / findWhere
// reduce

var formattedTestScores = testScores.map(function(score) {
	return (score + '%');
});

var htmlScores = studentScores.map(function(student) {
	return '<div>'+student.name+' - '+student.score + '</div>';
});

var subsetOfStudents = studentScores.filter(function(student) {
	return (student.score < 80);
});

var electronics =
products
.filter(function(product) {
	return product.category === 'Electronics';
})
.map(convertToJSX);

function convertToJSX(product) {
	return (
		<div>
			<div>{product.name}</div>
			<div>{product.category}</div>
			<div>{product.price}</div>
		</div>
	);
}

function myMap(a, iteree) {
	var newArray = [];
	for(var i=0; i < a.length; i++) {
		var newEl = iteree(a[i]);
		newArray.push(newEl);
	}
	return newArray;
}

function myFilter(a, iteree) {
	var newArray = [];
	for(var i=0; i < a.length; i++) {
		var passesFilter = iteree(a[i]);
		if(passesFilter) {
			newArray.push(a[i])
		}
	}
	return newArray;
}

function myReduce(a, iteree, initialValue) {
	var currentValue = initialValue;
	for(var i=0; i < a.length; i++) {
		currentValue = iteree(currentValue, a[i]);
	}
	return currentValue;
}

var summedScores = testScores.reduce(function(previousValue, newValue) {
	return previousValue + newValue;
}, 0);


var summedScores = myReduce(testScores, function(previousValue, newValue) {
	return previousValue + newValue;
}, 0);

// console.log(summedScores/testScores.length);

var productHTML = products.map(function(product) {
	var seller = sellers.find(function(s) {
		return (s.id === product.sellerId)
	});
	return '<div>'+product.name+':'+product.price+':'+product.category+':'+seller.name+'</div>';
});

console.log(productHTML);

