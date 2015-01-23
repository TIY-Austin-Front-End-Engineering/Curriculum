(function() {

	counter = 0;

	$('#text').click(onMyClick);

	function onMyClick() {
		counter++;
		console.log(counter);

	}

})();