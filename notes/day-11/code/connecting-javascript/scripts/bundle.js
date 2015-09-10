(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var yourName = prompt('What is your name?');
console.log(yourName);

var allh1s = document.querySelectorAll('h1');
var fancyh1s = document.querySelectorAll('.fancy-h1');

console.log(allh1s);

for (var i = 0; i < allh1s.length; i++) {
	allh1s[i].innerHTML = yourName;
}

// var nameH1 = document.getElementById('name-goes-here');

// console.log(nameH1);
// console.log(typeof nameH1);
// console.log(nameH1.id);

// nameH1.innerHTML = yourName;

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map