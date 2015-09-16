'use strict';

$(document).ready(function() {
	var $form = $('form');
	var $email = $('#email');
	var $password = $('#password');

	var users = [
		{ email: 'aaron@theironyard.com', password: 'password123' },
		{ email: 'admin@google.com', password: 'pandas' },
		{ email: 'test@test.com', password: 'honeycrisp' }
	];

	$form.submit(function(e) {
		e.preventDefault();

		$('.error').text('');

		var emailString = $email.val();
		var passwordString = $password.val();
		var userFound = false;

		if(!emailString) {
			$('.error.email').text('You must enter your email address');
			return;
		}
		if(!passwordString) {
			$('.error.password').text('You must enter a password');
			return;
		}

		users.forEach(function(user, index) {
			if(user.email === emailString && user.password === passwordString) {
				userFound = true;
			}
		});

		if(userFound) {
			window.location = 'http://theironyard.com';
		}
		else {
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