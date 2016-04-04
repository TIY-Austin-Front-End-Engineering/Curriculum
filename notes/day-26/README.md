[Table of Contents](/README.md)

# Day 26 - JS: ES2015, Build Tools

## Topics
* Pre-procesor review
* Babel / ES2015
  * Modules
  * Block scoping `let` and read-only `const`
  * Arrow functions
  * template strings
  * Learn more cool stuff by reading [Babel's docs](https://babeljs.io/docs/learn-es2015/)
* Build tools
  * Browserify/babelify
  * What and why is a build tool?
    * Run pre-processors
    * Minify files
    * Run development servers
    * Watch for file changes
    * Deploy

## Notes
To compile your sass into a different directory:
```shell
$ sass --watch <path to source scss file>:<path to dist file>
```
Use underscores to denote partials - scss files that will be imported into the main scss file. They will not be compiled into their own scss file, but can be imported in to other scss files.
add the following to your `package.json` object

```js
"browserify": {
  "transform": [
    "babelify"
  ]
},
"babel": {
  "sourceType": "module",
  "presets": [
    "es2015"
  ]
},
```
These lines configure our browserify to first run the code through the babel transpiler, and configure babel to allow modules (imports and exports) and use the es2015 library.

To compile es2015 or later code:
```shell
$ npm install --save-dev babelify
$ watchify <path to source js file> -d --outfile <path to dist file>
```
For this to work you must have at some point in the past globally installed browserify and watchify.
The `-d` flag enables source mapping.

## Code
<!-- Make sure to update the XX in the folder name if you uncomment this block-->
[Code we wrote in class today](https://github.com/TIY-Austin-Front-End-Engineering/Curriculum/tree/master/notes/day-26/code)

## Assignments
[Refactored Image Board](https://online.theironyard.com/library/paths/115/units/383/assignments/1636)
