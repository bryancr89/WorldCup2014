'use strict';

angular.module('mean').controller('TeamCtrl', ['$scope', '$stateParams', '$location', 'Global', 'Teams',
    function($scope, $stateParams, $location, Global, Teams) {
        $scope.global = Global;

        $scope.all = function() {
            Teams.query(function(teams) {
                $scope.teams = teams;
            });
        };
        $scope.go = function ( path ) {
            console.log(path);
            $location.path(path);
        };

        $scope.findOne = function() {
            Teams.get({
                teamId: $stateParams.teamId
            }, function(team) {
                $scope.team = team;
            });
        };
    }
]);
