angular.module('basic.controllers', ['basic.services'])
.controller('BasicCtrl', function(
	$scope,
	Test,
	RandomNumber,
	User
) {

	$scope.min = 0;
	$scope.max = 10;
	// $scope.Test = Test;
	// $scope.testTest = function() {
	// 	console.log(Test);
	// };

	// $scope.baz = function() {
	// 	console.log(Test + ' hello');
	// };

	// $scope.testFoo = function() {
	// 	console.log(Foo);
	// };

	// $scope.testBar = function() {
	// 	console.log(Bar);
	// };

	$scope.testRandomNumber = function() {
		for(var i=0; i<10; i++) {
			console.log(RandomNumber(parseFloat($scope.min), parseFloat($scope.max), true));
		}
	};

	// $scope.testGeneratePassword = function() {
	// 	for(var i=0; i<10; i++) {
	// 		console.log(GeneratePassword(16));
	// 	}
	// };

	var u = new User();
	console.log(u);

	$scope.testUser = function() {
		var passwordValid = u.checkPassword($scope.password);
		if(passwordValid) {
			alert('Password was correct');
		}
		else {
			alert('Password was incorrect');
		}
	};
});