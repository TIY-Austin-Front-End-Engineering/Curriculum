'use strict';

import AppComponent from './components/AppComponent';
import React from 'react'; // var React = require('react');
import ReactDOM from 'react-dom'; // var ReactDOM = require('react-dom');

class Animal {

	constructor() {
		console.log('before constructor has run', this);
		this.x = 0;
		this.y = 0;
		this.numLegs = 4;
		this.numToes = 5;
		console.log('after constructor has run', this);
	}
	
	move(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Cat extends Animal {
	constructor() {
		super();
		this.cutenessFactor = 100;
	}
}

class Tabby extends Cat {
	constructor() {
		super();
		this.numToes = 6;
	}
}

var sammy = new Tabby();
console.log(sammy);

var greeting = 'Hello';

var template = `
	<div class="test">
		<label>
			<div>${greeting}</div>
			<input type="text" />
		</label>
	</div>
`;

console.log(template);

var url = '2015-august-group-project-retrospective-253';
var pieces = url.split('-');
// console.log(pieces);
// var year = pieces[0];
// var month = pieces[1];
// var id = pieces[pieces.length-1];

var [year, month, , , , id] = pieces;

var object = {
	firstName: 'Josiah',
	lastName: 'Allen'
};

var {firstName, lastName} = object;

console.log(firstName, lastName);

console.log(year);
console.log(month);
console.log(id);

// let x = null;
// if(true) {
// 	x = 1;
// }
// else {
// 	x = 2;
// }

// for(let i=0; i<10; i++) {

// }

// console.log(i, _i);

console.log(pi);

const pi = 3.1415;

ReactDOM.render(<AppComponent />, document.body);

// pi = 4;

// console.log(id);
// function Event() {
// 	this.on = function(eventName, triggerFunction) {

// 	};

// 	this.trigger = function(eventName) {

// 	};
// }


// function Model() {
// 	this.attributes = {};
// 	this.set = function(propname, propvalue) {
// 		this.attributes[propname] = propvalue;
// 	};

// 	this.get = function(propname) {
// 		return this.attributes[propname] || null;
// 	};
// }

// Model.prototype = new Event();

// function UserModel() {
// 	this.attributes = {
// 		userId: null,
// 		username: '',
// 		teacher: false
// 	};
// }

// UserModel.prototype = new Model();

// var aaron = new UserModel();