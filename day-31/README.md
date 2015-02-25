[Table of Contents](/README.md)

# Day 31: Angular UI Router

## Goals
* Learn how to use the angular ui router

## Steps
1. Set up your angular app using yeoman. If you install the newest version of the tiyfe generator it includes angular. `yo tiyfe`
2. Install angular-ui-router via bower: `bower install --save angular-ui-router`
3. Make sure angular ui router is included on the page. It might get included automatically by gulp.
4. Create a templates directory that sits next to (a sibling of) your scripts directory. This is where the pages that your routes are associated with will be saved.
5. Create a controller (in your controllers.js file) for each one of your pages.
6. Set up routes in your app module (aka app.js)

###### app.js
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


# Notes
###### app.js
```js
angular.module('app', ['app.controllers', 'ui.router'])
```

> This line creates a new module that depends on your `app.controllers` module and the `ui.router` module (that you installed with bower and included in your html via a &lt;script&gt; tag).

###### app.js
```js
.config(function($stateProvider, $urlRouterProvider) {
	....
});
```

> This config block is where we set up our routes. The `.config(...)` method of our module takes a function as its one argument. We must pass any dependencies into that function (eg. `$stateProvider`, `$urlRouterPorvider`).

###### app.js
```js
$stateProvider
.state('home', {
	url: "/home",
	templateUrl: "templates/home.html",
	controller: "HomeCtrl"
})
```

> The `$stateProvider` is the service that we use to define our routes. We can call the `state` method on the `$stateProvider` to add that particular route. The `state` method takes two arguments, a name (eg `'home'`) and a configuration object. The name is how we can reference the route later in our code. The configuration object specifies the url that this route is associated with, the template to use, and the controller that controls the partocular route. Notice how the templateUrl is pointing to the `templates` directory that we created earlier.

###### app.js
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

###### app.js
```js
$urlRouterProvider.otherwise("/home");
```

> The last line of our config specifies which url to use if none is specified (the default route).
>
> The last thing we need to do is add a directive in our HTML that specifies where our routes should be rendered.

###### index.html
```html
<div ui-view></div>
```

> The `ui-view` directive specifies where our route templates are rendered. The HTML from our templates will be inserted inside of the element with the `ui-view` directive.

###### controllers.js
```js
angular.module('app.controllers', [])
.controller('ResumeCtrl', function($scope, $state) {
	$scope.test = 'hello';
	$scope.goHome = function() {
		$state.go('home');
	};
})
```

> We can change the page programmatically by using the `$state` service. Notice that when we use the `$state` service inside of the `app.config(...)` function we have to inject it with `$stateProvider` but when we inject it outside of app.config(...) we use `$state`. This is because it's a special kind of service called a provider. Providers are the only type of service that we can use inside of the `app.config(...)` function.

# Assignments
1. Follow these instructions to get all of the software installed that you will need to work with the Rails students for the hackathon.

> ## Install RVM 
>  - `\curl -sSL https://get.rvm.io | bash -s stable --ruby=2.2.0`
> 
> ## Install bundler
>  - close and re-open terminal
>  - run `gem install bundler`
> 
> ## Install Postgres
>  - brew install postgresql
>  - read the output. There should be a line that starts with
>  	- `ln -sfv ...`
>  	- `launchctl load ...`
>  - Run both commands

2. Draw up some project requirements for the sortable table assignment that you worked on over the past two days.

3. Replicate Assignment #3 from [day 21](/day-21) but using angular-ui-router instead of the backbone router.


# Resources
* [Angular UI Router](https://github.com/angular-ui/ui-router)