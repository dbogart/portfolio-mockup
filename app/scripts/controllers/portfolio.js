'use strict';

/**
 * @ngdoc function
 * @name portfolioMockupApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the portfolioMockupApp
 */
angular.module('portfolioMockupApp')
  .controller('PortfolioCtrl', function ($scope, $log, $stateParams, $state, $rootScope, portService, portfolioCreateService) {
    
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
    $scope.addNewPortfolio = function () {
        console.log('test');
    };

    //create new portfolio tab
    $scope.$on('portfolioCreated', function(){
        
        $log.info('....portfolioCtrl notified of portfolioCreated event');
        var _newTab = portfolioCreateService.getCreatedPortfolio();
        
        $scope.tabs.push(_newTab);
        portfolioCreateService.clearCreatedPortfolio();
    });

	$scope.tabs = [
		{ title:'Portfolio 1', id: '1', group: 'Marketing', active: false, groupLabel: 'label-success' },
		{ title:'Portfolio 2', id: '2', group: 'Private', active: false, groupLabel: 'label-danger' },
		{ title:'Portfolio 3', id: '3', group: 'Outcomes', active: false, groupLabel: 'label-success' },
		{ title:'Portfolio 4', id: '4', group: 'PV', active: false, groupLabel: 'label-success' },
		{ title:'Portfolio 5', id: '5', group: 'Private', active: false, groupLabel: 'label-danger' }
	];

    //function loops through each tab to check if current state matches that tab. if so, tab is set to active, which reflects in view
    $scope.tabs.forEach(function (tab) {
         tab.active = ($state.params.portId === tab.id);
    });

    $scope.tabs.forEach(function (tab) {
        var tabName = tab.title;
        portfolioCreateService.setCurrentPortfolio(tabName);
    });

});

