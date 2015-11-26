var app = angular.module('app', []);

app.controller('myController', ['$scope', '$http', function($scope, $http){
    $http.get("js/note.json")
        .success(function(data){
            $scope.itemList = data.reverse();
            $scope.selectedWeek = data[0].Week;
            
            console.log(data);
        })
        .error(function(err){
            console.log(err);
        })

  	$scope.pre = function(){
  		if ($scope.selectedWeek > 1){
  			$scope.selectedWeek = $scope.selectedWeek-1;
  		}
  	};

  	$scope.next = function(){
  		if ($scope.selectedWeek < $scope.itemList.length){
  			$scope.selectedWeek = $scope.selectedWeek+1;
  		}
  	};
}])