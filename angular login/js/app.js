var app = angular.module('authApp',['ngRoute']);

	app.controller('appController',function($scope){
	});


	app.config(['$routeProvider',function($routeProvider){
		$routeProvider
			.when('/',
				{
				controller:'loginController',
				templateUrl:'views/login.html'
				})
			.when('/register',
				{
				controller:'registerController',
				templateUrl:'views/register.html'
				})
			.otherwise({redirectTO:'/'});


	}]);