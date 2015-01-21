
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
// 	if(!leftMargin) {
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

animateMe.addEventListener('dblclick', onRedBoxClick);


function onRedBoxClick() {
	console.log(animateMe);
	if(animateMe.style.backgroundColor === 'red') {
		animateMe.style.backgroundColor = 'black';
	}
	else {
		animateMe.style.backgroundColor = 'red';
	}
	
}