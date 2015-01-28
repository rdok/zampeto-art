/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function ()
{

	var app = angular.module('zampetoArtApp', ['ngRoute']);

	/**
	 * Configure routes
	 */
	app.config(function ($routeProvider, $locationProvider)
	{
		$routeProvider
			// Home
			.when("/", {
				templateUrl: "templates/home.html",
				controller : "PageController",
				activeTab  : '/'
			})
			.when("/ksylo",
			{
				templateUrl: "templates/ksylo.html",
				controller : "PageController",
				activeTab  : '#ksylo'
			}) // else 404
			.otherwise("/404", {
				templateUrl: "templates/home.html",
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