# Browserify

### You should already know about
* Javascript Introduction
* Objects
* Arrays
* Functions
* Sass
* Scoping / Closures

## Why do we need Modules

There has been an elephant in the room that nobody seems to be talking about. When we learned about scoping and closures we were told that adding variables to the global namespace (aka Window object) was bad. But that's exactly what we have been doing the whole time we have been talking about Backbone. The problem is that we want to be able to separate our code into different files for the sake of organization (models, collections, etc) but we also want to be able to share and reference code between those files. For example, our collection files always specify which type of model can be added to them. The easiest way to share models within our collections is to put them all into the global namespace. But this isn't the best way of doing things.

For a long time developers have prefered to split code into independent **modules**. Modules are a way of writing self-contained blacks of code that can be included by other code that needs its particular functionality. In the new version of JavaScript (called [ECMAScript 6 or ECMAScript 2015](https://github.com/lukehoban/es6features/blob/master/README.md)) there is a built in way to create modules, but for the time being there is not. To get around this we use a tool called [Browserify](http://browserify.org/).

## How does Browserify work?

Browserify allows us to create modules in their own files and include those modules wherever they are needed. Browserify uses [node style modules](https://nodejs.org/docs/latest/api/modules.html). A module might look like this:

```js
module.exports = function(a, b) {
	return a + b;
};
```

Then we can include this module anywhere we need it like so:

```js
var add = require('path/to/file.js');

var sum = add(7, 4);

console.log(sum);
```

Once our modules are all set up we can use browserify to transform all of our files into one combined file, with all of the necessary files included and no variables polluting the global namespace.

## Browserify set-up instructions

1. Install browserify and watchify:

	`npm install -g browserify watchify`

	*In addition to browserify we are also installing watchify, which is a tool that re-compiles our files when it detects a change in any of the files or their dependencies.*

2. Run the watchify command on our main.js file:

	`watchify scripts/main.js -o scripts/combined.js`

3. Include the compiled script in your index.html file:

	`<script type="text/javascript" src="scripts/combined.js"></script>`