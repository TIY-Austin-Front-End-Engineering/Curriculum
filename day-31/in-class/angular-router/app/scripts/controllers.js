angular.module('app.controllers', ['app.students'])
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
})
.controller('StudentsCtrl', function($scope, AllStudents) {
	$scope.students = AllStudents;
})
.controller('IndividualStudentCtrl', function($scope, $stateParams, AllStudents) {
	console.log($stateParams);
	$scope.student = _.findWhere(AllStudents, {id: parseInt($stateParams.id)});
});