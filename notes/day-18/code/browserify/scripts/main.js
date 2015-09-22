'use strict';

var $ = require('jquery');
var myFunctions = require('./functions.js');

$('body').append('<h1>hello</h1>');


console.log(myFunctions.largest(7, 3));
console.log(myFunctions.smallest(7, 3));