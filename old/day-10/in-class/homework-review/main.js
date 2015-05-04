"use strict";

var randomRange = function(min, max) {
	if(typeof min !== 'number') {
		throw 'Min must be a number';
	}
	if(typeof max !== 'number') {
		throw 'Max must be a number';
	}
	if(min > max) {
		throw 'Max must be greater than or equal to min.';
	}

	return Math.random() * (max - min) + min;
}

function randomElement(myArray) {
	if(myArray === undefined) {
		throw 'You must enter an array for the first argument.';
	}

	if(!(myArray instanceof Array)) {
		throw 'The first arument is not an array.';
	}

	if(myArray.length <= 0) {
		throw 'The array cannot be empty.';
	}

	var arrayLength = myArray.length;
	var randomPosition = Math.floor(randomRange(0, arrayLength));
	if(randomPosition === arrayLength) {
		randomPosition--;
	}

	return myArray[randomPosition]; // One element of the array
}

function rot13(unencrypted) {
	if(unencrypted === undefined) {
		throw 'You must enter string to encrypt.';
	}

	if(typeof unencrypted !== 'string') {
		throw 'The first argument must be a string';
	}

	// Make sure there aren't any special characters in unencrypted string
	for(var i=0; i<unencrypted.length; i++) {
		var targetCharacter = unencrypted.charAt(i);
		targetCharacter = targetCharacter.toLowerCase();
		var targetCharacterCode = targetCharacter.charCodeAt(0);
		if(targetCharacterCode < 97 || targetCharacterCode > 122) {
			throw 'The unencrypted string can only have a-z or A-Z';
		}
	}

	// Okay input is good, start the encryption

	var encrypted = '';

	for(var i=0; i<unencrypted.length; i++) {
		var charCode = unencrypted.charCodeAt(i);
		// var translatedCharcode;
		if(charCode >= 65 && charCode <= 90) {

			var translatedCharcode = charCode - 65;
			translatedCharcode += 13;
			translatedCharcode %= 26;

			encrypted += String.fromCharCode(translatedCharcode+65);
		}

		else if(charCode >= 97 && charCode <= 122) {

			var translatedCharcode = charCode - 97;
			translatedCharcode += 13;
			translatedCharcode %= 26;

			encrypted += String.fromCharCode(translatedCharcode+97);
		}
	}



	return encrypted; // a ROT13 encrypted string
}


function rotn(unencrypted, n) {
	if(unencrypted === undefined) {
		throw 'You must enter string to encrypt.';
	}

	if(typeof unencrypted !== 'string') {
		throw 'The first argument must be a string';
	}

	// Make sure there aren't any special characters in unencrypted string
	for(var i=0; i<unencrypted.length; i++) {
		var targetCharacter = unencrypted.charAt(i);
		targetCharacter = targetCharacter.toLowerCase();
		var targetCharacterCode = targetCharacter.charCodeAt(0);
		if(targetCharacterCode < 97 || targetCharacterCode > 122) {
			throw 'The unencrypted string can only have a-z or A-Z';
		}
	}

	// Okay input is good, start the encryption

	var encrypted = '';

	for(var i=0; i<unencrypted.length; i++) {
		var charCode = unencrypted.charCodeAt(i);
		// var translatedCharcode;
		if(charCode >= 65 && charCode <= 90) {

			var translatedCharcode = charCode - 65;
			translatedCharcode += n;
			translatedCharcode %= 26;

			encrypted += String.fromCharCode(translatedCharcode+65);
		}

		else if(charCode >= 97 && charCode <= 122) {

			var translatedCharcode = charCode - 97;
			translatedCharcode += n;
			translatedCharcode %= 26;

			encrypted += String.fromCharCode(translatedCharcode+97);
		}
	}



	return encrypted; // a ROT13 encrypted string
}