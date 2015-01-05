[Table of Contents](/README.md)

# Day 1: Structure of HTML Documents

## Goals
1. Get all necessary software installed (Sublime, Dropbox, Chrome)
2. Put together a basic HTML5 page linking in a CSS file, a JS file and an image.
3. Understand how to layout a fixed width page with CSS.


# Goal 1: Install Sublime and Dropbox
##[Download & Install Sublime Text 3](http://www.sublimetext.com/3)

> Sublime Text is one of the most popular tools for writing code because it strikes a good balance between simplicity and power. At their core, all tools like sublime do essentially the same thing: let you create and edit text files. Some alternatives to Sublime are Coda, Notepad++, TextWrangler, Eclipse, Netbeans, vim, emacs. The list goes on and on. I require all students to use Sublime so that we are all on the same page and so that we can share tips and tricks for how to use our editor more efficiently.

##[Download & Install Dropbox](https://www.dropbox.com/)

> If you haven't already heard of Dropbox, it's an incredible tool for storing and sharing files. You'll use it to submit assignments and put your projects up on the web.

##[Download & Install Google Chome](http://www.google.com/chrome/)

> Chrome is the browser of choice for many web developers because it is fast, has a powerful set of tools for manipulating web pages and debugging problems in your code. It also uses the Webkit rending engine, which is also used by Apple's Safari browser, so if it works on Chrome, it's likely to work on Safari too.

# Goal 2: Put together a basic HTML5 page
## Bare bones HTML5 page
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>this is my really cool webpage</title>
        <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
        <p>Hello world! This is a HTML5 page.</p>
        <script src="/js/greeting.js"></script>
    </body>
</html>
```

## Anatomy of an HTML element

fill in stuff here

## Line by line description

The first line is called the **doctype** declaration. It tells the browser which version of HTML to use. We will be writing all of our HTML using HTML5. Almost all HTML tags require both an opening tag <...> and a closing tag </...>. The doctype declaration is one of the few that does not require a closing tag.

	<!DOCTYPE html>

In the second line we are opening the HTML document. Every HTML document is opened with the `<html>` tag and closed with the `</html>` tag. The opening and closing HTML tags are like the pieces of bread at the top and bottom of a sandwich (a formality - all the good stuff is inside!).

	<html>

The third line opens the head tag. Notice that it is indented (with a tab) to denote that the head tag resides *inside* the html element. The head tag contains a bunch of information about the HTML page, including the page title that appears at the top of the browser window, the icon that appears next to the title, etc.

		<head>

The fourth line specifies the character set that should be used by the browser. Character sets are a really complicated subject, but it's important to have a basic understanding of them. Basically since computers interperate everything as numbers, each letter, number, symbol, etc. is represented by a number. Just like there are different versions of HTML, there are also different ways to interperate which number corrolates to which symbol on the keyboard. **We almost always want to use `utf-8` for our character set.** [This is an excellent article](http://www.joelonsoftware.com/articles/Unicode.html) that describes the nitty gritty details of how character sets work. If you're interested you should read it. At bare minimum use it as a resource if you ever run into character set issues. They can be nasty to fix.

			<meta charset="utf-8">

The fifth line opens and closes the title element. The title element specifies what the title of the page should say in the browser tab. In addition to being helpful for visitors with multiple tabs open, the words in your title tag are also used by search engines to rank your website for those keywords. As a rule of thumb, no two pages should have the same title.

![Screen shot of where the title is displayed.](/day-1/assets/title-favicon.png)

			<title>this is my really cool webpage</title>

The sixth line links a CSS file to the HTML page. Notice that the link element has two *attributes*. The `rel` attribute specifies what we are linking. "stylesheet" is the only value I've ever seen for this attribute. The `href` attribute specifies where the actual CSS file is located. There are a number of ways to specify where the target CSS file is located. I've previously written a more in-depth guide on paths, which you [can find here](http://900dpi.com/blog/Learn-HTML/What-the-Everything-you-ever-wanted-to-know-about-paths-on-the-web). The link element is one of the special ones that *does not* require a closing tag.

			<link rel="stylesheet" href="/css/style.css">

I'll breifly describe the different types of paths below.

> #### Absolute paths
> **Example 1:** `http://900dpi.com/images/logo_vert.png`

> Absolute paths basically point to a place on the internet, just like any webpage you would visit. Sometimes they are a webpage, but they can also be an image or really any other type of file. I think about it like this: If `http://900dpi.com` is the address of a folder (sometimes called the site root) on a computer (server) out there in the abyss, then `http://900dpi.com/images/logo_vert.png` is going to be the logo_vert.png file located inside the images sub-folder of the parent folder. Simple right! :)

> **Example 2:** `//www.youtube.com/embed/gmar4gh5nIw`

> Sometimes you will see an absolute path that looks like example 2. This is equivalent to `http://www.youtube.com/embed/gmar4gh5nIw` or `https://www.youtube.com/embed/gmar4gh5nIw`, depending on whether the page you are referencing from is using the `http` or `https` protocol. You'll often seeing this when embedding widgets like videos into your page.

> I recommend *against* using absolute paths unless absolutely necessary, because as you can see they include the domain of the website. If the domain ever changes, it screws up *all of your paths!**. This happens more frequently than you might expect.

> #### Site root-relative paths
> **Example:** `/images/logo_vert.png`

> Site root-relative paths always start with a forward slash (/) and, as their name suggests, are always relative to the site root. The site root is the folder at the root of your site.

> Site root-relative paths should be used over other methods whenever possible because 1. they are not dependent on the domain, and 2. they are not dependent on which file you are referencing from.

> #### Document-relative paths

> Document-relative paths are based on the location of the current document (the HTML document in our case). The easiest way is to go through an example:

> **Example 1:** 
> Let's say you are on a webpage that is located at `http://foo.com/pages/hello.html`. This page references a CSS file like so: `<link rel="stylesheet" href="css/style.css">`. We can tell that this is a document relative path because it doesn't start with a `http://`, `https://`, `/`, or `\\`. In this case, the path of the CSS file will resolve to `http://foo.com/pages/css/style.css`.

> **Example 2:** 
> Let's say you are on a webpage that is located at `http://foo.com/index.html`. This page references a CSS file like so: `<link rel="stylesheet" href="css/style.css">`. Just as above, this is a document relative path with the same href attribute. In this case, the path of the CSS file will resolve to `http://foo.com/css/style.css`. Notice how this differs from example 1 even though the path is exactly the same! That's because the HTML file is in a different location this time, and the path is relative to the location of the HTML file.

> **Example 3:**
> What if we wanted to use a document relative path to reference the CSS file in example 2, but we are on the HTML page in example 1? We will have to go "up" a directory. That's done by prefixing our path with a `../`. So if we are on a page located at `http://foo.com/pages/hello.html` and you link to a CSS file like so `<link rel="stylesheet" href="css/style.css">` it will reference the CSS file located at `http://foo.com/css/style.css`.

> **Example 4:**
> Sometimes you will see a path that is prefixed with a `./`. For example: `<link rel="stylesheet" href="./css/style.css">`. This is *not* the same as the `../` prefix. The one dot makes a difference! A single dot slash prefix is a reference to the current directory. Therefore the reference to the CSS file above would be equivalent to `<link rel="stylesheet" href="css/style.css">` because leaving out the `./` also references the current directory by default. I prefer to leave out the `./` notation, but you might see it somewhere.

The seventh line closes out the head section of our HTML document. Remember that almost every type of HTML element requires both an opening tag and a closing tag.

		</head>

Next we open up the body element. Each HTML document has only one head and one body element. The body element is where everything that you see on the page lives.

		<body>

An empty page would be pretty boring, so we'll add a paragraph of text, denoted by the paragraph (p) element. In most cases, any text you write inside of an element will show up on the page. There are a whole slew of other types of elements. [Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) is a great resource for learning the purposes of all of the elements that go inside of the body element.

			<p>Hello world! This is a HTML5 page.</p>

This final script element is very similar to the `<link>` element that we used at the beginning to load our CSS. Instead of CSS, the `<script>` element loads a javascript file, and uses the same path rules that we went over when discussing the `<link>` element. The script element has one attribute `src`, which specifies where the javascript file is located. `src` is equivalent to `href` on the link element.

			<script src="/js/greeting.js"></script>

Finally we need to close out all of the tags that we've opened.

		</body>
	</html>

# Goal 3: Understand how to layout a fixed width page with CSS.

We use CSS to style the look and feel of our HTML pages. If your HTML elements were the foundation and scaffolding of a house, CSS would be the walls and paint and everything else that makes it look like a real building.

After creating a style.css file and using the `<link>` element to link the stylesheet in your HTML we can start writing some CSS. All CSS is written in the form of:
```css
selector {
	property1: value1;
	property2: value2;
	property3: value3;
}
```

> ### A note on CSS reset
> Three are many different browers out there, and each one has a different default set of CSS properties that it applies to different HTML elements. This can make things really frustrating when trying to get a consistent style across browers. To fix this problem we use a [css reset](http://www.cssreset.com/scripts/eric-meyer-reset-css/) to set our own default styles for each element, so that each browser starts from the same base point. I HIGHLY RECOMMEND using this CSS reset to avoid issues.

There are many different ways to specify what elements you want to style. We'll start with classes, which are the simplest. Class selections all start with a dot (.) followed by the name of the class. Class names must start with a letter, but can be followed by numbers, dashes and underscores. For example:

```css
.my-awesome-class {
	
}
```

We can give HTML elements a class by using the `class` attribute like so:

`<p class="my-awesome-class">This is some text</p>`

HTML elements can also have multiple classes. For example:

`<p class="my-awesome-class class2">This is some text</p>`

**Any element that has a specific class will get all of the properties of that class**. There are a whole slew of different CSS properties, [which you can look up here](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

Let's start with a blank HTML page with one main element and a little bit of text.
```html
<html>
	<head>
		<meta charset="utf-8">
		<title>HTML Page with CSS</title>
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
		<main class="centered">
			This is some text inside the main element.
		</main>
	</body>
</html>
```

Notice that the `main` element has a class on it called `centered`. We will use that class within our style.css file.

```css
.centered {
	background-color: blue;
}
```

The CSS above tells the browser that any element with a class of `centered` should have a `background-color` of `blue`. The selector is `.centered` (meaning: select all elements with a class of centered). The property is `background-color`. The value of the property is `blue`.

Let's add a few more properties:

```css
.centered {
	background-color: blue;
	width: 960px;
	height: 500px;
	margin: 0 auto;
}
```

The width and height properties specify how big the element should be. `margin: 0 auto;` centers the element on the screen.

# Assignment
1. Try out six different HTML elements that are listed in the [HTML element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). Write up a quick description of how each of the elements differ from each other. If you're having trouble pick from the following list:
	* `<strong>`
	* `<em>`
	* `<p>`
	* `<span>`
	* `<div>`
	* `<h1>`
	* `<h2>`
	* `<h3>`
	* `<br>`
	* `<section>`
	* `<del>`
2. Style your elements using six different properties listed in the [CSS property reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).
3. Read through http://learnlayout.com
3. Try out 

# Resources
* [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)](http://www.joelonsoftware.com/articles/Unicode.html)
* [What the ../ ?? Everything you ever wanted to know about paths on the web](http://900dpi.com/blog/Learn-HTML/What-the-Everything-you-ever-wanted-to-know-about-paths-on-the-web)
* [HTML element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
* [Eric Meyer’s CSS reset](http://www.cssreset.com/scripts/eric-meyer-reset-css/)
* [CSS property reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)