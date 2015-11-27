var app = angular.module('app', []);

app.controller('myController', ['$scope', '$http', function($scope, $http){

    $scope.search = "";

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

    $scope.searchResult = function(word){
        return word.Eng_Word.toLocaleLowerCase().indexOf($scope.search.toLocaleLowerCase()) >= 0
            || word.Eng_Sentence.toLocaleLowerCase().indexOf($scope.search.toLocaleLowerCase()) >= 0;
    };

}]);

app.filter('highlight', function($sce) {
    return function(text, phrase) {
      if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
        '<span class="highlighted">$1</span>')

      return $sce.trustAsHtml(text)
    }
  })