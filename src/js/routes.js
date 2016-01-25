'use strict';

angular.module('omdbApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	//this redirects unknown states to main
	$urlRouterProvider.otherwise('/');




		$stateProvider.state('main', {
			url: '/main',
			templateUrl: '../src/templates/main.html',
			controller: 'main'
		})
		.state('try', {
			url: '/try',
						templateUrl: '../src/templates/try.html',
						controller: 'try'
		})
		.state('movieList', {
			url: '/movieList',
						templateUrl: '../src/templates/movieList.html',
						controller: 'movieList'
    })
		.state('movieDetail', {
			url: '/movieDetail',
						templateUrl: '../src/templates/movieDetail.html',
						controller: 'movieDetail'
    })
.state('searchPage', {
			url: '/searchPage',
						templateUrl: '../src/templates/searchPage.html',
						controller: 'searchPage'
    });



}]);
