'use strict';

angular.module('omdbApp').controller('try', ['$scope', '$state', function($scope, $state){
    console.log($state);

    $scope.testdialog = "trying a test dialog";
}]);
