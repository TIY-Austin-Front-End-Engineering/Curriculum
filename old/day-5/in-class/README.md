[Day 5 Notes](/day-5/README.md)

# CSS Specificity Problems

```html
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="css/reset.css">
		<link rel="stylesheet" href="css/style.css">

		<title></title>

	</head>

	<body>
		<!-- Logo plus Nav items-->
		<section>
			<div class="logo">
				<a href="#">YOUR LOGO</a>
			</div>
			<div class="menu">
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li class="pricing">
						<a href="#">Pricing</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</div>
		</section>
		<!--Image with pricing comment-->
		<div class="banner">
			<div class="image-text">
				<h1>Simple Pricing.</h1>
				<h1>Try before you buy.</h1>
			</div>
		</div>
		<!--Personal, business, Enterprise Pricing-->
		<div class="margin1">
			<div class="pricing-option">
				<div class="container" id="green">
					<div class="box-header" style="color: red;">
						PERSONAL
					</div>
					<div class="box-price">
						$5
					</div>
					<div class="box-footer">
						PER MONTH
					</div>
				</div>
				<ol class="lists">
					<li>Free setup</li>
					<li>Custom sub-domain</li>
					<li>Standard customer support</li>
					<li>1GB file storage</li>
					<li>1 database</li>
					<li>Unlimited bandwidth</li>
				</ol>
				<div class="buttonBox">
					<button>Choose</button>
				</div>
			</div>
			<div class="pricing-option">
				<div class="container" id="blue">
					<div class="box-header">
						SMALL BUSINESS
					</div>
					<div class="box-price">
						$25
					</div>
					<div class="box-footer">
						PER MONTH
					</div>
				</div>
				<ol class="lists">
					<li>Free setup</li>
					<li>Custom sub-domain</li>
					<li>Standard customer support</li>
					<li>1GB file storage</li>
					<li>1 database</li>
					<li>Unlimited bandwidth</li>
				</ol>
				<div class="buttonBox">
					<button>Choose</button>
				</div>
			</div>
			<div class="pricing-option">
				<div class="container" id="black">
					<div class="box-header">
						ENTERPRISE
					</div>
					<div class="box-price">
						$45
					</div>
					<div class="box-footer">
						PER MONTH
					</div>
				</div>
				<ol class="lists">
					<li>Free setup</li>
					<li>Custom sub-domain</li>
					<li>Standard customer support</li>
					<li>1GB file storage</li>
					<li>1 database</li>
					<li>Unlimited bandwidth</li>
				</ol>
				<div class="buttonBox">
					<button>Choose</button>
				</div>
			</div>
		</div>
		
		<div class="margin2">
		<!--Plan features and benefits-->
			<div class="orange">
				<section>
					<div>
						<h1>GET STARTED TODAY</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
						 do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
						 enim ad minim veniam, quis nostrud exercitation.</p>
					</div>
					<div>
						<h1>PAY MONTHLY OR ANNUALLY</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
						 do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						 Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
						 aute irure dolor in reprehenderit in voluptate velit esse.</p>
					</div>
					<div>
						<h1>24/7 CUSTOMER SUPPORT</h1>
						<p>Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
						cupidatat non proident, sunt in culpa qui officia deserunt mollit 
						anim id est laborum. Lorem ipsum dolor sit amet, consectetur 
						adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
						dolore magna aliqua.</p>
					</div>
					<div>
						<h1>CANCEL YOUR PLAN ANYTIME</h1>
						<p id = "lastp">Duis aute irure dolor in reprehenderit in 
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
						officia deserunt mollit anim id est laborum.</p>
					</div>
				</section>
			</div>
		</div>

		<!--Footer with comments-->
		<footer>
			<p>
				<a href="#">Try now</a> for 14 days. No credit
				card required. Header image courtesy of 
				<a href ="#">Unsplash</a>.
			</p>
		</footer>

	</body>

</html>
```

## Problem 1
### What color will the logo text be?
```css
section .logo a {
	color: red;
}

.logo a {
	color: green;
}

```

## Problem 2
### What color will the logo text be?
```css
div.logo a {
	color: orange;
}

section .logo a {
	color: yellow;
}

```

## Problem 3
### What color will the home link be?
```css
.menu li:first-child > a {
	color: black;
}

.menu > li > a {
	color: white;
}

```

## Problem 4
### What will the background-color of the banner be?
```css
div.banner {
	font-weight: bold;
	color: white;
	width: 100%;
	height: 300px;
}

.banner {
	text-decoration: none;
	background-color: blue;
	text-transform: uppercase;
	font-style: italic;

}
```

## Problem 5
### What will the background-color of second pricing option?
```css
#blue {
	background-color: red;
}

.margin1 > div.pricing-option > .container {
	background-color: green;
}
```

## Problem 6
### What will the margin of the description paragraphs be?
```css
div.margin2 section p {
	margin: 8px 0;
}

.margin2 > div > p {
	margin: 0 auto;
}

## Problem 7
### What will the text-decoration on footer links be?
```css
footer > p > a {
	text-decoration: none;
}

body > footer > div > p > a {
	text-decoration: underline;
}
```

## Problem 8
### What will the background-color of the body element be?
```css
html > body {
	background: #fff;
}

body {
	background-color: red;
}
```

## Problem 9
### What will the color of the PERSONAL box-header be?
```css
.margin1 div.box-header {
	color: green;
}

.margin1 div > div > div {
	color: blue;
}
```

## Problem 10
### What will the color of the SMALL BUSINESS box-header be?
```css
.margin1 div.box-header {
	color: green;
}

.margin1 div > div > div {
	color: blue;
}
```