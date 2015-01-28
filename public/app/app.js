/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function ()
{

	var app = angular.module('zampetoArtApp', ['ngRoute', 'bootstrapLightbox', 'wu.masonry', 'ngAnimate', 'page-woods', 'page-common']);

	/**
	 * Configure routes
	 */
	app.config(function ($routeProvider, $locationProvider)
	{
		$routeProvider
			// Home
			.when("/", {
				templateUrl: "/pages/home.html",
				controller : "PageController",
				activeTab  : '/'
			})
			.when("/wood",
			{
				templateUrl: "/pages/wood.html",
				controller : "WoodPaintingController",
				activeTab  : '#wood'
			}) // else 404
			.otherwise("/404", {
				templateUrl: "/partials/home.html",
				controller : "PageController",
				activeTab  : '/'
			});

		// use the HTML5 History API
		$locationProvider.html5Mode(true);
	});

	app.controller('PageController', function ($scope, $route)
	{
		// Expose $route to controller
		$scope.$route = $route;
	});

})();
