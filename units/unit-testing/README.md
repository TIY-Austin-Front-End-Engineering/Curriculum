# Unit Testing

### You should already know about
* JavaScript Functions

## Why unit testing?
One of the hardest things any developer has to deal with is bugs in their code. Bugs can create problems for your users, and life becomes really stressful when you realize your code has been causing frustration or worse.

*Any mildly complex code has bugs* and part of surviving as a developer is realizing this. At the same time, we want to do as much as we possibly can to minimize the amount of bugs in our code (and make our life a little bit more stress free).

Your normal workflow might be to write some code and then open up your browser to test and make sure that the code you wrote is doing what you expect it to do.



## Instructions for setting up your testing environment

* Create a new github repository and clone it to your computer, or just create a new directory within an existing github repo

* `cd` into your new directory (your-directory in the example above)

* Run `npm init` and then `npm install --save-dev mocha chai` to install chai as a dev dependency.
	* Dev dependencies are different from regular dependencies because they are not used in the actual application code. Instead, they are used for things like testing or building / compiling your application.

* create a `test` directory inside of your project where your tests will be located.

* You can then write your tests in test/tests.js. Your file should start with:

	```js
	var expect = chai.expect;
	```