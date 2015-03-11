[Table of Contents](/README.md)

# Day 35: Angular Unit Testings with Karma, Mocha and Chai

## Goals
* Set up a testing environment for your final project.
* Learn how to use angular-mocks to write tests for our controllers and services.

## Notes

### Set up your testing environment

Before writing our tests we'll need to install some new libraries to help with our testing, and create the necessary directory structure to make everything work.

1. Install Karma (from any directory). Karma is the tool that will run our tests `npm install -g karma karma-cli`. You might need to run this command with sudo if you get errors.
2. Install angular-mocks, mocha, chai and phantomjs locally (from your project directory). `npm install karma-mocha karma-phantomjs-launcher karma-sinon-chai mocha angular-mocks --save-dev`.
3. Create a new directory `assets/tests`.
4. Inside the root directory of your project, run `karma init` and fill out the following options:
	1. Which testing framework do you want to use ? **mocha**
	2. Do you want to use Require.js ? **no**
	3. Do you want to capture any browsers automatically ? **PhantomJS**
	4. What is the location of your source and test files ? *leave this blank*
	5. Should any of the files included by the previous patterns be excluded ? *leave this blank*
	6. Do you want Karma to watch all the files and run the tests on change ? **yes**
	7. After finishing answering all of the questions you should have a karma.conf.js file in the root directory of your project.
5. Now we need to tell Karma which files to include when we run our tests. We skipped this in steps 4 and 5 because it's easier to just modify the config file. To do this open up `karma.conf.js` and add the files that you'd like to include (both your angular files, all of the necessary libraries and all of your tests) in the `files` array. You can use * notation to pull in a pattern of files as well. For example...

        ...
        
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha'],
        
        
        // list of files / patterns to load in the browser
        files: [
        	'assets/bower_components/angular/angular.js',	// add angular
        	'assets/bower_components/angular-ui-router/release/angular-ui-router.js', // add ui router
        	'assets/bower_components/angular-mocks/angular-mocks.js',	// add angular mocks
        	'assets/bower_components/lodash/lodash.js',		// add lodash
        	'assets/bower_components/validator-js/validator.js', 	// add validator
        	'assets/js/app/*.js',	// Add all application code (app, controllers, services, etc.)
        	'assets/tests/*.js'		// Add all tests
        ],
        
        
        // list of files to exclude
        exclude: [
        ],
        
        ...


6. Now we can start writing tests. All tests will go in the `tests` directory that we created. For example, if we wanted to create a test for our registration controller we might create a file called `RegisterCtrl.test.js`.

        describe('RegisterCtrl', function() {
        
        	var $scope;
        	var RegisterCtrl;
        	var Validate;
        
        	beforeEach(module('app.controllers'));
        
        	beforeEach(inject(function($rootScope, $controller, $injector) {
        		$scope = $rootScope.$new();
        		RegisterCtrl = $controller('RegisterCtrl', {$scope: $scope});
        	}));
        
        	it('should require a username', function() {
        		$scope.register({});
        		expect($scope.error.identifier).to.not.equal('');
        	});
        
        	it('should not show errors if credentials are valid', function() {
        		$scope.register({identifier: 'test@test.com', password: 'password123'});
        		expect($scope.error.identifier).to.equal('');
        	});
        });
