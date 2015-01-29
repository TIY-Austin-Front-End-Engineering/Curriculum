$(document).ready(function() {
	var getMessages = function() {
		$.get(
			'http://tiny-pizza-server.herokuapp.com/collections/austinfe',
			function(messages) {
				render(messages);
			},
			'json'
		);
	};

	var render = function(messages) {
		var messageRow = _.template('<div class="row"><div><%= message %></div><div><%= name %></div></div>')
		$('#message-board').html('');
		for(var i=0; i<messages.length; i++) {
			if(messages[i].message && messages[i].name) {
				// 1. Create element
				var row = $(messageRow(messages[i]));

				// 2. Add click event
				row.click(function() {
					console.log('click');
				});

				console.l

				// 3. Add new element to the DOM
				$('#message-board').append(row);
				// console.log($('.row'));

				console.log('row length = '+row.length);
				console.log('.row length = '+$('.row').length);
				console.log('-----------');
			}
		}
	};

	// var makeRow = function(message) {
	// 	return '<div><div>'+message.message+'</div><div>'+message.name+'</div></div>'
	// }

	getMessages();

	// setInterval(getMessages, 1000);

	// $.post(
	// 	'http://tiny-pizza-server.herokuapp.com/collections/austinfe',
	// 	{
	// 		message: 'hello!',
	// 		name: 'A-Aron'
	// 	},
	// 	function(message) {
	// 		console.log(message)
	// 		// render(messages);
	// 	},
	// 	'json'
	// );
});