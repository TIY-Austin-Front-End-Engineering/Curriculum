# CSS Selectors

### You should already know about
* [CSS Introduction](../css-introduction/README.md)

## Types of CSS selectors

As a quick recap from the [CSS Introduction](../css-introduction/README.md) remember that CSS blocks are structured like so:

```css
selector {
	property-one: value-one;
	property-two: value-two;
	property-three: value-three;
}
```

### Class selectors

We've already talked about one way to target which HTML elements you want to style, by using a class. HTML elements can be given a class by using the HTML class attribute:

`<p class="foo">bar</p>`

HTML elements can be given many classes (the one below has a `foo` class and a `baz` class):

`<p class="foo baz">bar</p>`

Also, many HTML elements can share the same class:

```html
<p class="foo">paragraph 1</p>
<div class="foo">div 1</div>
<p class="foo">paragraph 2</p>
```

We target elements by their class in CSS by using a `.` prefix to the selector. For example:

```css
.foo {
	font-weight: bold;
}
```

This CSS will target all elements with a class of `foo` and make any text inside of them bold.

### ID selectors

Classes are not the only way to target elements with CSS. You may also target elements by their id attribute. Id's are very similar to classes with a few important distinctions.

`<p id="foo">bar</p>`

We add an id to an element in very much the same way we add a class, by using the id attribute.

When targeting an element in our CSS by its id we use the `#` symbol as a prefix instead of the `.` symbol like we did for classes.

```css
#foo {
	font-weight: bold;
}
```

This CSS will target the single element with an id of `foo` and make any text inside of them bold.

HTML elements may only have *one* id, and no two elements may have the same id. This is not true of classes. This means that when you are use an id as your CSS selector, it will only ever be targeting one element.

Most of the time we will use classes over ids, but there are situations in which ids are necessary, which we will get into when we talk about CSS specificity.

### Tag name selectors

We can also target elements by their tag name. Targeting elements by their tag name requires no prefix. For example, if we wanted the text inside of all div elements to be bold, we would user the following CSS:

```css
div {
	font-weight: bold;
}
```

### Selectors based on relationships

In addition to selecting elements by their tag name, class, and id, you can also select elements by their relationship to the other elements around them.

#### Descendent selectors

You can separate selectors by a space to indicate that you want to target descendents of the first selector. For example:

```css
div .foo {
	color: blue;
}
```

The above CSS indicates that all elements with a class of foo, which are descendents of a div will have a text color of blue.

```html
<html>
	<head>
		<meta charset="utf-8">
		<title>HTML Page with CSS</title>
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
		<main>
			<div>
				<p>a paragraph</p>
				<span class="foo">a span</span>
				<div>a div</div>
				<section>
					<span class="foo">another span</span>
				</section>
			</div>
			<div class="foo">a div</div>
		</main>
	</body>
</html>
```

Only the span elements will have their text colored blue because they are the only elements that have a class of foo *and* are descendents of an element with a tag name of div. Notice that they need not be direct children of a div element as long as at least one of their ancestors is a div.

#### Child selectors

You can separate selectors by a `>` to indicate that you want to target direct children of the first selector. For example:

```css
div > .foo {
	color: blue;
}
```

The above CSS indicates that all elements with a class of foo, which are direct children of a div will have a text color of blue.

```html
<html>
	<head>
		<meta charset="utf-8">
		<title>HTML Page with CSS</title>
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
		<main>
			<div>
				<p>a paragraph</p>
				<span class="foo">a span</span>
				<div>a div</div>
				<section>
					<span class="foo">another span</span>
				</section>
			</div>
			<div class="foo">a div</div>
		</main>
	</body>
</html>
```

Only the span on line 11 (the first span) will have its text colored blue because it is the only element that has a class of foo *and* is a direct child of an element with a tag name of div.

#### Sibling selectors


You can separate selectors by a `+` to indicate that you want to target next sibling of the first selector. For example:

```css
span + div {
	color: blue;
}
```

The above CSS indicates that all elements with a tag name of div, which are adjacent children of a span will have a text color of blue.

```html
<html>
	<head>
		<meta charset="utf-8">
		<title>HTML Page with CSS</title>
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
		<main>
			<div>
				<p>a paragraph</p>
				<span class="foo">a span</span>
				<div>a div</div>
				<section>
					<span class="foo">another span</span>
				</section>
			</div>
			<div class="foo">a div</div>
		</main>
	</body>
</html>
```

Only the div on line 12 will have its text colored blue because it is the only element that is adjacent to a span element.

Selectors that are based on their relationship to other elements can be chained together and mixed and matched.

```css
div ul > li {
	padding: 0;
}
```

The following CSS will set the padding to zero for all li elements that are direct children of a ul element, that are descendents of a div. It's important to note that the last selector in the chain (in this case the li) is the element where the CSS properties are applied to.

## More Resources

* [Type Selectors](http://css.maxdesign.com.au/selectutorial/selectors_type.htm)
* [Class Selectors](http://css.maxdesign.com.au/selectutorial/selectors_class.htm)
* [ID Selectors](http://css.maxdesign.com.au/selectutorial/selectors_id.htm)
* [Descdendant Selectors](http://css.maxdesign.com.au/selectutorial/selectors_descendant.htm)
* [Child Selectors](http://css.maxdesign.com.au/selectutorial/selectors_child.htm)
* [Universal Selectors](http://css.maxdesign.com.au/selectutorial/selectors_universal.htm)
* [Adjacent Sibling Selectors](http://css.maxdesign.com.au/selectutorial/selectors_adjacent.htm)
* [Attribute Selectors](http://css.maxdesign.com.au/selectutorial/selectors_attribute.htm)

