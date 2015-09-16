'use strict';

$(document).ready(function() {

	// Step 1: select my elements
	var $collectionName = $('#collection-name');
	var $form = $('#form');

	// Step 2: create callback function
	function onDeleteCollection(e) {
		e.preventDefault();
		$.get(
			'http://tiyfe.herokuapp.com/collections/'+$collectionName.val(),
			onGetCollectionRecords,
			'json'
		);
	}

	function onGetCollectionRecords(response) {
		response.forEach(function(record) {
			var url = 'http://tiyfe.herokuapp.com/collections/'+$collectionName.val()+'/'+record._id
			console.log(url);
			$.ajax({
				url: url,
				method: 'DELETE'
			});
		});
	}

	// Step 3: add event listener
	$form.submit(onDeleteCollection);

});