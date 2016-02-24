// Use an event listener and event handler to console.log whatever is in the input box whenever the button is clicked.
function handleInput(e) {
  var input = document.getElementById('input');
  todos.push(input.value);
  return todos;
};
document.getElementById('button').addEventListener('click', render);

// Create an empty array. Whenever the button is clicked, whatever is in the input box should be added to the array.
var todos = [];

// Create a function called render that clears out all of the html inside of the section.
function render(e) {
  arr = handleInput()
  var list = document.getElementById('todoList')
  list.innerHTML = '';
  var html = arr.map(function(item) {
    return '<li><input type="checkbox"/>' + item + '</li>'
  })
  list.innerHTML = html.join('');
}
