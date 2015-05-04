angular.module('basic.controllers', ['basic.services'])
.controller('TableCtrl', function($scope, $http) {
	var cachedStates = []
	$scope.states = [];
	$scope.filterString = '';
	$scope.sort = 'name';
	$scope.asc = true;

	$http.get('http://tiny-pizza-server.herokuapp.com/collections/fancy-table')
	.success(function(data) {
		$scope.states = data;
		cachedStates = data;
		$scope.filter($scope.filterString);
	})
	.error(function(error) {
		alert(error);
	});

	$scope.update = function(sort, asc) {
		if($scope.sort === sort) {
			console.log('switch');
			$scope.asc = !$scope.asc;
		}
		else {
			$scope.sort = sort;
			$scope.asc = true;
		}

		// $scope.filter($scope.filterString);
	};

	$scope.filter = function(filter) {
		filter = filter.toLowerCase();
		$scope.states = _.filter(cachedStates, function(state) {
			var found = (
				state.name.toLowerCase().indexOf(filter) >= 0 ||
				state.abbreviation.toLowerCase().indexOf(filter) >= 0
			);
			return found;
		});

		$scope.states = _.sortBy(
			$scope.states,
			function(state) {
				return state[$scope.sort];
			}
		);

		if(!$scope.asc) {
			$scope.states.reverse();
		}
	};

});