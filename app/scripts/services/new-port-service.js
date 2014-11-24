'use strict';

angular.module('portfolioMockupApp.services').factory('portfolioCreateService', function ($rootScope, $log) {
    var service = {};
    service.newTab = {};
    var currentTabs = [];
    var notUnique = false;
    
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

    service.setCurrentPortfolio = function(tabName) {
        currentTabs.push(tabName);
    };

    service.checkDupes = function(portName) {
        // how can we access tabs.title to check for duplicates?
        for(var i = 0, len = currentTabs.length; i < len; i++) {
            if (currentTabs[i] === portName) {
                notUnique = true;
                return notUnique;
            } else {
                notUnique = false;                
                $log.info('unique portfolio name detected');
            }            
        }
    };
    
    return service;
});
