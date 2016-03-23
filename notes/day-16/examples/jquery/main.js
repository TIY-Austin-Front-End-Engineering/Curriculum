var h = document.getElementById('heading');
var otherH = document.querySelector('.foo');
var otherOtherH = document.querySelector('h1');
var otherOtherOtherH = document.querySelector('#heading');

// var qs = document.querySelector;
// var shortH = qs('#heading');

var jqueryH = $('.foo');
var jqueryOtherH = $('h1');
var jqueryOtherOtherH = $('#heading');

// h.style.color = 'red';
jqueryH.css('color', 'red');
jqueryH.css({
	color: 'blue',
	fontWeight: 'bold',
	textDecoration: 'underline'
});

// h.addEventListener('click', function() {
// 	console.log('the element is clicked');
// });

jqueryH.on('click', function() {
	console.log('the element was clicked');
});
