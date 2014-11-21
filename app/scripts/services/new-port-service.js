'use strict';

angular.module('portfolioMockupApp.services').factory('portfolioCreateService', function ($rootScope, $log) {
    var service = {};
    service.newTab = {};
    
    service.createPortfolio = function(portName, portGroup){
        this.newTab.title = portName;
        this.newTab.group = portGroup;
        this.newTab.groupLabel = 'label-success';
        this.id = 10; // need a fn here to get max current id I guess.

        $log.info('...portfolioCreateService broadcasting that portFolio created');
        
        //notifies PortfolioCtrl of creation
        $rootScope.$broadcast('portfolioCreated');
    };
    
    service.getCreatedPortfolio = function(){
        return this.newTab;
    };
    
    service.clearCreatedPortfolio = function(){
        this.newTab = {};
    };

    service.checkDupes = function(portName) {
        // how can we access tabs.title to check for duplicates?
        for(var i = 0, len = $rootScope.tabs.length; i < len; i++) {
            if ($rootScope.tabs[i].title === portName) {
                console.log('duplicate');
                break;
            } else {                
                console.log('not dupe');
            }
        }
    };
    
    return service;
});
