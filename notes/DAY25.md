[Table of Contents](/README.md)

# Day 25

Goals:
* React Introduction
	* Without JSX
	* Login form with JSX
	* Component properties
* Building a Gulpfile
	* Watchify
	* JSX

Resources:
* [Facebook React Tutorial](https://facebook.github.io/react/docs/tutorial.html)
* [Learning React.js: Getting Started and Concepts](https://scotch.io/tutorials/learning-react-getting-started-and-concepts)
* [React Documentation](https://facebook.github.io/react/docs/getting-started.html)

Homework:

1. Using Backbone Models and collections draw out a diagram that describes the following models that you will build for a blogging system:

	* User
	* BlogPost
	* Tag
	* Comment

	You diagram should include the attributes associated with each model as well as the attribute types, default values and whether or not they are required.

2. Using React, JSX and Browserify create the following components...

	a. A **comment form component** that validates that a comment was entered. If a valid comment was entered then console.log that comment and store it in a comment model. If you are missing any information in the model, allow it to be set to its default value.

	b. A **comment list component** that displays a passed in collection of comments. Your component should assume that it takes a collection of comment models, passed in via the `comments` property in the component. Display that list of models. If the list of models changes, it should update itself.

	c. A **blog post form component** that validates that a blog post title, body and category were entered. The category should be a dropdown that is generate from an array of categories that are passed in to the component and stored in the `categories` property. If a valid blog post was entered then console.log that post and store it in a BlogPost model. If you are missing any information in the model, allow it to be set to its default value. The component should display the following errors if the input is invalid:

		* Enter a post title. (if the title field is left)
		* Enter a post body. (if the body field is left blank)
		* Enter a post category (if the category dropdown is left blank)
		* That username / password combination doesn't exist. (if both the email and password are entered, the email is valid, but the email and password don't match)

	d. A **recent posts list component** that displays the X most recent posts. Assume that the number of posts to display is passed in as the property `number` and the entire collection of posts is passed in as the property `posts`. If there are less than `number` of posts then display all of the posts. If there are no posts then display the message: "There are no blog posts yet."

	d. A **log in form component** that validates (using [validator](https://www.npmjs.com/package/validator)) an email address and password. The email and password do not need to be stored on the server. They can be hard coded into the component. The component should display the following errors if input is invalid:
		
		* Enter an email address. (if the email field is left)
		* Enter a password. (if the password field is left blank)
		* Enter a valid email address (if the email address is entered but invalid)
		* That username / password combination doesn't exist. (if both the email and password are entered, the email is valid, but the email and password don't match)

	If there are no errors then the component should console.log('success')


	<!-- 5. Project form component -->
	<!-- 6. Project list component -->
	<!-- 8. Page component -->