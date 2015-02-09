[Table of Contents](/README.md)

# Day 21: Javascript Unit Testing

## Review
- New Schedule
- Breadcrumbs prize

## Goals
- Understand why unit testing is important.
- Learn how to unit test basic javascript functions with Mocha and Chai.

### Instructions for setting up your testing environement
- Install mocha and chai `sudo npm install -g mocha chai` (you will only ever need to do this once)
- Create a new github repository and clone it to your computer, or just create a new directory within an existing github repo
- Set up the following directory structure within your directory
```
├── your-directory
|   ├── index.html
|	├── styles
|	├── scripts
|   |	├── functions.js
|	├── tests
```
- `cd` into your new directory
- Run `bower init` and then `bower install --save ...` on any bower components that you want to install.
- `cd` into the tests directory and run `mocha init tests`
- Notice that a new index.html file was created within your tests directory? This is where your tests will run from - but you will need to include them in the tests/index.html page (hint: use ../ to move "up" a directory).
- You can begin writing your tests in tests/tests.js. Your file should start with:
```js
var expect = chai.expect;
```
- Use the [in-class example](/day-22/in-class/unit-testing-intro) from today as a guide for how to write your tests. Also chai has some [good documentation](http://chaijs.com/api/bdd/).
- Open the tests/index.html file in your browser to see the tests run.


# Assignment
1. Create a functions.js file that implements all of the unfinished functions [in this file](https://github.com/theironyard/js-assignments/blob/master/js-functions-practice/exercises-1.js). Start by writing unit tests for each function before you start to write the actual functions. **Commit your tests before any of the function code is implemented!** After your tests are complete, implement the functions.
2. Complete this [TDD Mocha / Chai](https://github.com/theironyard/js-assignments/tree/master/tdd-mocha-chai-1) assignment.
3. Make sure your portfolio is up and running with your blog linked in.
4. **Hard Mode**: Finish this assignment on [list filtering with Backbone](https://github.com/theironyard/js-assignments/tree/master/list-filtering-backbone-view).