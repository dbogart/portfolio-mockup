'use strict';

angular.module('portfolioMockupApp.services').factory('dataResource', function ($resource) {
        var baseUrl = 'http://www.adverseevents.com/api/portfolio/search';
        return $resource(baseUrl);
});