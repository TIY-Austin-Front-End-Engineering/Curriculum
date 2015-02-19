app.controller('ListCtrl', function($scope, $timeout) {
	$scope.desserts = [
		'Paczki',
		'Waffles',
		'Chocolate Cake',
		'Baked Alaska',
		'Pecan Pie',
		'Tiramisu',
		'Bazuki'
	];

	$scope.dessertObjs = [
		{ name: 'Paczki', yumFactor: 'yum' },
		{ name: 'Waffles', yumFactor: 'yuum' },
		{ name: 'Chocolate Cake', yumFactor: 'yuuum' },
		{ name: 'Baked Alaska', yumFactor: 'yum' },
		{ name: 'Pecan Pie', yumFactor: 'yuuuuuum' },
		{ name: 'Tiramisu', yumFactor: 'yuuuum' },
		{ name: 'Bazuki', yumFactor: 'yuuuuuum' }
	];


	$scope.colors = {
		red: '#FF0000',
		green: '#00FF00',
		blue: '#0000FF',
	};

	$scope.add = function(dessertName) {
		$scope.desserts.push(dessertName);
	};
});