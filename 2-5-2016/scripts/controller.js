app = angular.module('myApp',[]);

	app.controller('appController',function($scope){
		$scope.msg = "my name is Harsh"
	});

	app.directive('myInfoMsg',function(){
		return{
				template:'<strong>{{msg}}</strong>'
		};		
	});

