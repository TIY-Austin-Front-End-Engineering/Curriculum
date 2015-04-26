# SASS

### You should already know about
* [CSS Selectors](../css-selectors/README.md)

Writing maintainable CSS can be difficult. CSS files can get quite long, and without a consistent structure, can be hard to navigate. This is why front-end engineers and designers have started to use **CSS preprocessors**. A preprocessor is a program that takes one type of data and converts it to another type of data. CSS pre-processors add additional useful functionality and features to CSS and ultimately convert that data into plain 'ol CSS.

Sass is one of the most popular CSS preprocessors. Here are a few of useful features of Sass.

## Variables

Often times we will write the same characters over and over again when we are creating out CSS. For example, we might use the same color for our buttons and our headers. We might use the same font throughout our entire website. Sass variables allow us to assign names to these commonly used CSS "things" and allows us to easily change them.

```css
$mainColor: #f726dg;

.button {
	background-color: $mainColor;
}

.header {
	backgrount-color: $mainColor;
}

p {
	color: $mainColor;
}
```

As you can see, Sass uses the `$` symbol to indicate a variable. Sass variables allow us to follow an important programming principle called **DRY** (don't repeat yourself). The advantage of not repeating ourself (ie. not writing the same color over and over again) is that if we ever want to change that color, we only have to change it in one spot, as opposed to three (as in the example above). This saves us time and gives us less opportunities to make errors.

## Nesting

Nesting CSS blocks allows us to logically chunk our code and make it more readable. Sass blocks nested within other Sass blocks is equivalent to chaining selectors.

```css
div {
	.foo {
		color: green;
	}
}
```

The above code gets processed into the following CSS: `div .foo { color: green; }`. Essentially, this is saying that elements with the class of `foo`, which are *descendents* of a div element should have a color of green.

We can also use a similar syntax for specifying children specifically:

```css
div {
	> .foo {
		color: green;
	}
}
```
The above code gets processed into the following CSS: `div > .foo { color: green; }`. This is saying that elements with the class of `foo`, which are *direct children* of a div element should have a color of green.

Finally, using the `&` character will target the parent:

```css
div {
	> .foo {
		color: green;

		&:hover {
			text-decoration: underline;
		}
	}
}
```

The above code gets processed into the following CSS:

```css
div > .foo { color: green; }
div > .foo:hover { text-decoration: underline; }
```

The `&` symbol targets the parent element.

## Importing

With regular CSS we can split up our code into multiple files and include them all with separate `<link>` elements, however, this is slower than loading one file with all of the CSS included. We would like to be able to get the flexibility and structure that comes with multiple files, which maintaining the speed of loading one single CSS file. Sass allows us to do this with imports.

##### base.scss
```css
.button {
	background-color: green;
}
```

##### page.scss
```css
@import 'base';

div {
	.page
}
```

Using the `@import` command will pull all of the processed Sass from `base.scss` and `page.scss` into one file. The pre-processor allows us to write our code in two (or more) files but, have it all combined into one file before we use it on our website.

## Mixins

Sometimes we want to re-use code with slightly different parameters. Mixins allow us to write DRY (don't repeat yourself) code in these cases, by creating CSS blocks that can take parameters. Take a look at this example from the Sass website:

```css
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
.box2 { @include border-radius(4px); }
```

The `@mixin` syntax defines a re-usable chunk of CSS that takes a `$radius` variable (see the **Variables** section above). However, we may use our mixin with any different border radius depending on the situation. The above Sass will get converted into the following CSS:

```css
.box {
	-webkit-border-radius: 10px;
	-moz-border-radius: 10px;
	-ms-border-radius: 10px;
	border-radius: 10px;
}
.box2 {
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	-ms-border-radius: 4px;
	border-radius: 4px;
}
```

Notice how depending on the border radius that we "pass in" to our mixin, the CSS output is different. Imagine that we no longer need the -webkit prefix for our border-radius mixin, because webkit browsers now fully support border-radius without a prefix. We only need to remove the `-webkit-border-radius: $radius;` line from our mixin, and it will update every other spot in our code that uses the mixin. This keeps our code DRY.

## More Resources

Sass is incredibly powerful. You can read up on some of the other features at [sass-lang.com](http://sass-lang.com/).

* [Sass Basic](http://sass-lang.com/guide)

