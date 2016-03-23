// 1. select for element
var form = $('form');
var todos = [];

// 2. add the event listener
form.on('submit', function(e) {
	// 3. create the function to handle the event
	e.preventDefault();
	var input = $('.todo-input');
	// input.value = '';
	todos.push(input.val());
	input.val('');
	console.log(todos);
	render(todos);
});

function render(list) {
	// 1. convert the list into a string
	var formattedList = list.map(function(listItem) {
		return '<div>'+listItem+'</div>'
	});
	console.log(formattedList);

	$('.list').html(formattedList);
	// var section = document.querySelector('.list');
	// section.innerHTML = formattedList;

	// function formatItem(listItem) {

	// }

	// list.map(formatItem);


	// // 2. put that html string into our section
	// var listElement = $('.list');
	// // listElement.innerHTML = list;
	// listElement.html(list);
}

