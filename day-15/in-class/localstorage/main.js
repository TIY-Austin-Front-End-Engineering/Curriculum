(function() {
	// localStorage.setItem('name', 'Aaron Larner');
	var myObjectString = JSON.stringify({firstName: 'Aaron', lastName: 'Larner'});
	console.log(localStorage.setItem('person', myObjectString));
})();


<tr class="entry" data-id="3"><td>


function(e) {

	var i = $(this).data('id');

	i = parseInt(i);
}