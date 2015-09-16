(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
	var $form = $('form');
	var $email = $('#email');
	var $password = $('#password');

	var users = [{ email: 'aaron@theironyard.com', password: 'password123' }, { email: 'admin@google.com', password: 'pandas' }, { email: 'test@test.com', password: 'honeycrisp' }];

	$form.submit(function (e) {
		e.preventDefault();

		$('.error').text('');

		var emailString = $email.val();
		var passwordString = $password.val();
		var userFound = false;

		if (!emailString) {
			$('.error.email').text('You must enter your email address');
			return;
		}
		if (!passwordString) {
			$('.error.password').text('You must enter a password');
			return;
		}

		users.forEach(function (user, index) {
			if (user.email === emailString && user.password === passwordString) {
				userFound = true;
			}
		});

		if (userFound) {
			window.location = 'http://theironyard.com';
		} else {
			$('.error.password').text('Invalid username and/or password');
		}
	});
});

// $button.on('click', function(){
// 	..
// })

// $button.click(function(){
// 	..
// })

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map