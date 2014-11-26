'use strict';

angular.module('portfolioMockupApp').controller('DropdownCtrl', function ($scope, portfolioCreateService) {
  $scope.items = portfolioCreateService.getDropdownTabs();
  
  $scope.disableDropdown = portfolioCreateService.getDropdownClass();
  
  if ($scope.disableDropdown === 'true') {
    $scope.dropdownClass = 'disabled-dropdown';
  } else {
      $scope.dropdownClass = 'false';
  }

  $scope.$on('dropdownStatus', function(){
    $scope.disableDropdown = portfolioCreateService.getDropdownClass();
    if ($scope.disableDropdown === 'true') {
      $scope.dropdownClass = 'disabled-dropdown';
      console.log('updated');
    } else {
      $scope.dropdownClass = 'false';
    }
  });

  $scope.status = {
    isopen: false
  };

  // $scope.toggled = function(open) {
  //   $log.log('Dropdown is now: ', open);
  // };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
});