// $(document).ready(function() {

// });

// $(document).ready(onReady);

// function onReady() {
// 	console.log('I\'m ready!');
// 	var vanillaSelector = document.getElementById('text');
// 	var jquerySelector = $('#text');

// 	// console.log(vanillaSelector);
// 	// console.log(jquerySelector);
	

// 	var vanillaSelector = document.getElementsByTagName('div');
// 	var jquerySelector = $('div');

// 	console.log(vanillaSelector);
// 	console.log(jquerySelector);

// 	jquerySelector.css('color', 'red');


// 	function test() {
// 		console.log('test');
// 	}

// 	test();
// }

// document.addEventListener('DOMContentLoaded', onReady);

// function onReady() {
// 	console.log('im ready');
// }


// function onTextClick() {
// 	console.log('hey, the text was clicked');
// 	// vanillaSelector.removeEventListener('click', onTextClick);
// }

// // function changeColor() {
// // 	console.log('change color');
// // 	vanillaSelector.style.color = 'red';

// // }

// var vanillaSelector = document.getElementById('text');
// vanillaSelector.addEventListener('click', onTextClick);
// // vanillaSelector.addEventListener('click', changeColor);

// $(document).on('ready', onReady);
// $(document).ready(onReady);


// $('#text').on('click', onTextClick);
// $('#text').click(onTextClick);

// // var textBox = document.getElementById('text-box');
// // textBox.addEventListener('focus', onTextFocus);
// // textBox.addEventListener('blur', onTextBlur);


// function onReady() {
// 	console.log('im ready');
// }

// function onTextClick() {
// 	console.log('text click');
// }

// function onTextFocus() {
// 	console.log('text focus');
// }

// function onTextBlur() {
// 	console.log('text blur');
// }


// $('div').click(onDivClick);


// function onDivClick(e) {
// 	console.log('make the div red');
// 	console.log(e);
// 	$(e.target).css('color', 'red');
// }

// $('div').click(function(e) {
// 	console.log('make the div red');
// 	console.log(e);
// 	$(e.target).css('color', 'red');
// });


// $(window).keyup(onKeyUp);


// function onKeyUp(e) {
// 	if(e.which === 27) {
// 		$('#text').prepend($('div'));

// 	}
// 	console.log(e.which);
// 	console.log($(window).width());
// }

function randomStudent(students) {
	if(!(students instanceof Array)) {
		throw 'First argument must be an array.';
	}

	if(!students.length) {
		throw 'You must have at least one student.';
	}

	if(students.length%2 !== 0) {
		throw 'The number of students must be even.';
	}

	var result = [];

	do {
		var pair = [];
		var studentIndex = Math.floor(Math.random()*students.length);

		var firstStudent = students.splice(studentIndex, 1);
		pair.push(firstStudent[0]);

		studentIndex = Math.floor(Math.random()*students.length);
		var secondStudent = students.splice(studentIndex, 1);
		pair.push(secondStudent[0]);

		result.push(pair);
	} while(students.length > 0);

	return result; // Array of student pairs
}


