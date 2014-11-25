'use strict';

angular.module('portfolioMockupApp.services').factory('portfolioCreateService', function ($rootScope, $log) {
    var service = {};
    service.newTab = {};
    var currentTabs = [];
    var dropdownTabs = [];
    var notUnique = false;
    var currentMaxId;

    service.setMaxId = function (maxId) {
        currentMaxId = parseInt(maxId);
    };

    service.createPortfolio = function(portName, portGroup){
        this.newTab.title = portName;
        this.newTab.group = portGroup;
        this.newTab.id = currentMaxId + 1;   
        
        //private groups given red tags
        if (portGroup === 'Private') {
            this.newTab.groupLabel = 'label-danger';
        } else {
            this.newTab.groupLabel = 'label-success';
        }
        
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

    service.passTab = function(tab) {
        dropdownTabs.push(tab);
    };

    service.getDropdownTabs = function() {
        return dropdownTabs;
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
