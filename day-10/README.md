[Table of Contents](/README.md)

# Day 10: Debugging Techniques, Yeoman and Objects

## Review
- Breadcrumbs leaderboard
- Difference between inline, inline-block, block, and floated block
- Variables as a box analogy
- Class partner picker

## Goals
- JSHint, "use strict"
	- In class: Use these tools to fix all bugs in your weekend homework assignment.
- Install and use Yeoman
- Understand JS Objects and dot notation

# Goal 1: Using JSHint and "use strict" to make sure we write clean code

Install the [JSHint sublime package](https://packagecontrol.io/packages/JSHint). Running this package will review all of your javascript code and ensure that you aren't doing anything horribly wrong.

[Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) prevents us from doing things that we shouldn't be doing in the first place. Use it at the beginning of your functions. Any function inside of a "use script" function is also considered strict.

# Goal 2: Install and use Yeoman
## Install Yeoman
> You will only ever need to do this once.

1. brew install node
2. sudo npm install -g yo bower gulp generator-gulp-webapp

## Use Yeoman for a new project
> You will repeat this process for every new project and homework assignment that you create.

1. Create a new repo on GitHub
2. Clone your repo into your projects folder
3. On the command line, `cd` to the new directory that was created when you cloned the repo.
4. Generate the code for your new app: `yo webapp`
5. Serve your new webapp: `gulp serve`
> You need to run this command each time you start working on your web app. It will watch your scss files, run a local webserver and automatically reload your page when it detects changes.

# Goal 3: Understand JS Objects and dot notation

Good information here: [Javascript Tutorial: Objects](http://javascript.info/tutorial/objects)

# Assignment
1. [Javascript object assignment](/day-10/assignments/assignment-1);
2. Using Yeoman and Sass, build out the [mobile](/day-10/assignments/assignment-2/mobile.png) and [tablet](/day-10/assignments/assignment-2/tablet.png) versions of this website. All fonts are available from [google fonts](https://www.google.com/fonts).
	- Cursive name font: Pacifico
	- Body font: Lato
	- Heading font: Open Sans Condensed
	- Images can be found here: [/day-10/assignments/assignment-2/images](/day-10/assignments/assignment-2/images)
3. Read: [Javascript Tutorial: Objects](http://javascript.info/tutorial/objects)
4. Hard mode: use [jquery scrollTop](http://api.jquery.com/scrolltop/) and a [jQuery click](http://api.jquery.com/click/) event to cause the window to smoothly scroll to the top of the page when a user clicks on the up arrow on the mobile version of the webisite for assignment #1.
5. Insane mode: build out the [desktop version](/day-10/assignments/assignment-2/desktop.png) of the website for assignment #1.

# Resources
- [JSHint sublime package](https://packagecontrol.io/packages/JSHint)
- [Yeoman getting started](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)