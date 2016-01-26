'use strict';

angular.module('omdbApp')
  .controller('movieList', ['$scope', '$state', '$http', 'movieListService',
                                            function($scope, $state, $http, movieListService){
        $scope.theMovie = movieListService.listMovie();
  }]);
