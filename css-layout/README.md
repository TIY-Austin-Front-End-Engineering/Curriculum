# CSS Layout

### You should already know about
* [CSS Introduction](../css-introduction/README.md)
* [CSS Box Model](../css-box-model/README.md)

Stacking elements on top of each other is great and all, but sometimes we want a little bit more control over how elements are positioned on our page. There are three important CSS properties that give us control over the flow of our layout, **display**, **float**, and **clear**.

## display property

The `display` property is our greatest ally and greatest enemy when it comes to page layout. There are a whopping 26 possible values for the `display` property, and they are all considerably different. We will focus on the most important four values of the `display` property.

`display: none`
---

This is the simplest value to wrap our head around. It simply hides the element on the page. It completely removes it as if it were never there, unlike `visibility: hidden` where the invisible element will still take up space on the page even though it is hidden.

`display: block`
---

Elements with a block value for their display property (also known as **block level elements**) break the flow of the page, meaning they will not sit next to each other even if their is enough space. By default they will stack on top of each other. Block level elements are our primary tool for page layout. They are handy because you can set width, height, and margin on them and they behave according to the [CSS box model](../css-box-model/README.md).

`display: inline`
---

Inline elements are treated like text. They sit next to each other, but calculate their own width and height, and overall, do not adhere to the [CSS box model](../css-box-model/README.md). **Width, height, and margin properties are completely ignored on inline elements.** Padding and border properties will work, but may behave in inuntuitive ways. Because you cannot set the width or height on inline elements, these elements will shrink to fit their contents (children).

`display: inline-block`
---
Inline block elements have some of the behavior or inline elements and some of the behavior of block elements. These elements will respect your width, height and margin properties just like block level elements. The will also sit next to their siblings like inline elements.

## float property
The float property allows us to force block level elements to sit next to each other. It acts kind of like a magnet, pulling elements to either the left or the right. Not surprisingly, the three possible values for the float property are `float: left`, `float: right`, and `float: none`. By default all elements are `float: none`.

Similarly to the way that inline elements behave, block level elements will shrink to fit their contents (children) unless you specify a width or height, which they will respect.

##### Example of two floated block elements
```css
.test-float {
	padding: 20px;
	margin-right: 20px;
	background: black;
	color: white;
	float: left;
}
```
![Float](float.png)

## clear property

Sometimes we want floated elements to to revert back to their regular block behavior of stacking on top of each other. The clear property allows us to essentially do a carriage return on floats and drop them down to the next line. The clear property can have the values of `clear: left`, `clear: right`, `clear: none`, or `clear: both`.

When you use the `clear: left` property on an element, it's telling the browser that any elements that are floated left should not sit next to the cleared element. Instead they should drop down below it.

When you use the `clear: right` property on an element, it's telling the browser that any elements that are floated right should not sit next to the cleared element. Instead they should drop down below it.

When you use the `clear: both` property on an element, it's telling the browser that any elements that are floated right or left should not sit next to the cleared element. Instead they should drop down below it.

##### float left, clear left example
```html
<div class="test-another-float">box 1</div>
<div class="test-another-float">box 2</div>
<div class="test-another-float">box 3</div>
<div class="test-another-float">box 4</div>
<div class="test-another-float">box 5</div>
<div class="test-another-float">box 6</div>
<div class="test-another-float">box 7</div>
<div class="test-another-float">box 8</div>
<div class="test-another-float">box 9</div>
```

```css
.test-another-float {
	padding: 20px;
	margin: 0 20px 20px 0;
	background: black;
	color: white;
	float: left;
}

.test-another-float:nth-of-type(3n+1) {
	clear: left;
}
```
![Clear](clear.png)

## Behavior Chart

| Element Properties | Default Size             | Position     | Respects Width / Height / Margin |
| ------------------ | ------------------------ | ------------ | -------------------------------- |
| non-floated block  | Expands to fit container | Below        | Yes                              |
| floated block      | Shrinks to fit content   | Side by side | Yes                              |
| inline             | Shrinks to fit content   | Side by side | No                               |
| inline-block       | Shrinks to fit content   | Side by side | Yes                              |

## Layout Quirks

If you notice, floated block elements and inline-block elements look very similar. They can be used interchangeably, but each has their own quirks to deal with.

### inline-block quirks

If you try to get inline block elements to sit next to each other with no space in between, you're going to run into this annoying little quirk:

```html
<section>
	<div class="test-inline-block">box 1</div>
	<div class="test-inline-block">box 2</div>
	<div class="test-inline-block">box 3</div>
</section>
```

```css
.test-inline-block {
	display: inline-block;
	margin: 0;
	padding: 20px;
	background: black;
	color: white;
}
```

![Inline Block](inline-block.png)

Notice that the margin is set to zero, but there is still space in between each inline-block element. This is because inline block elements are treated kind of like text (because they have some behaviors of inline elements). That space in between each element is not actually margin, it is a literal space (as in, space from your spacebar). There are two ways to fix this, both are kind of messy.

1. Remove all space between elements like so:

	```html
	<section>
		<div class="test-inline-block">box 1</div><div class="test-inline-block">box 2</div><div class="test-inline-block">box 3</div>
	</section
	```

	If we remove the newline character from our HTML, then the browser realizes that there is no space between elements and removes the unwanted spaces.

2. Set the font size of the parent container to zero like so:

	```css
	section {
		font-size: 0;
	}

	.test-inline-block {
		display: inline-block;
		margin: 0;
		padding: 20px;
		background: black;
		color: white;
		font-size: 16px;
	}
	```

	In this situation we can keep our HTML unchanges, but instead tell the browser that the font size (and hence the unwanted spaces) of the parent container should be zero, essentially hiding the spaces. Since the font size is an inherited property, we then need to re-set the font size on the inline-block elements.

### floating quirks

Floated elements are not without their own quirks. A classic problem arises when you have floated elements inside a non-floated parent.

```html
<section>
	<div class="test-float">box 1</div>
	<div class="test-float">box 2</div>
	<div class="test-float">box 3</div>
</section>
```

```css
.test-float {
	margin-right: 20px;
	background: black;
	color: white;
	float: left;
}

section {
	background: blue;
	padding: 20px;
}
```

![Float Quirk](float-quirk.png)

This looks almost good, with one problem. The blue background of the parent section is nowhere to be found. This is because non-floated elements don't calculate their height properly when they have floated children. The height of the parent section is actually zero. One fix to this might be to float the parent section. Then everything will behave properly, except you might not want that particular element floated. **The best solution is to set `overflow: hidden` on the parent section**.

Why does setting `overflow: hidden` cause the parent to behave properly? Basically setting this property forces the parent to re-calculate its height and display itself in the way that we would expect.

