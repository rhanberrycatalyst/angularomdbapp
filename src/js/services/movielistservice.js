'use strict';


angular.module('omdbApp').service("movieListService", function(){
  var movieList = [];

  function addMovie(theMovie){
    myCollection.push(theMovie);
  }

  function listMovie(movieList){
    return movieList;
  }

  return{
    addMovie: addMovie,
    movieList: listMovie
  };

});
