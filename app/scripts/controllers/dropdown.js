'use strict';

angular.module('portfolioMockupApp').controller('DropdownCtrl', function ($scope, portfolioCreateService) {
  $scope.items = portfolioCreateService.getDropdownTabs();
  
  $scope.disableDropdown = portfolioCreateService.getDropdownClass();
  
  $scope.$on('dropdownStatus', function(){
    $scope.disableDropdown = portfolioCreateService.getDropdownClass();
  });

  $scope.status = {
    isopen: false
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
});