'use strict';

angular.module('portfolioMockupApp').controller('DropdownCtrl', function ($scope, $log, portfolioCreateService) {
  $scope.items = portfolioCreateService.getDropdownTabs();

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
});