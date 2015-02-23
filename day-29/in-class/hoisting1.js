var foo = 'This is hoisting';
function test() {
	if(foo) {
		console.log('Foo it set');
	}
	else {
		console.log('Foo is not set');
		var foo = 'now it\'s set';
	}
};

///////

var foo = 'This is hoisting';
function test() {
	var foo;
	if(foo) {
		console.log('Foo it set');
	}
	else {
		console.log('Foo is not set');
		foo = 'now it\'s set';
	}
};