/*
// 1.
var toggle = document.querySelector('.toggle');

// 2. click
toggle.addEventListener('click', onToggleClick);
// or
// document
// .querySelector('.toggle')
// .addEventListener('click', function(e) {

// })

// 3. function
var on = true;
var tealElement = document.querySelector('.on');
var redElement = document.querySelector('.off');
function onToggleClick(e) {
	// METHOD 1:

	// console.log("there was a click");
	// var on = document.querySelector('.on');
	// var off = document.querySelector('.off');

	// on.classList.remove('on');
	// on.classList.add('off');

	// off.classList.remove('off');
	// off.classList.add('on');


	// METHOD 2:
	// var images = document.querySelectorAll('.toggle img');
	
	// for(var i=0; i<images.length; i++) {
	// 	images[i].classList.toggle('on');
	// 	images[i].classList.toggle('off');
	// }


	// METHOD 3:
	if(on) {
		tealElement.style.display = 'none';
		redElement.style.display = 'block';
	}
	else {
		redElement.style.display = 'none';
		tealElement.style.display = 'block';
	}
	on = !on;

}
*/

// var qs = document.querySelector;

$('.toggle').on('click', function(e) {
	var $images = $('.toggle img');
	$images.toggleClass('on');
	// $images.toggleClass('off');
});
// $('.toggle').click(function(e) {

// })


































