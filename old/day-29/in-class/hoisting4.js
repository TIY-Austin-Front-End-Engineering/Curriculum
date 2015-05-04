function foo() {
	return 'hi';
}

(function() {
	foo();

	var foo = 'test';
	function foo() {
		console.log('test');
	}
})();