'use strict';

/**
 * @ngdoc function
 * @name portfolioMockupApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the portfolioMockupApp
 */
angular.module('portfolioMockupApp')
  .controller('PortfolioCtrl', function ($scope, $log, $stateParams, $state, $rootScope, portService, portfolioCreateService, dataResource) {
    
    $scope.items = {};
    $scope.portId = $stateParams.portId;

    $scope.refreshItems = function (queryText) {
        if (queryText.length > 2) {
            var params = {keyword: queryText};          
            $scope.loading = true;
            $scope.items = dataResource.query(params);
            console.log($scope.items);
        }
    };

    $scope.$on('$stateChangeSuccess', function () {

        $scope.companies = portService.companies($state.params.portId);
        $scope.drugs = portService.drugs($state.params.portId);
        $scope.setActiveTab();
        $scope.activeTab = _.findWhere($scope.tabs, {'active': true});

    });

	$scope.addToPortfolio = function (index) {
        if ($scope.items[index].thisType === 'Drug') {
            $scope.drugs.push($scope.items[index].thisName);
        } 
        else if ($scope.items[index].thisType === 'Company') {
            $scope.companies.push($scope.items[index].thisName);
        }
        $scope.items.splice(index, 1);
    };
	$scope.removeFromPortfolio = function (index) {
        // $scope.results.push($scope.companies[index]);
        $scope.companies.splice(index, 1);
    };
	$scope.removeDrugFromPortfolio = function (index) {
        // $scope.results.push($scope.drugs[index]);
        $scope.drugs.splice(index, 1);
    };
    $scope.addNewPortfolio = function () {
        console.log('test');
    };

    $scope.maxId = function () {
        portfolioCreateService.setMaxId($scope.tabs[$scope.tabs.length - 1].id);
    };

    $scope.collapsedTabs = function (tab) {
        if ($scope.tabs.length > 9) {
            portfolioCreateService.passTab(tab);
        }
    };

	$scope.tabs = [
		{ title:'Portfolio 1', id: '1', group: 'Group', active: false, groupLabel: 'label-success' },
		{ title:'Portfolio 2', id: '2', group: 'Private', active: false, groupLabel: 'label-danger' },
		{ title:'Portfolio 3', id: '3', group: 'Group', active: false, groupLabel: 'label-success' },
		{ title:'Portfolio 4', id: '4', group: 'Group', active: false, groupLabel: 'label-success' },
		{ title:'Portfolio 5', id: '5', group: 'Private', active: false, groupLabel: 'label-danger' }
	];

    //set max Id
    $scope.maxId();

    //function to create array of portfolio names for uniqueness check
    $scope.setCurrentPortfolio = function () {
        $scope.tabs.forEach(function (tab) {
            var tabName = tab.title;
            portfolioCreateService.setCurrentPortfolio(tabName);
        });
    };

    //create new portfolio tab
    $scope.$on('portfolioCreated', function(){
        
        $log.info('....portfolioCtrl notified of portfolioCreated event');
        var _newTab = portfolioCreateService.getCreatedPortfolio();
        
        //push new tab to the tabs collection
        $scope.tabs.push(_newTab);

        //push tab to dropdown if it is #10 or more
        $scope.collapsedTabs(_newTab);

        //clear tab vars
        portfolioCreateService.clearCreatedPortfolio();

        //set the new max id
        $scope.maxId();

        //create array of port names for uniqueness check
        $scope.setCurrentPortfolio(); 

        //enable/disable dropdown
        portfolioCreateService.dropdownStatus($scope.tabs.length);
    });

    //limit tabset to 9 tabs max
    $scope.quantity = 9;

    //function loops through each tab to check if current state matches that tab. if so, tab is set to active, which reflects in view
    $scope.setActiveTab = function () {
        $scope.tabs.forEach(function (tab) {
            tab.active = ($state.params.portId === tab.id);
        });
    };

    //set active tab on page load
    $scope.setActiveTab();

    //create array of port names on load
    $scope.setCurrentPortfolio(); 

    //enable/disable dropdown
    portfolioCreateService.dropdownStatus($scope.tabs.length);

});

