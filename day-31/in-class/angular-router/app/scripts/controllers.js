angular.module('app.controllers', [])
.controller('HomeCtrl', function($scope) {
	$scope.test = 'hello';
})
.controller('ResumeCtrl', function($scope, $state) {
	$scope.test = 'hello';
	$scope.goHome = function() {
		console.log('goHome');
		$state.go('home');
	};
})
.controller('BioCtrl', function($scope) {
	$scope.test = 'hello';
});