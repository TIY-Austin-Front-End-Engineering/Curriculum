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
```js
...

// frameworks to use
// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
frameworks: ['mocha'],


// list of files / patterns to load in the browser
files: [
	'assets/bower_components/angular/angular.js',
	'assets/bower_components/angular-ui-router/release/angular-ui-router.js',
	'assets/bower_components/angular-mocks/angular-mocks.js',
	'assets/bower_components/lodash/lodash.js',
	'assets/bower_components/validator-js/validator.js',
	'assets/js/app/*.js',
	'assets/tests/*.js'
],


// list of files to exclude
exclude: [
],

...
```
