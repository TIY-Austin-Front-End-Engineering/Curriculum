[Table of Contents](/README.md)

# Day 18

Goals:
* Backbone Routing Review
	* router.navigate
	* named parameters in routes
* API review
	* hooking up an API to your todo list
* Reading API documentation
	* [IMDB API](http://www.omdbapi.com/)

### Backbone Routing Review

1. create directory structure
	
	```
	dist
	--- index.html
	--- scripts
	------ main.js
	```

2. bower init

3. bower install --save backbone jquery

4. include jquery, underscore, backbone and scripts/main.js in my html file

	```html
	<!DOCTYPE html>
	<html>
	<head>
		<title></title>
	</head>
	<body>

		<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
		<script type="text/javascript" src="bower_components/underscore/underscore-min.js"></script>
		<script type="text/javascript" src="bower_components/backbone/backbone-min.js"></script>
		<script type="text/javascript" src="scripts/main.js"></script>
	</body>
	</html>
	```

5. Add event listener for jquery $(document).ready(...)

6. Configure the backbone router

7. Create the functions that the routes in your router reference

In-class assignment:
* Build a search page with the backbone router

Resources:
* jQuery [$.get](https://api.jquery.com/jquery.get/) and [$.post](https://api.jquery.com/jquery.post/) documentation.
* [IMDB API documentation](http://www.omdbapi.com/)
* [Backbone Router Documentation](http://backbonejs.org/#Router)

Homework:

1. [IMDB movie watch list](https://github.com/TIY-Austin-Front-End-Engineering/imdb-app)