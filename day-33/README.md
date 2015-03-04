[Table of Contents](/README.md)

# Day 33: Introduction to Back-end Development

## Goals
* Set up a development environment
* Deploy default sails app
* Set up an API for our project

## Notes

![overview diagram](/day-33/development-heroku.jpg)

Check out the [sails-template repo](https://github.com/TIY-Austin-Front-End-Engineering/sails-template) for a full walk-through.


# Assignment

Create login and registration pages for the assignment app that we are going to build in class. Style the pages and deploy them to heroku. Use the [validator](https://github.com/chriso/validator.js) plugin on the client to ensure that all input is valid before a user clicks submit. Both the login and registration pages should have just an email and password field. When they successfully click submit you should console.log and object that looks like:

### login
```js
{
	identifier: 'aaron@theironyard.com',
	password: 'password123'
}
```

### registration
```js
{
	username: 'aaron@theironyard.com',
	email: 'aaron@theironyard.com',
	password: 'password123'
}
```