// Example of a "method" - a function on (or inside of) an object
var aaron = {
	eatNutella: function() {
		console.log('yum yum yum');
	}
};

// 1. Search through the DOM
// and find the header element
var headingEl = document.querySelector('h1');
// console.log(typeof headingEl);

// 2. Fix the text in the header
// element to be correct
headingEl.innerHTML = 'I LOOOOVE!!! JavaScript!!!';
headingEl.style.color = 'red';
headingEl.style.backgroundColor = 'black';


// 1. Target the element we're trying to listen
// for the event on
var ben = document.querySelector('.benjamin');
var border = 0;
console.log(ben);

// 2. Tell a function to run when that event happens
ben.addEventListener('click', sayHello);
ben.addEventListener('click', addBorder);

// setInterval(addBorder, 50);


// 3. Create the function 
function sayHello() {
	console.log('Hello, my name is Ben');
}


function addBorder() {
	border = border + 5;
	headingEl.style.borderTop = border+'px solid blue';
}


// Another example: run addBorder every 500ms















































