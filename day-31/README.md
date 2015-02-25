[Table of Contents](/README.md)

# Day 30: Angular UI Router

## Goals
* Learn how to use the angular ui router

## Steps
1. Set up your angular app using yeoman. If you install the newest version of the tiyfe generator it includes angular. `yo tiyfe`
2. Install angular-ui-router via bower: `bower install --save angular-ui-router`
3. Make sure angular ui router is included on the page. It might get included automatically by gulp.
4. Create a templates directory that sits next to (a sibling of) your scripts directory. This is where the pages that your routes are associated with will be saved.
5. Create a controller (in your controllers.js file) for each one of your pages.
6. Set up routes in your app module (aka app.js)
```js
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
```
Let's break it down line by line:


# Assignment
```js
angular.module('app', ['app.controllers', 'ui.router'])
```
> This line creates a new module that depends on your `app.controllers` module and the `ui.router` module (that you installed with bower and included in your html via a <script> tag).

```js
.config(function($stateProvider, $urlRouterProvider) {
	....
});
```
> This config block is where we set up our routes. The `.config(...)` method of our module takes a function as its one argument. We must pass any dependencies into that function (eg. `$stateProvider`, `$urlRouterPorvider`).
```js
$stateProvider
.state('home', {
	url: "/home",
	templateUrl: "templates/home.html",
	controller: "HomeCtrl"
})
```
> The `$stateProvider` is the service that we use to define our routes. We can call the `state` method on the `$stateProvider` to add that particular route. The `state` method takes two arguments, a name (eg `'home'`) and a configuration object. The name is how we can reference the route later in our code. The configuration object specifies the url that this route is associated with, the template to use, and the controller that controls the partocular route.

```js
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
```
> We can chain the route just like we do with controllers and factories.

```js
$urlRouterProvider.otherwise("/home");
```
> This final line specifies which url to use if none is specified (the default route).

# Resources
* [Angular UI Router](https://github.com/angular-ui/ui-router)