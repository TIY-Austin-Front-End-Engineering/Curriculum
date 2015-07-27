# CSS Centering

### You should already know about
* [CSS Introduction](../css-introduction/README.md)
* [CSS Layout](../css-layout/README.md)

Centering in CSS is not the most trivial task. When you learned about [CSS layout](../css-layout/README.md) there were several different ways that elements can be used with differing display types, floats, etc. We need to take into account these variables, plus a few additional ones when determining how we will center elements on our page, both vertically and horizontally.


## Horizontal Centering

### Inline Elements

We'll start with the easiest case - inline elements. This also includes non-floated inline-block elements. Since these elements are treated like text, the simple way to horizontally center them is with `text-align: center`.

### Block Elements

For non-floated block level elements, you can't use the `text-align` property, because block level elements are not treated like text. Instead you can set the left and right margins to `auto`. For example `margin: 0 auto` will set the top and bottom margins to zero, and center the element horizontally.

I don't recommend trying to center floated elements, but if you're set on it, check out [this tutorial](https://css-tricks.com/float-center/).


## Vertical Centering

### Inline Elements

There are three options for centering inline elements.

1. If it is a single line of text, you can set the line-height equal to the height of the area that you want to center.
2. If you have multiple lines of text you can set equal padding on the top and bottom to give it a centered effect.
3. If you don't know how much padding to give, your only other option is to use a table cell (yuck!) with a `vertical-align` property. `vertical-align` will only align *text* vertically within a table cell. Don't try to do it on a block level element or you're gonna have a bad time.

### Block Elements

1. If you know the height of the element that you want to vertically center, you can use the following code:
	
	```css
	.parent {
		position: relative;
	}
	.child {
		position: absolute;
		top: 50%;
		height: 100px;
		margin-top: -50px; /* account for padding and border if not using box-sizing: border-box; */
	}
	```

2. If you don't know the height of the element to be centered then you can use a `transform`. Transforms are not supported in all browsers, so check [caniuse](http://caniuse.com/#search=transform) before using it.

	```css
	.parent {
		position: relative;
	}
	.child {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	```

## More Resources

* [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
* [Faking ‘float: center’ with Pseudo Elements](https://css-tricks.com/float-center/)
* [How to center in CSS](http://howtocenterincss.com/)