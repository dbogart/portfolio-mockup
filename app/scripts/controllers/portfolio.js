'use strict';

/**
 * @ngdoc function
 * @name portfolioMockupApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the portfolioMockupApp
 */
angular.module('portfolioMockupApp')
  .controller('PortfolioCtrl', function ($scope) {
    $scope.portItems = [
      'Actavis',
      'Arava',
      'Avacor',
      'Avagard'
    ];
    $scope.companies = [
      'Regeneron',
      'Biogen',
      'Celgene'
    ];
    $scope.drugs = [
      'Avandia',
      'Avastin',
      'Ambien'
    ];
    $scope.events = [
      	{ product: 'Avastin', headline: 'Docetaxel Drug Label Update: A Comparative Safety Analysis' },
      	{ product: 'Arava', headline: 'AEI Analysis Produces Skin Cancer Safety Signal for Xeljanz Prior to FDA Safety Alert' },
      	{ product: 'Ambien', headline: 'Safety Labeling Changes' }
    ];
	$scope.addToPortfolio = function (index) {
        $scope.companies.push($scope.portItems[index]);
        $scope.portItems.splice(index, 1);
    };
	$scope.removeFromPortfolio = function (index) {
        $scope.portItems.push($scope.companies[index]);
        $scope.companies.splice(index, 1);
    };
	$scope.removeDrugFromPortfolio = function (index) {
        $scope.portItems.push($scope.drugs[index]);
        $scope.drugs.splice(index, 1);
    };
	$scope.tabs = [
		{ title:'Portfolio 1', content:'Portfolio 1' },
		{ title:'Portfolio 2', content:'Portfolio 2' },
		{ title:'Portfolio 3', content:'Portfolio 3' },
		{ title:'Portfolio 4', content:'Portfolio 4' },
		{ title:'Portfolio 5', content:'Portfolio 5' },
	];

});

