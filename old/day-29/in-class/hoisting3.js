function foo() {
	return 'hi';
}

(function() {
	foo();

	var foo = function() {
		console.log('hello');
	};
})();

////////

function foo() {
	return 'hi';
}

(function() {
	var foo;
	foo();

	foo = function() {
		console.log('hello');
	};
})();