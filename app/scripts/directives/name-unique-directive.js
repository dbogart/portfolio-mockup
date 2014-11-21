// no longer attempting to use this directive
'use strict';

angular.module('portfolioMockupApp.directives', [])
  .directive('nameUnique', function($resource, $timeout) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      var stopTimeout;
      return scope.$watch(function() {
        return ngModel.$modelValue;
      }, function(name) {
        $timeout.cancel(stopTimeout);
        
        if (name === '') {
          ngModel.$setValidity('unique', true);
        }
        
        //This line needs to change to check for internal names
        var Model = $resource('/api/' + attrs.nameUnique);
        
        stopTimeout = $timeout(function() {
          Model.query({
            name: name,
          }, function(models) {
            return ngModel.$setValidity('unique', models.length === 0);
          });
        }, 200);
      });
    }
  };
});