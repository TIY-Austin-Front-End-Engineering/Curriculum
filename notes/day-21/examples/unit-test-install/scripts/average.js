function sum() {

}

function average() {
	var args = [].slice.call(arguments);
	console.log(args);
}

module.exports = {
	avg: average,
	sum: sum
};