[Table of Contents](/README.md)

# Day 2: CSS Review and Introduction to the Command Line

# Review
- Have everyone talk about a HTML element or CSS property that they learned about.
- Different types of paths
- Project folder structure

## Goals
1. Understand the CSS Box Model
2. Intro to CSS Media Queries / Mobile first development
3. Intro to command line


# Goal 1: Understandinf the CSS Box Model
I'm not going to put in notes about this because MD already does a perfect job. Everything you want to know about the box model [can be found here](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model) in a clear concise description.

# Goal 2: Intro to CSS Media Queries / Mobile first development
Now that web users consume content on all kinds of different devices and screen sizes we can no longer realistically build fixed width websites. We need our frontend code to respond to the ever changing dimensions of the screens that people are using.

The basic strategy for accomplishing this in a way that doesn't make us pull our hair out is to make use of a concept called "breakpoints." Essentially, we use a few different versions of our CSS, depending on the screen size that the viewer is using. For example, we might create the following breakpoints:

| Breakpoint     | Size               |
| -------------- |--------------------|
| Small          | <768px (phones)    |
| Medium         | ≥768px (tablets)   |
| Large          | ≥992px (desktops)  |

Since mobile devices usually have the most simple design, I recommend starting by laying out the HTML for the *small* breakpoint first and then enhancing the CSS for larger versions. This is much easier than starting with the desktop version and taking things away. The concept of starting with the mobile layout is called **mobile first design**.

Here's an example of how this might work:
```html
<html>
	<head>
		<meta charset="utf-8">
		<title>Mobile First Page</title>
		<link rel="stylesheet" href="css/reset.css">
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
		<main class="centered">
			<nav class="navigation">
				<a href="#">link 1</a>
				<a href="#">link 2</a>
				<a href="#">link 3</a>
			</nav>
			<section class="content">
				<h1>Responsive Website Example</h1>
				This is an example of mobile first design. We have three breakpoints: &lt;768px, &ge;768px, and &ge;992px. Devices that fall within different breakpoints get a slightly different version of the design and layout. Pay particular attention to how the images change as you decrease or increase the size of the browser window.
			</section>
			<section class="pictures">
				<img src="images/img1.jpg">
				<img src="images/img2.jpg">
				<img src="images/img3.jpg">
			</section>
			<footer class="footer">
				the footer
			</footer>
		</main>
	</body>
</html>
```

```css
/* Default CSS: CSS for small devices <768px */
body {
	font-size: 18px;
	line-height: 1.5;
}

h1 {
	font-weight: bold;
	font-size: 40px;
	margin: 10px 0;
}

.centered {
	display: block;
    position: absolute;
    height: auto;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    margin: 8px;
}

.pictures {
	font-size: 0;
}

.pictures img {
	display: inline-block;
	width: 100%;
	margin-bottom: 20px;
}

/* CSS for medium devices ≥768px */
@media (min-width: 768px) {
	.centered {
		margin: 0 auto;
		width: 736px;
		padding: 0;
	}

	.pictures img {
		width: 240px;
		margin-right: 8px;
	}

	.pictures img:last-child {
		margin-right: 0;
	}
}

/* CSS for large devices ≥992px */
@media (min-width: 992px) {
	.centered {
		width: 960px;
	}

	.pictures img {
		width: 300px;
		margin-right: 30px;
	}

	.pictures img:last-child {
		margin-right: 0;
	}
}
```

# Goal 3: Intro to command line

# Assignment Format
All assignments that involve code should be submitted in the following format:
```
├──2015-01-05
├── classwork
|   ├── index.html
|   ├── (any other html files)
|	├── images
|   |	├── image1.jpg
|   |	└── image2.png
|	├── css
|   |	├── reset.css
|   |	└── style.css
|	├── js
|   |	├── main.js
|   |	└── another_file.js
├── homework
|	├── assignment1
|	|	├── index.html
|	|	├── (any other html files)
|	|	├── images
|	|	|   ├── image1.jpg
|	|	|   └── image2.png
|	|	├── css
|	|	|   ├── reset.css
|	|	|   └── style.css
|	|	├── js
|	|	|   ├── main.js
|	|	|   └── another_file.js
|	├── assignment2
|	|	├── index.html
|	|	├── (any other html files)
|	|	├── images
|	|	|   ├── image1.jpg
|	|	|   └── image2.png
|	|	├── css
|	|	|   ├── reset.css
|	|	|   └── style.css
|	|	├── js
|	|	|   ├── main.js
|	|	|   └── another_file.js

```

# Assignment
1. Watch: https://www.youtube.com/watch?v=0fKg7e37bQE
- Write up a description in your own words for each of the basic git commands. Put the descriptions in a HTML file.
-- git clone
-- git status
-- git add
-- git commit
-- git push
-- git pull
2. Duplicate this layout including colors and style: http://purecss.io/layouts/pricing/
3. Install xcode command line tools. No deliverables required other than having it properly installed. We will use these tomorrow and will not be going over how to install them in class so if you need help ask before tomorrow.

# Resources
* [Box Model Summary](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)
* [Video: Github Tutorial For Beginners](https://www.youtube.com/watch?v=0fKg7e37bQE)