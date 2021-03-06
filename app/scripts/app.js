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
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'xeditable',
    'ui.router',
    'portfolioMockupApp.services',
    'portfolioMockupApp.directives'
  ])
	.config(function($stateProvider, $urlRouterProvider) {

  	// For any unmatched url, redirect to /portfolio
	$urlRouterProvider.otherwise('/portfolio/port/1');

	// States
	$stateProvider
	.state('portfolio', {
		url: '/portfolio',
		templateUrl: 'views/portfolio.html',
		controller: 'PortfolioCtrl',
	})
	.state('portfolio.port', {
	    url: '/port/:portId',
	    stateParams: '@portId',
	    views: {
	        'results': {
	            templateUrl: 'partials/results.html'
	        },
	        'events': {
	            templateUrl: 'partials/events.html'
	        },
	        'companies': {
	            templateUrl: 'partials/companies.html'
	        },
	        'drugs': {
	            templateUrl: 'partials/drugs.html'
	        },
	        'search': {
	            templateUrl: 'partials/search.html'
	        },
	        'dropdown': {
	            templateUrl: 'partials/dropdown.html'
	        }
	    } 
	});
	})
	.run(function(editableOptions) {
		editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
