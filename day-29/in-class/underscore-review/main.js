var example = [
	{name: 'a', desc: 'this is a test', order: 6},
	{name: 'a', desc: 'hello world test', order: 8},
	{name: 'a', desc: 'test hello', order: 1},
	{name: 'b', desc: 'face book', order: 3},
	{name: 'b', desc: 'twitter test', order: 4},
	{name: 'b', desc: 'social hello', order: 2}
];

var resultArray1 = _.sortBy(example, function(element) {
	return element.name;
});

var resultArray2 = _.sortBy(example, function(element) {
	return element.name+element.desc;
});

// resultArray.reverse();

console.log(resultArray1);
console.log(resultArray2);


var resultFilter1 = _.filter(example, function(element) {
	return element.order > 3;
});

var resultFilter2 = _.filter(example, function(element) {
	return element.desc.indexOf('hello') < 0;
});

console.log(resultFilter1);
console.log(resultFilter2);