var count = 1;

function increaseCount() {
	count++;
}


/////////

var count = 1;


function increaseCount(data) {
	return data++;
}

count = increaseCount(count);


/////////

// This is an array of names
var names = ['Maria', 'Dana', 'Will', 'Anna', 'Aaron', 'Mary'];


// input: a single name
// output: that name wrapped in an li element
function wrapInLi(name) {
	return '<li>'+name+'</li>';
}

// input: a single name
// output: returns true if it has the letter a in it
function hasLetterA(name) {
	return (name.toLowerCase().indexOf('a') !== -1);
}

// names.filter(hasLetterA);

// var filteredNames = names.filter(hasLetterA);
// var liNames = filteredNames.map(wrapInLi);

function hasSubstring(name) {
	return name.toLowerCase().includes($('input').val().toLowerCase());
}

$('.names').append(names.map(wrapInLi));

$('input').keyup(function(e) {
	e.preventDefault();
	var elements = names.filter(hasSubstring).map(wrapInLi);
	$('.names').html(elements);
});


// function doStuff() {
// 	var count = 0;
// }

var studentsWithoutNames;
var collectionUrl = 'http://small-tiyfe.herokuapp.com/collections/feb2016_students';

function isMissingName(studentObject) {
	return !studentObject.name;
}

function onGetSuccess(data) {
	console.log(data);
	studentsWithoutNames = data.filter(isMissingName);
	console.log(studentsWithoutNames);
	studentsWithoutNames.forEach(deleteStudent)
}

function onGetError(err) {
	console.log(err);
}

function deleteStudent(studentObject) {
	var deleteSettings = {
		url: collectionUrl+'/'+studentObject._id,
		type: 'delete',
		dataType: 'json',
		success: function(data) {
			console.log(data);
		},
		error: function(data) {
			console.log(data);
		}
	};
	$.ajax(deleteSettings);
}

var getSettings = {
	url: collectionUrl,
	type: 'get',
	dataType: 'json',
	success: onGetSuccess,
	error: onGetError
};

$.ajax(getSettings);




