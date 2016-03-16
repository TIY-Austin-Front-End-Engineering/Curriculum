console.log('this is working');


// 1. Select the element(s) I want to
// listen for events on
var catInput = document.querySelector('.my-cat-input')
var gif = document.querySelector('img');
console.log(catInput.value);
console.log(gif);

// 2. Add the event listener
// (listen for the event)
catInput.addEventListener('keyup', kittyChecker);

// 3. Create a function to run
// when that event happens
function kittyChecker() {
	// console.log('key up', catInput.value);
	// check that what they typed in
	// is equal to the string cat
	if(catInput.value === 'cat') {
		console.log('success!');
		gif.style.display = 'block';
	}
	else {
		gif.style.display = 'none';
	}
}