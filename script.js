var app = angular.module("marbleApp", []);

app.controller('repeatCtrl', function($scope) {
	$scope.materials = 
		{name: 'Cosmic Black'}
	$scope.search = '';	
});



app.controller('searchController', function($scope, $http) {
	$http.get('mongodb://localhost/test').
	success(function(data) {
		$scope.materials = data;
	}).
	error(function(data, status, headers, config) {
		consol.log(status);
	});


	$scope.search = function (query){
		db.collection('materials').find({"material_name": query}).toArray(function(err, results) {
		console.log(results);
		});

		res.redirect('/');
	}
});