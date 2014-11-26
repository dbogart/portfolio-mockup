'use strict';

angular.module('portfolioMockupApp.services').factory('dataResource', function ($resource) {
        var baseUrl = 'http://www.adverseevents.com/api/search';
        return $resource(baseUrl);
});