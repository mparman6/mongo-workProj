var myApp = angular.module('myApp', []);

myApp.controller('searchController', ['$scope', function($scope) {
	$scope.search = '';
	$scope.submit = function() {
		$scope.search = this.val();
	}
}]);