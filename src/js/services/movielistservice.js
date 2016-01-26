angular.module('omdbApp').service('movieListService', ['$http', function($http){
  var movieList = [];

  function addMovie(theMovie){
    myCollection.push(theMovie);
  }

  function listMovie(){
    return movieList;
  }

  return{
    addMovie: addMovie,
    movieList: listMovie
  }

}]);
