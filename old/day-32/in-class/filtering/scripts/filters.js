angular.module('basic.filters', [])
.filter('prefix', function() {
	return function(input, prefix) {
		return prefix + input;
	};
})
.filter('abbrFilter', function() {
	return function(states, filterString) {
		return _.filter(states, function(state) {
			if(state.abbreviation.toLowerCase().indexOf(filterString.toLowerCase()) >= 0) {
				return true;
			}
			else {
				return false;
			}
		});
	};
})
.filter('asd', function() {
	return [];
});