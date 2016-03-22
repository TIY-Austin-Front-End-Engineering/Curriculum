$('section').on('click', function(e) {
	console.log($('section'));
	console.log(e.target);
	// var jqueryEl = $(e.target);
	// console.log(e.target);
	// console.log(jqueryEl);
	// console.log(jqueryEl.html());
	// console.log(e.target.innerHTML);
	$(e.target).css({
		background: $(e.target).html()
	});
	$(e.target).slideDown(1000);


});

$('.red').on('click', function(e) {
	console.log(this);
	console.log(e.target);
});


$('body').on('click', function(e) {
	console.log(this);
	console.log(e.target);
});