'use strict';

/**
 * @ngdoc function
 * @name portfolioMockupApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the portfolioMockupApp
 */
angular.module('portfolioMockupApp')
  .controller('PortfolioCtrl', function ($scope, portService, $stateParams, $state) {
    
    $scope.portId = $stateParams.portId;

    $scope.$on('$stateChangeSuccess', function () {

        $scope.results = portService.results($state.params.portId);
        $scope.companies = portService.companies($state.params.portId);
        $scope.drugs = portService.drugs($state.params.portId);
        $scope.events = portService.events($state.params.portId);

    });
        
	$scope.addToPortfolio = function (index) {
        $scope.companies.push($scope.results[index]);
        $scope.results.splice(index, 1);
    };
	$scope.removeFromPortfolio = function (index) {
        $scope.results.push($scope.companies[index]);
        $scope.companies.splice(index, 1);
    };
	$scope.removeDrugFromPortfolio = function (index) {
        $scope.results.push($scope.drugs[index]);
        $scope.drugs.splice(index, 1);
    };
	$scope.tabs = [
		{ title:'Portfolio 1', id: '1', active: false },
		{ title:'Portfolio 2', id: '2', active: false },
		{ title:'Portfolio 3', id: '3', active: false },
		{ title:'Portfolio 4', id: '4', active: false },
		{ title:'Portfolio 5', id: '5', active: false },
	];

    //function loops through each tab to check if current state matches that tab. if so, tab is set to active, which reflects in view
    $scope.tabs.forEach(function (tab) {
         tab.active = ($state.params.portId === tab.id);
    });
});

