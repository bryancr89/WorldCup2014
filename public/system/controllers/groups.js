'use strict';

angular.module('mean.system').controller('GroupsCtrl', ['$scope', '$http', 'Global', function ($scope, $http, Global) {
    var promise = $http({
        url: '/groups',
        method: 'GET'
    });

    promise.success(function( data ) {
        $scope.groups = data;
    });
}]);