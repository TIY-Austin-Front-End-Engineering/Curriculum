# CSS Pseudo-elements

### You should already know about
* [CSS Introduction](../css-introduction/README.md)

CSS provides a few different ways to style portions of an element. Normally when you use a CSS selector you are selecting an entire element. For example `.foo` will select all elements that have a class of foo. If you say:

```css
.foo {
	color: red;
}
```

... all of the text will be colored red within elements with a class name of foo.

If you want to style only a portion of an element, CSS provides **pseudo-elements**, which use a special *double* colon syntax (::). For example, if you'd like to style only the first letter of the text within an element you can use:

```css
.foo::first-letter {
	color: green;
}
```

There are a handful of pseudo-elements.

### ::before

::before creates a pseudo-element that is the first child of the element matched. For example, if you'd like all `.menu` elements to start with a green `>` character you can use the following CSS:

```css
.menu::before {
	content: '>';
	color: green;
}
```

### ::after

::after creates a pseudo-element that is the last child of the element matched. For example, if you'd like all `.menu` elements to end with an underlined `...`  you can use the following CSS:

```css
.menu::after {
	content: '...';
	text-decoration: underline;
}
```

### ::first-letter

The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line.

```css
.foo::first-letter {
	color: green;
}
```

The above CSS will style the first letter of any element with the *foo* class green.

### ::first-line

The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text.

```css
.foo::first-line {
	text-transform: uppsercase;
}
```

The above CSS will style the first line of any element with the *foo* class to be upper case.

## Notes

It's important to note that pseudo-elements used to be specified with only a single colon. All browsers support the single colon format, whereas only newer browsers support the prefereable double colon syntax. If you are trying to support older browsers it's safest to use a single colon instead of double colon.

## More Resources

* [Psuedo-elements - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
* [A Whole Bunch of Amazing Stuff Pseudo Elements Can Do](https://css-tricks.com/pseudo-element-roundup/)
* [Animating CSS-Only Hamburger Menu Icons](http://callmenick.com/post/animating-css-only-hamburger-menu-icons)