// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import $ from 'jquery';

import TodoListView from './views/TodoListView';

let workTodoList = new TodoListView();
let personalTodoList = new TodoListView();

$('body').append(workTodoList.$el);
$('body').append(personalTodoList.$el);
