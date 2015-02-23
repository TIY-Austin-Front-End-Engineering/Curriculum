angular.module('basic.services', [])
.factory('Test', function() {
	return 'A test factory';
})
.factory('Foo', function() {
	return ['a', 'test', 'factory'];
})
.factory('Bar', function() {
	return {
		prop1: 'a',
		prop2: 'test',
		prop3: 'factory'
	};
})
.factory('RandomNumber', function() {
	return function(min, max, forceInt) {
		if(typeof min !== 'number' || isNaN(min))
			throw 'min must be a number';
		if(typeof max !== 'number' || isNaN(max))
			throw 'max must be a number';

		var rand = Math.random();
		var range = (max - min);
		var num = rand*range + min;

		if(forceInt) {
			num = Math.floor(num);
		}
		return num;
	};
})
.factory('GeneratePassword', function(RandomNumber) {
	return function(length) {
		var password = '';
		var charCode;

		for(var i=0; i<length; i++) {
			charCode = RandomNumber(32, 126, true);
			password += String.fromCharCode(charCode);
		}
		return password;
	};
})
.factory('User', function(GeneratePassword) {
	return function() {
		this.username = '';
		this.password = GeneratePassword(16);
		this.greeting = function() {
			return 'Hello, ' + username;
		};

		this.checkPassword = function(guess) {
			return guess === this.password;
		}
	};
});