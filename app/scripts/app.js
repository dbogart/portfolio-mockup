'use strict';

/**
 * @ngdoc overview
 * @name portfolioMockupApp
 * @description
 * # portfolioMockupApp
 *
 * Main module of the application.
 */

var app;
app = angular
  .module('portfolioMockupApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'xeditable'
  ])
	.config(function ($routeProvider) {
	$routeProvider
	  .when('/', {
	    templateUrl: 'views/portfolio.html',
	    controller: 'PortfolioCtrl'
	  })
	  .when('/about', {
	    templateUrl: 'views/about.html',
	    controller: 'AboutCtrl'
	  })
	  .when('/portfolio', {
	    templateUrl: 'views/portfolio.html',
	    controller: 'PortfolioCtrl'
	  })
	  .otherwise({
	    redirectTo: '/'
	  });
	})
	.run(function(editableOptions) {
		editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
