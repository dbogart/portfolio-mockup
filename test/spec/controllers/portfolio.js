'use strict';

describe('Controller: PortfolioCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioMockupApp', 'portfolioMockupApp.services'));

  var PortfolioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $scope, $log, $stateParams, $state, $rootScope, portService, portfolioCreateService) {
    scope = $rootScope.$new();
    PortfolioCtrl = $controller('PortfolioCtrl', {
      $scope: scope
    });
  }));

  it('should have a list of 5 tabs by default', function () {
    expect(scope.tabs.length).toBe(5);
  });
});
