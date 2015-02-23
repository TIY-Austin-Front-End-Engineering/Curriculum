function foo() {
	return 1;
}
var bar = 'hello';
(function() {
	console.log(bar);
	console.log(foo);
	console.log(foo());

	function foo() {
		return 2;
	}
	var bar = 'test';
})();

/////////////

function foo() {
	return 1;
}
var bar = 'hello';
(function() {
	function foo() {
		return 2;
	}
	var bar;

	console.log(bar);
	console.log(foo);
	console.log(foo());
	bar = 'test';
})();