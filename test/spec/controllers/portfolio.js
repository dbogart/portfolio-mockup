'use strict';

describe('Controller: PortfolioCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioMockupApp'));
  beforeEach(module('portfolioMockupApp.services'));

  var PortfolioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $log, $stateParams, $state, $rootScope) {
    scope = $rootScope.$new();
    PortfolioCtrl = $controller('PortfolioCtrl', {
      $scope: scope
    });
  }));

  it('should have a list of 5 tabs by default', function () {
    expect(scope.tabs.length).toBe(5);
  });

  it('should add the clicked result to the companies pane', function () {
    scope.results = ['result'];
    scope.companies = ['company1'];
    scope.addToPortfolio(scope.results[0]);
    expect(scope.companies.length).toBe(2);
  });

  it('should remove the clicked drug to from the drugs pane', function () {
    scope.results = ['result'];
    scope.drugs = ['drug'];
    scope.removeDrugFromPortfolio(scope.drugs[0]);
    expect(scope.drugs.length).toBe(0);
  });

  it('should remove the clicked company to from the companies pane', function () {
    scope.results = ['result'];
    scope.companies = ['company'];
    scope.removeFromPortfolio(scope.companies[0]);
    expect(scope.companies.length).toBe(0);
  });
});
