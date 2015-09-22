'use strict';

var QuarterbackModel = require('./models/QuarterbackModel');
var $ = require('jquery');

var stafford = new QuarterbackModel({
	name: 'Matthew Stafford',
	team: 'Detroit Lions',
	attempts: 1,
	id: 9
});

var manning = new QuarterbackModel({
	name: 'Eli Manning',
	team: 'NY Giants',
	attempts: 0,
	id: 10
});

showModel(manning);

$('#attempt-form').on('submit', function(e) {
	e.preventDefault();
	stafford.addAttempt($('#type').val(), $('#yards').val());
});

stafford.on('change', function() {
	showModel(stafford);
});
stafford.set({
	completions: 2,
	attempts: 3
});




function showModel(qbModel) {
	var $row = $('#qb'+qbModel.id).empty();

	$row
		.append($('<td />', {text: qbModel.get('name')}))
		.append($('<td />', {text: qbModel.get('team')}))
		.append($('<td />', {text: qbModel.get('attempts')}))
		.append($('<td />', {text: qbModel.get('completions')}))
		.append($('<td />', {text: qbModel.get('yards')}))
		.append($('<td />', {text: qbModel.get('touchdowns')}))
		.append($('<td />', {text: qbModel.get('interceptions')}))
		.append($('<td />', {text: qbModel.get('sacks')}))
		.append($('<td />', {text: qbModel.get('longestCompletion')}))
		.append($('<td />', {text: qbModel.yardsPerAttempt()}));
}