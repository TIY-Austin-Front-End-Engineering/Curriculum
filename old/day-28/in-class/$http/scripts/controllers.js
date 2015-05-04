angular.module('app.controllers', [])
.controller('HttpCtrl', function($scope, $http) {
	// Initializing $scope properties
	$scope.data = '';
	$scope.messages = [];


	// Make a get request to the server
	var promise = $http.get('http://tiny-pizza-server.herokuapp.com/collections/angular-http')
	.success(function(response) {
		// Successfully received a response from the server

		$scope.messages = [];
		for(var i=0; i<response.length; i++) {
			if(response[i].data) {
				$scope.messages.push(response[i]);
			}
		}
		// $scope.messages = response;
		console.log(response);
	})
	.error(function(err) {
		// Got an error back from the server
		console.log(err);
	});

	// Called when my button is clicked
	// Send the data to the server
	$scope.sendData = function(myData) {
		var myDataExists = false;
		for(var i=0; i<$scope.messages.length; i++) {
			if($scope.messages[i].data === myData) {
				myDataExists = true;
			}
		}

		if(myDataExists === false) {
			$http.post(
				'http://tiny-pizza-server.herokuapp.com/collections/angular-http',
				{data: myData}
			);
		}
		else {
			alert('That message already exists');
		}
	};
});