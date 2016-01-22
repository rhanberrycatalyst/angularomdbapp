'use strict';

angular.module('omdbApp').controller('main', ['$scope', '$state', function($scope, $state){

	console.log($state);

	$scope.welcomeMsg = "You're in business!";

}]);
