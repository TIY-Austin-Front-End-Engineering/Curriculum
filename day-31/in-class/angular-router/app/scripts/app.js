/* jshint devel:true */
angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
	.state('home', {
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
	});

	$urlRouterProvider.otherwise("/home");
});