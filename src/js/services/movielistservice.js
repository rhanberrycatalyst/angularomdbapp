'use strict';


angular.module('omdbApp').service('movieListService', function(){
  var movieList = [];

  function addMovie(theMovie){
    myCollection.push(theMovie);
  };

  function listMovie(){
    return movieList;
  };

  return{
    addMovie: addMovie,
    fetchMovies: listMovie
  };

});
