'use strict';

angular.module('portfolioMockupApp').controller('DropdownCtrl', function ($scope, $log) {
  $scope.items = [
    'Additional Portfolio',
    'Additional Portfolio 2',
    'Additional Portfolio 3',
    'Additional Portfolio 4',
    'Additional Portfolio 5',
    'Additional Portfolio 6'
  ];

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