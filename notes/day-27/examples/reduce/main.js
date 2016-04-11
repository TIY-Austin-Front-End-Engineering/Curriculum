var products = [
	{
		id: '13947627834',
		name: 'aaa',
		price: 100
	},
	{
		id: '94873589',
		name: 'bbb',
		price: 4
	},
	{
		id: '34875934',
		name: 'ccc',
		price: 12
	},
	{
		id: '102983984375',
		name: 'ddd',
		price: 15
	}
];

// var result = products.reduce(function(prevousValue, currentValue, index, array) {
// 	prevousValue[currentValue.id] = currentValue;
// 	return prevousValue;
// }, {})

// console.log(result['13947627834']);

var totalCost = products.reduce(function(previousValue, currentValue, index, array) {
	return previousValue + currentValue.price;
}, 0);


