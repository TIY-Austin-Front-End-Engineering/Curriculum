'use strict';
var yourName = prompt('What is your name?');
console.log(yourName);

var allh1s = document.querySelectorAll('h1');
var fancyh1s = document.querySelectorAll('.fancy-h1');

console.log(allh1s);

for(var i = 0; i < allh1s.length; i++) {
	allh1s[i].innerHTML = yourName;
}

// var nameH1 = document.getElementById('name-goes-here');

// console.log(nameH1);
// console.log(typeof nameH1);
// console.log(nameH1.id);

// nameH1.innerHTML = yourName;