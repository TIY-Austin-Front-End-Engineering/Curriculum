# CSS Positioning

### You should already know about
* [CSS Box Model](../css-box-model/README.md)
* [CSS Layout](../css-layout/README.md)

The CSS `position` property along with the `top`, `left`, `bottom`, and `right` properties give us further control over the position and layout of elements on our page. I use these as a last resort if I cannot get the page to behave as I want it to using traditional [box model](../css-box-model/README.md) and [layout](../css-layout/README.md) techniques.

`position: static`
---

`static` is the default value of the position property. Likely everything you have experienced thus far has been statically positioned. Use static positioning whenever possible because it is predictable and easy to modify. You *cannot* use the `top`, `bottom`, `left`, and `right` properties on statically positioned content. They will be ignored.

`position: relative`
---

Relatively positioned elements behave much like static elements, except that they do accept the `top`, `bottom`, `left`, and `right` properties. If you set `top: 10px` on a relatively positioned element, it will sit 10 pixels lower than if it were positioned statically.

`position: absolute`
---

Absolutely positioned elements respect the `top`, `bottom`, `left`, and `right` properties like relatively positioned elements, except that the coordinates that you set for those properties are not relative to where the element would normally appear. Instead, they are relative to the first *non statically positioned ancestor element*. Take a sec to let that sink in. Got it?

`position: fixed`
---

Fixed position elements respect the `top`, `bottom`, `left`, and `right` properties and are positioned relative to the *browser window*. That means if you set `top: 0`, `left: 0` on a fixed position element, it will sit in the upper left corner of your page, *even if you scroll down*. Fixed position elements won't scroll off the page like other elements. They will just stick to their spot.

## More Resources

* [Position Property - shayhowe](http://learn.shayhowe.com/advanced-html-css/detailed-css-positioning/#position-property)
* [CSS Positioning 101](http://alistapart.com/article/css-positioning-101)