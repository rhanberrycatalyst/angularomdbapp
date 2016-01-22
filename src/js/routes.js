'use strict';

angular.module('omdbApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	//this redirects unknown states to main
	$urlRouterProvider.otherwise('/main');

		$stateProvider.state('main', {
			url: '/main',
			templateUrl: 'templates/main.html',
			controller: 'main'
		});

		$stateProvider.state('try', {
			url: '/try',
			templateUrl: 'templates/try.html',
			controller: 'try'
		});

		$stateProvider.state('/movieList', {
      templateUrl: 'views/movieList.html',
      controller: 'movieList'
    });

		$stateProvider.state('/movieDetail', {
      templateUrl: 'views/movieDetail.html',
      controller: 'MovieDetail'
    });

		$stateProvider.state('/searchPage', {
      templateUrl: 'views/searchPage.html',
      controller: 'searchPage'
    });

		

}]);
