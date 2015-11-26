app.directive('audios', function($sce) {
  return {
    restrict: 'A',
    scope: { mp3:'=', ogg:'=' },
    replace: true,
    template: '<audio controls><source src="{{ogg_url}}" type="audio/ogg"><source src="{{mp3_url}}" type="audio/mpeg"></audio>',
    link: function (scope) {
        scope.$watch('mp3', function (newVal, oldVal) {
           if (newVal !== undefined) {
               scope.mp3_url = $sce.trustAsResourceUrl(newVal);
           }
        });

        scope.$watch('ogg', function (newVal, oldVal) {
           if (newVal !== undefined) {
               scope.ogg_url = $sce.trustAsResourceUrl(newVal);
           }
        });

       /* scope.setUrl = function(){
          scope.mp3_url = $sce.trustAsResourceUrl(scope.mp3);
          scope.ogg_url = $sce.trustAsResourceUrl(scope.ogg);
        };*/

    }
  };
});