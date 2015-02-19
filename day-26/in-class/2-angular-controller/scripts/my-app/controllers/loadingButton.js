angular.module('app.controllers', [])
.controller('LoadingButtonCtrl', function($scope, $timeout) {
	$timeout(function() { console.log('test') }, 2000);
});