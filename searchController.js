var app = angular.module("marbleApp", []);

app.controller('SearchCtrl', function($scope) {
	$scope.categories = [
		{id: '1', name: 'Granite', route: '/granite', material_id: '35'},
		{id: '2', name: 'Marble', route: '/marble', material_id: '36'},
		{id: '3', name: 'Quartzite', route: '/quartzite', material_id: '43'},
	];
});