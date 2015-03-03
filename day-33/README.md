[Table of Contents](/README.md)

# Day 33: Introduction to Back-end Development

## Goals
* Set up a development environment
* Deploy default sails app
* Set up an API for our project

## Notes

![overview diagram](/day-33/development-heroku.jpg)

### 1. Install all of the necessary software

> You will only ever need to do these steps once.

1. From your terminal (any directory is fine) run `brew update`
2. If you haven't already installed node, do it now.
	1. Run `brew install node`
3. If you haven't already installed postgres, do it now.
	1. Run `brew install postgresql`
	2. Then run `ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents`
	3. Then run `launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist`
4. Install sails `npm install -g sails forever`
5. Create a free account on Heroku. Be sure to pick node.js as your development language.
	* [Heroku sign up](https://signup.heroku.com/dc)
6. Go to [this link](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
7. Download and install the Heroku Toolbelt for Mac OS X

### 2. Set up your local development environment

> You will need to do all of these steps once for each new project.

1. Create a postgres database for your new application: `createdb appdb`
2. Create a postgres user for your new application: `createuser postgres`
3. Copy down my sails template `git clone git@github.com:TIY-Austin-Front-End-Engineering/sails-template.git`
4. Rename the template to something else `mv sails-template assignment-app`
5. Remove the git history from the project: `cd assignment-app` and `rm -rf .git`
6. Run `git init` to initialize a new git repository.
7. On github, create a new repo **without a README**.
8. Add the new github repo as a remote to your new sails project. This will allow you to store a copy of your code on GitHub for backup purposes and sharing.
	1. `git remote add origin [url you would normally clone goes here]`
9. Add commit and push your repo: `git add .` then `git commit -m "initial commit"` finally `git push origin master`
10. Run `npm install` to install the back-end dependencies.
11. Run `bower install` to install the front-end dependencies. 
12. To run your sails server type `forever -w start app.js`. This will restart the server any time there is a change to one of the server files.
13. I recommend keeping the server output log open in its own terminal window: `forever logs app.js -f`
14. Open http://localhost:1337 in Chrome to make sure that the app is running properly

### 3. Set up your production environment

> You will need to do all of these steps once for each new project.

1. On the command line make sure that you are inside of your project directory and your project has a github repo (aka you have typed `git init`)
2. Run the command `heroku create` to create a new app on heroku. You may have to enter your heroku username and password.
3. Run `heroku addons:add heroku-postgresql` to create a database on heroku for your app.

### 4. Deploy to production

> You will need to do these steps each time you have changes on your development environment that you want to deploy to production (aka heroku).

1. Make sure you have added and committed all of the changes that you want to deploy.
2. Run `git push heroku master`
3. This is usually a good time to push to github too: `git push origin master`


# Assignment

Create login and registration pages for the assignment app that we are going to build in class. Style the pages and deploy them to heroku.