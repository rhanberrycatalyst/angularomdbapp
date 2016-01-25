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
				views: {
					nav:{
						templateUrl: 'try.html'
					},

					content:{
						templateUrl: 'templates/try.html',
						controller: 'try'
					}
				}
		});

		$stateProvider.state('/movieList', {
			url: '/movieList',
				views: {
					nav:{
						templateUrl: 'movieList.html'
					},

					content:{
						templateUrl: 'templates/movieList.html',
						controller: 'movieList'
					}
				}
    });

		$stateProvider.state('/movieDetail', {
			url: '/movieDetail',
				views: {
					nav:{
						templateUrl: 'movieDetail.html'
					},

					content:{
						templateUrl: 'templates/movieDetail.html',
						controller: 'movieDetail'
					}
				}
    });

		$stateProvider.state('/searchPage', {
			url: '/searchPage',
				views: {
					nav:{
						templateUrl: 'searchPage.html'
					},

					content:{
						templateUrl: 'templates/searchPage.html',
						controller: 'searchPage'
					}
				}
    });



}]);
