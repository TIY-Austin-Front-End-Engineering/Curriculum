# Unit Testing

### You should already know about
* JavaScript Functions

Unit testing is a way for us to save time when writing out code. It also helps us to prevent bugs. Up until now you have been writing a function and then testing it in the console, or testing how it functions within your larger application. The problem is that doing all this testing over and over again takes time. The goal of unit testing is to "program" those tests, so that you can run them automatically, over and over again as you change you code. This allows us to have confidence that when we change our code, it's not going to break some other part of the application.

## Instructions for setting up your testing environement
- Install mocha `sudo npm install -g mocha` (you will only ever need to do this once)
- Create a new github repository and clone it to your computer, or just create a new directory within an existing github repo
- `cd` into your new directory
- Run `bower init` and then `bower install --save chai`
- run `mocha init tests`
- Notice that a new index.html file was created within your tests directory? This is where your tests will run from - but you will need to include them in the tests/index.html page (hint: use ../ to move "up" a directory).
- You will also need to include chai from your bower_components directory.
- You can begin writing your tests in tests/tests.js. Your file should start with:
```js
var expect = chai.expect;
```
- Use the [in-class example](/day-22/in-class/unit-testing-intro) from today as a guide for how to write your tests. Also chai has some [good documentation](http://chaijs.com/api/bdd/).
- Open the tests/index.html file in your browser to see the tests run.