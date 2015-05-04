/* jshint devel:true */
angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('foo', {
		url: "/home",
		templateUrl: "templates/home.html",
		controller: "HomeCtrl"
	})
	.state('resume', {
		url: "/resume",
		templateUrl: "templates/resume.html",
		controller: "ResumeCtrl"
	})
	.state('bio', {
		url: "/bio",
		templateUrl: "templates/bio.html",
		controller: "BioCtrl"
	})
	.state('student', {
		url: "/student",
		templateUrl: "templates/students.html",
		controller: "StudentsCtrl"
	})
	.state('individualStudent', {
		url: "/student/:id",
		templateUrl: "templates/student.html",
		controller: "IndividualStudentCtrl"
	});

	$urlRouterProvider.otherwise("/home");
});