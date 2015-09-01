# CSS Transitions

### You should already know about
* [CSS Basics](../css-basics/README.md)

CSS transitions (different than CSS animations) allow us to add some visual flare to our websites. Transitions allow us to animate CSS properties over a specified period of time from an initial state to a final state. For example, adding a CSS class to an element or hovering over an element can both cause a CSS transition to occur.

CSS transitions are defined using the `transition` property, which takes three pieces of information:

1. [Optional] The delay: how long the browser should wait before starting the animation.
2. The duration (amount of time) that the animation should take.
3. The property that we'd like to animate.
4. [Optional] easing information.

Here's a common example:

```css
button {
	background-color: blue;
	transition: 0.5s background-color;
}

button:hover {
	background-color: green;
}
```

Instead of the background changing immediately to the color green when a user mouses over the button, it will slowly fade (transition) to green over the course of 0.5s. Notice that the transition is added to the default state of the element, not to the hover state.

Not all properties, however, can be the target of a transition. Some properties don't make sense to transition because there is no "in between" state. For example, the `display` property cannot be animated. An element is either floated or not. There is nothing to transition between. [Here is a complete list](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) of all properties that can and cannot be animated in CSS.

Multiple properties can be transitioned on a single element. For example if we wanted to change the background color and increase the padding when an element was moused over, we could use the following CSS:

```css
button {
	padding: 0;
	background-color: blue;
	transition: 0.5s background-color, 0.5s padding;
}

button:hover {
	padding: 10px;
	background-color: green;
}
```

Notice that we simply list out all of the properties that we would like to include in the transition.

The transition property can optionally take a parameter that specifies the *easing* of the transition. If you've done any animation before this term is probably familiar. If it's not, easing basically specifies how fast the transition should go at each step along the way. For example, a value of `ease-in` will start off the transition slowly and then speed it up towards the end. [Here's a complete list](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) of possible values for easing.

CSS transition are fairly easy to set up, but not very flexible. For more complicated animations you can use [true CSS animations](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_animations).


## More Resources

There are a whole bunch of other HTML form elements designed for different purposes. We only touched on the most basic elements.

* [CSS transition property - CSS Tricks](https://css-tricks.com/almanac/properties/t/transition/)
* [CSS transition property - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
* [CSS Animated Properties - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)