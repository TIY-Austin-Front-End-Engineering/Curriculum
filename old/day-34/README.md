[Table of Contents](/README.md)

# Day 34: Deploying to Heroku and Login Logic

## Goals
* Deploy our login assignment from [day-33](/day-33/README.md) to Heroku.
* Plug in login logic.
* Build out more models forour app.

## Notes

### 1. Update to the newest version of the sails-template

> All of these steps should be done in your project directory.

1. Run `git pull base master` to grab the newest code.
2. Resolve merge conflicts. You will probably have them in these files:
	1. views/layout.ejs
	2. .foreverignore
3. Run `npm install` to install new dependencies.
4. Run `bower install` for good measure.
5. Add, commit and push changes to GitHub (origin).

### 2. Configure heroku to use production configuration

> All of these steps should be done in your project directory.

1. Run `heroku config:set NODE_ENV=production` to tell Heroku to use our production settings instead of development settings.

### 3. Build and Deploy

> All of these steps should be done in your project directory.

1. Stop your sails server if it's running `forever stopall`.
2. Run `grunt buildProd` to build all of the necessary files.
3. Add, commit and push changes to Production (heroku).
4. Push to GitHub (origin).
5. Run `heroku open` to open your production app.



# Assignment

1. Modify your login and registration page so that they communicate with the server and display appropriate messages back to the user, or redirect them to the dashboard if they successfully login / register.
2. Move your login and registration validation logic to a service so that it can be reused across controllers.
3. Create a new /#/create-assignment page that has a form that takes all of the necessary information to be sent to our assignment model. Validate all input.
4. **hard mode:** Use an angular date-picker plugin to allow the user to visually select dates.
5. **insane mode:** Use $http to post the assignment form data to the server so that it is stored when a user clicks submit.