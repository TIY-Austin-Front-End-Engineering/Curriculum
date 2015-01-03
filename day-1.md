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
        <title></title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <p>Hello world! This is a HTML5 page.</p>
        <script src="greeting.js"></script>
    </body>
</html>
```

The first line is called the **doctype** declaration. It tells the browser which version of HTML to use. We will be writing all of our HTML using HTML5. Almost all HTML tags require both an opening tag <...> and a closing tag </...>. The doctype declaration is one of the few that does not require a closing tag.

`<!DOCTYPE html>`

In the second line we are opening the HTML document. Every HTML document is opened with the `<html>` tag and closed with the `</html>` tag. The opening and closing HTML tags are like the pieces of bread at the top and bottom of a sandwich (a formality - all the good stuff is inside!).

`<html>`

The third line opens the head tag. Notice that it is indented (with a tab) to denote that the head tag resides *inside* the html element. The head tag contains a bunch of information about the HTML page, including the page title that appears at the top of the browser window, the icon that appears next to the title, etc.

	`<head>`

The fourth line specifies the character set that should be used by the browser. Character sets are a really complicated subject, but it's important to have a basic understanding of them. Basically since computers interperate everything as numbers, each letter, number, symbol, etc. is represented by a number. Just like there are different versions of HTML, there are also different ways to interperate which number corrolates to which symbol on the keyboard. **We almost always want to use `utf-8` for our character set.** [This is an excellent article](http://www.joelonsoftware.com/articles/Unicode.html) that describes the nitty gritty details of how character sets work. If you're interested you should read it. At bare minimum use it as a resource if you ever run into character set issues. They can be nasty to fix.

		`<meta charset="utf-8">`

# Resources
* [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)](http://www.joelonsoftware.com/articles/Unicode.html)