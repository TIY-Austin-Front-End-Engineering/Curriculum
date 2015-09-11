'use strict';

// var header = document.getElementById('change-me');
// console.log(header);

// var header2 = document.querySelector('#change-me');
// console.log(header2);

// var header3 = document.querySelectorAll('#change-me');
// console.log(header3);

// var anchorsInNav = document.querySelectorAll('nav > a');
// console.log(anchorsInNav);

// header.style.color = 'rgba(0, 0, 255, 0.7)';

// ------------

// var Gabriel = document.getElementById('gabriel');
// var Mory = document.getElementById('mory');

// function Noel() {
// 	Mory.standUp('politely');
// }

// Gabriel.addEventListener('high five', Noel);

// ------------

var historyArray = [];
var benjamin = document.getElementById('benjamin');
var most = document.getElementById('most');
var label = document.getElementById('label');
var animals = document.getElementById('animals');

var count = 0;

var changeMost = function() {
	count++;
	var foo = count + ' ' + label.value;
	benjamin.innerHTML = foo;
	historyArray.push(foo);
	console.log(historyArray);
};

benjamin.addEventListener('click', changeMost);


// Step 1: Target the element
var reset = document.getElementById('reset');

// Step 2: Create the function
function doReset() {
	label.value = 'Likes';
	most.innerHTML = 'Label was reset';
	most.style.textDecoration = 'underline';
}

// Step 3: Add event listener
reset.addEventListener('click', doReset);



