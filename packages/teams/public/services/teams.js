'use strict';

//Teams service used for articles REST endpoint
angular.module('mean').factory('Teams', ['$resource',
    function($resource) {
        return $resource('teams/:teamId', {
            teamId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);

