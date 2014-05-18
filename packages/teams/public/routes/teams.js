'use strict';

angular.module('mean').config(['$stateProvider',
    function ($stateProvider) {
        var checkLoggedin = function($q, $timeout, $http, $location) {
            // Initialize a new promise
            var deferred = $q.defer();

            // Make an AJAX call to check if the user is logged in
            $http.get('/loggedin').success(function(user) {
                // Authenticated
                if (user !== '0') $timeout(deferred.resolve);

                // Not Authenticated
                else {
                    $timeout(deferred.reject);
                    $location.url('/login');
                }
            });

            return deferred.promise;
        };

        $stateProvider
            .state('all teams', {
                url: '/teams',
                templateUrl: 'teams/views/list.html',
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .state('team by id', {
                url: '/teams/:teamId',
                templateUrl: 'teams/views/team.html',
                controller: 'TeamCtrl',
                resolve: {
                    loggedin: checkLoggedin
                }
            });
    }
]);
