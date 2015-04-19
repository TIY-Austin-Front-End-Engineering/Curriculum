# CSS Specificity

CSS can get complicated. Since there are an infinite number of ways to use CSS selectors, you're bound to run into situations where two different blocks of CSS are competing to style the same element. In those situations, the browser needs a definitive way of determining which CSS should win out. This is where **CSS specificity** comes in to play.

## What if CSS blocks conflict?

Let's look at an example:

##### HTML
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

##### CSS
```css
span {
	color: red;
}
.foo {
	color: green;
}
```

In the example above there is a span element that also has a class of foo. Both of the CSS blocks are targeting that element and both are telling that element that its text should be a different color. Since the text color can't be both red and green, what color will it be?

There are two factors that come in to play when the browser goes to resolve this issue. The first, and most important, is the type of CSS selectors being used. It turns out that not all CSS selectors are created equal and some take precedence over others. The order of precedence is as follows:

1. Style Attribute
2. ID
3. Class, pseudo-class, and attribute
4. Element and pseudo-element

This means that all else being equal, properties specified in the style attribute on a HTML element will take precedence over CSS added with an ID selector, which will in turn take precedence over CSS added with a class selector, and so on. So in the example above, the span element with a class of foo would have a color of green because the CSS block that sets the color of green uses a class selector, and the CSS block that sets the color of red uses an element selector.

## What if there are multiple chained selectors?

Take the below code for example:

##### HTML
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
				<span class="foo" id="bar">a span</span>
				<div>a div</div>
				<section>
					<span id="baz">another span</span>
				</section>
			</div>
			<div class="foo">a div</div>
		</main>
	</body>
</html>
```

##### CSS
```css
main div .foo {
	color: red;
}
div #bar {
	color: green;
}
```

In this example we are using two element selectors and a class selector to target our span element and make its text color red. At the same time, we are using a single element selector and an id selector to make the same element green. What color will the element text be?

In this case the second CSS block will override the first because its most specific selector is an id selector, where the most specific selector for the first block is a class selector. No matter how many selectors we chain, we always look at the most specific selector first and use that to determine which rule will win out.

## What if two blocks have the same most specific selector?

In the case where two or more CSS blocks have equal specificity on their most specific selector, we then look at the second most specific selector and so on.

## The ultimate rule for determining CSS specificity

Here are four concrete steps that you can take to determine which CSS will win out.

1. Count up the total number of chained selectors for the *first* block and group them by their type (id, class, element, etc.). Then fill in the chart below with totals:

  ![Specificity Chart](css-specificity.png)

2. Count up the total number of chained selectors for the *second* block and group them by their type (id, class, element, etc.). Then fill in the chart below with totals:

  ![Specificity Chart](css-specificity.png)

3. Compare the two charts box by box starting on the left. If one box has a bigger number than the other then that CSS block wins out. If they are the same number, then move on to the next block and compare again.

4. If the numbers are identical on all columns, then whichever CSS appears lower pn the page wins.

## An !important note

At some point you might encounter some CSS code that looks like this:
```css
main div .foo {
	color: red !important;
}
```
The **!important** (pronounced "bang important") modifier tells the browser to throw all rules out the window and ensure that the property being modified has the specified value for all elements that the selector matches, regardless of specificity. I strongly recommend avoiding use of the !important modifier, because it produces behavoir that you might not expect. If two properties with !important modifiers conflict, then the browser calls back to regular css specificity rules.

## More Resources

* [Specifics on CSS Specificity](http://css-tricks.com/specifics-on-css-specificity/)
* [When using !important is the right choice](https://css-tricks.com/when-using-important-is-the-right-choice/)