# CSS Media Queries

### You should already know about
* [CSS Introduction](../css-introduction/README.md)

The web has evolved from a tool that was originally designed to share documents to interactive webpages and apps that are used across a whole slew of devices. With modern web development we can't ignore the ever growing percentage of mobile devices being used to view the content we create.

THe problem we run into as web developers is that providing a good user experience across multiple different devices and screen sizes is quite difficult. On of the more powerful tools in our toolbox to assist with this is media queries. Media queries allow us to apply different CSS rules depending on different conditions (ie. screen size).

The CSS you have been writing thus far has applied to selected elements regardless of screen size. Media queries give you more control over which CSS rules apply in which situations. Here's how they work:

```css
@media (min-width: 480px) {
	.banner {
		height: 400px;
	}
}
```

Notice that we have nested curly braces here. The outer block specifies which conditions must be met for the CSS rules inside to be applied. In this particular case, elements with a class of banner are given a height of 400px *only if the screen is 480px wide or higher*. This outer block is called a **media query**. `min-width` is the most commonly used media query, but there are a [slew of other queries](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries) that are available.

We often call this particular type of media query (that is based on window width) a *breakpoint*. Generally we develop 3-4 breakpoints for our pages, so that they are optimized for small, medium, large, and extra-large screen sizes.

It has become best practice to use `min-width` instead of `max-width`. It's a subtle difference, but with `max-with`, your default CSS (the CSS that's being written outside of a media query) is designed for your largest (desktop) breakpoints, whereas if you use `min-width`, your default CSS is designed for your smallest (mobile) breakpoint. The process of building out your mobile breakpoints first is called **mobile first development** and is generally regarded as best practice for several reasons.

1. It's much easier to start with the simple, mission critical (mobile) content and add on to it as you have more space.
2. Mobile devices are more often on slower internet connections and have slower processors, therefore fast page load times are much more important. If your site is set up to display the mobile breakpoint by default then the browser is able to load mobile pages faster.
3. Mobile breakpoints are harder to design because you have less room to work with. Building them out first will force you to solve the difficult problems first, and in many cases prevent you from having to go back and undo or redo work.

## Tips and Tricks

1. You can use the `display` property to selectively show or hide elements based on a media query.
2. You can use the `float` property on block elements to change where they appear on a page based on a media query.


## More Resources

* [CSS media queries - MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries)
* [@media - Codrops](http://tympanus.net/codrops/css_reference/media/)