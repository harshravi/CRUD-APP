var app = angular.module("crudApp",[]);

	app.controller("crudController",function($scope){
		
		$scope.users = [
			{"name":"Rahul","balance": 200},
			{"name":"Anil","balance": 400},
			{"name":"Vinod","balance": 500},
			{"name":"Sonu","balance": 300}
		];
		
		$scope.addNew = function(user){
			alert("add new User" );
			$scope.users.push(user);
		
		};
		
		$scope.remove = function(user){
			var index = $scope.users.indexOf(user);
			/* alert("Deleting Index:" + index) */
			$scope.users.splice(index,1);
		};
		
		$scope.save = function(user){
			$scope.current = {};
		
		};
		
		$scope.edit = function(user){
			/* alert("Edit Index" + user) */
			$scope.current = user;
		};
		
		$scope.current = {};
		$scope.history = [];
        $scope.Undo = function () {
            // Add last / most recent historical record to the main records
            $scope.records.push($scope.history[ $scope.history.length - 1 ]);
            // Remove last / most recent historical record
            $scope.history.pop();
        }	
	});