var app = angular.module('restApp',[]);


	
	app.service('restService',function($http,$p){
		var deferred = $q.defer();
		$http.get('resouces/data.json').then(function(data){
			deferred.resolve(data);
		});
		this.getData = function(){
		 return defered.promise;
		}
	})
	
	.controller('restController',['restService', function($scope,restService){
		var promise = restService.getData();
		promise.then(function(data){
			$scope.students = data.data;
			console.log($scope.team);
		})
	}]);