'use strict';
var $ = require('jquery');
var QuarterbackModel = require('./models/QuarterbackModel');
var QuarterbackCollection = require('./collections/QuarterbackCollection');

$(document).ready(function() {

	var qbCollection = new QuarterbackCollection();
	qbCollection.on('add', function(qb) {
		var $row = getModelRow(qb);
		$('#qb-players').append($row);
	});

	$('#player-form').submit(function(e) {
		e.preventDefault();
		var playerName = $('#name').val();
		var playerTeam = $('#team').val();

		var newQb = new QuarterbackModel({
			name: playerName,
			team: playerTeam
		});

		qbCollection.add(newQb);

		console.log(newQb.get('name'));
	});

	function getModelRow(qbModel) {
		var $row = $('<tr />');

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

		return $row;
	}

});