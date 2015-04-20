# CSS Layout

### You should already know about
* [CSS Introduction](../css-introduction/README.md)
* [CSS Box Model](../css-box-model/README.md)

Stacking elements on top of each other is great and all, but sometimes we want a little bit more control over how elements are positioned on our page. There are three important CSS properties that give us control over the flow of our layout, **display**, **float**, and **clear**.

## display property

The `display` property is our greatest ally and greatest enemy when it comes to page layout. There are a whopping 26 possible values for the `display` property, and they are all considerably different. We will focus on the most important four values of the `display` property.

`display: none`

This is the simplest value to wrap our head around. It simply hides the element on the page. It completely removes it as if it were never there, unlike `visibility: hidden` where the invisible element will still take up space on the page even though it is hidden.

`display: block`

Elements with a block value for their display property (also known as **block level elements**) break the flow of the page, meaning they will not sit next to each other even if their is enough space. By default they will stack on top of each other. Block level elements are our primary tool for page layout. They are handy because you can set width, height, and margin on them and they behave according to the [CSS box model](../css-box-model/README.md).

`display: inline`

Inline elements will 

## float property

## clear property

## tips and tricks