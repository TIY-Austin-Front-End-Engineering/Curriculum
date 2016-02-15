# Vanilla Todo List

## Description

Create a very simple todo list.

## Explorer Mode

1. Create a simple web page that has an input text box, a button, and an empty section below the textbox and button.
2. Use an event listener and event handler to console.log whatever is in the input box whenever the button is clicked.
3. Create an empty array. Whenever the button is clicked, whatever is in the input box should be added to the array.
4. Create a function called `render` that clears out all of the html inside of the section.
5. Inside your render function, after the contents of your section is cleared, iterate over your array and build up a HTML string that contains all of the todo items in your array. Then set that newly created string to the contents of your section.

##### What to Submit

A link to a repository with the following files:
* scripts/main.js
* index.html

## Adventurer Mode

Notice that when you refresh your todo list app all of your todo items disappear. Read up on [window.localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) to save todo items as they are added and re-load them when the page loads.

## Epic Mode

* See if you can figure out how to let the user mark the tasks as complete with a checkbox or button next to the todo.
