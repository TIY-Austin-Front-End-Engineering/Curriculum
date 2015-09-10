# Unit Testing Functions

## Description
Unit test these functions before implementing them.


## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand why and how we use unit tests
* Gain more experience implementing JavaScript functions


### Performance Objectives

After completing this assignment, you be able to effectively use

* mocha unit testing library
* chai assertion library


## Details

### Deliverables

* A repo containing at least:
  * `main.js`
  * `tests/checkData.test.js`
  * `tests/concatenateArrays.test.js`
  * `tests/fixProperNoun.test.js`
  * `tests/sortLetters.test.js`
  * `tests/absVal.test.js`
  * `tests/myMin.test.js`
  * `tests/myMax.test.js`
  * `tests/getMonth.test.js`
  * `tests/randomElement.test.js`
  * `tests/studentPairs.test.js`
  * `tests/sumSquares.test.js`
  * `tests/findMaxDiff.test.js`
  * `tests/insertDashes.test.js`
  * `tests/mySubstring.test.js`

### Requirements

* No ESLint warnings or errors


## Normal Mode
1. Fork this repository by clicking the fork button on the upper right corner of this page. This will copy the repository on to your GitHub account.
2. Clone **the forked version** of the repository. When you copy the clone URL it should have your github username in it **not TIY-Austin-Front-End-Engineering**.
3. Read through the scripts/main.js file in your cloned repo. Develop an understanding of what each function is supposed to do based on the comments.
4. For each function write out with pen and paper the arguments that are getting passed into the function. For each argument write out...
	* the type of data (string, number, boolean, array, object) that it should be
	* one example valid value that could be passed in to that argument
5. For each function write out with pen and paper
	* in english: what should be returned from the function?
	* what type should the return value be?
	* one example of a valid return value
6. Install mocha and chai by running the command `npm install --save-dev mocha chai`
7. Develop unit tests for all of the functions labeled (normal)
8. Commit your unit tests and push to GitHub
9. Implement each of the functions.
            
## Hard Mode
Develop unit tests for, and implement the functions labeled (hard)
            
## Nightmare Mode
Develop unit tests for, and implement the functions labeled (nightmare)

## Notes
If you update the package.json file on the line that looks like:

```
"test": "echo \"Error: no test specified\" && exit 1"
```

and change it to:

```
"test": "./node_modules/mocha/bin/mocha ./tests/**/*.js"
```

you should now be able to run `npm test` to run all of your unit tests.

## Additional Resources

* Read []()
