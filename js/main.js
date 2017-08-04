(function(angular) {
  	'use strict';
	var app = angular.module('appmain', [])
	app.controller('contentDataTable', ['$scope','$http', function($scope, $http) {
		
		$http({
	        method : "GET",
	        url : "http://api.randomuser.me/?results=50"
	    }).then(function mySucces(RES) {

	        $scope.dataTable = RES.data;

	    }, function myError(RES) {

	        $scope.messageError = RES.data.info;

	    });

  	}]);

})(window.angular);
