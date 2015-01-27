[Table of Contents](/day-15/README.md)

# Day 15 Quiz
### For each of the code snippets below, write down what is output to the console.

## 1.
```js
console.log(4 > 1);
```
## 2.
```js
if(5 === '5') {
  console.log("This code is executed");
}
else if(5 == '5') {
	console.log("That code is executed");
}
else {
	console.log("Did I get here?");
}
```

## 3.
```js
console.log(1+'2');
```

## 4.
```js
console.log(parseInt('123a'));
```

## 5.
```js
console.log(typeof Math.random());
```

## 5.
```js
var computers = ['Apple', 'Dell', 'HP', 'Sony'];
for(var x=0; x<computers.length; x++) {
	console.log(computers[x]+' is a company.');
}
```

## 6.
```js
var names = ['Aaron', 'Elizabeth', 'Abigial', 'Richard'];
var ages = [28, 26, 25, 27];
for(var i=0; i<names.length; i++) {
	console.log(names[i]+' is '+ages[i]+' years old.');
}
```

## 7.
```js
var pets = ['Sammy', 'Whiskers', 'Domino', 'Spanky', 'Monty'];
while(pets.length) {
	console.log(pets.pop());
}
```

## 8.
```js
var movies = [
	{Title: 'Star Wars Episode IV', Genre: 'Sci-Fi'},
	{Title: 'Toy Story', Genre: 'Animated'},
	{Title: 'Toy Story II', Genre: 'Animated'}
];
function makeRow(row) {
	return '<tr><td>'+row.Title+'</td><td>'+row.Genre+'</td></tr>';
}
for(var i in movies) {
	console.log(makeRow(movies[i]));
}
```