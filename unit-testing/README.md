# Unit Testing

### You should already know about
* JavaScript Functions

## Instructions for setting up your testing environement

* Install mocha `npm install -g mocha` (if you get permission errors run again with `sudo ` in front)

* Create a new github repository and clone it to your computer, or just create a new directory within an existing github repo

* `cd` into your new directory (your-directory in the example above)

* Run `bower init` and then `bower install --save-dev chai` to install chai as a dev dependency.
	* Dev dependencies are different from regular dependencies because they are not used in the actual application code. Instead, they are used for things like testing or building / compiling your application.

* run `mocha init tests`.
	* This will initialize mocha in a directory called `tests`.

* Notice that a new index.html file was created within your `tests` directory? This is where your tests will run from.

* Before you begin you will need to include two additional scripts in your `tests/index.html` file.
	* Chai: `<script src="../bower_components/chai/chai.js"></script>`. This should be added right before the mocha.js script is loaded.
	* Your functions: `<script src="../scripts/main.js"></script>` *(this is assuming that you have a main.js file that is in a scripts directory one level up from your tests directory)* This should be loaded right before the chai.js script.

* You can then write your tests in tests/tests.js. Your file should start with:

	```js
	var expect = chai.expect;
	```

* [Here is an example](/unit-testing/example) of what your final directory structure with tests should look like when all is said and done.