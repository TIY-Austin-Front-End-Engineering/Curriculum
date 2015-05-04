
// for(var i=0; i<300; i++) {
// 	animateMe.style.marginLeft = i+'px';
// }

/* Why doesn't this work? */
// function moveLeft() {
// 	var animateMe = document.getElementById('animate-me');
// 	console.log(animateMe.style);
// 	console.log(animateMe.style.marginLeft);
// }

// function moveRight() {
// 	var animateMe = document.getElementById('animate-me');
// 	var leftMargin = parseInt(animateMe.style.marginLeft);
// 	if(Boolean(leftMargin) === false) {
// 		leftMargin = 0;
// 	}
// 	leftMargin += 1;
// 	animateMe.style.marginLeft = leftMargin+'px';

// 	if(leftMargin > 500) {
// 		clearInterval(intervalId);
// 		invervalId = setInterval(moveLeft, 10);
// 	}
// }

// function moveLeft() {
// 	var animateMe = document.getElementById('animate-me');
// 	var leftMargin = parseInt(animateMe.style.marginLeft);
// 	if(!leftMargin) {
// 		leftMargin = 0;
// 	}
// 	leftMargin -= 1;
// 	animateMe.style.marginLeft = leftMargin+'px';

// 	if(leftMargin <= 0) {
// 		clearInterval(intervalId);
// 	}
// }

// var intervalId = setInterval(moveRight, 10);

var animateMe = document.getElementById('animate-me');
// animateMe.innerHTML = 'this is a test';

// animateMe.addEventListener('dblclick', onRedBoxClick);


// function onRedBoxClick() {
// 	var colors = [50, 50, 50];
// 	var color = 'rgb('+colors.join(',')+')';
// 	console.log(color);
// 	animateMe.style.backgroundColor = color;
// 	if(animateMe.style.backgroundColor === 'red') {
// 		animateMe.style.backgroundColor = 'black';
// 	}
// 	else {
// 		animateMe.style.backgroundColor = 'red';
// 	}
	
// }


// var currentDate = new Date();
// console.log(currentDate);

// for(var i in currentDate.p) {
// 	console.log(i);
// }