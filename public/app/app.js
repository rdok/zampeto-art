/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function ()
{

	var woodJSON = [
		{
			title      : 'Γαλέρα',
			description: 'Τέμπερα σε πάτο βαρελιού, διακόσμιση χρυσό 24Κ',
			images     : [
				{
					full : '/lib/img/pages/ksylo/gallery-full-1.png',
					thumb: '/lib/img/pages/ksylo/gallery-thumb-1.png'
				}
			]
		}
	];

	var app = angular.module('zampetoArtApp', ['ngRoute']);

	/**
	 * Configure routes
	 */
	app.config(function ($routeProvider, $locationProvider)
	{
		$routeProvider
			// Home
			.when("/", {
				templateUrl: "/partials/home.html",
				controller : "PageController",
				activeTab  : '/'
			})
			.when("/ksylo",
			{
				templateUrl: "/partials/ksylo.html",
				controller : "WoodPaintingCtrl as woodPaintingCtrl",
				activeTab  : '#ksylo'
			}) // else 404
			.otherwise("/404", {
				templateUrl: "partials/home.html",
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

	app.controller('WoodPaintingCtrl', function ()
	{
		this.woodPaintings = woodJSON;
	});
})();