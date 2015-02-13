/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function () {

	var app = angular.module('zampetoArtApp', [
		'ngRoute', 'ngAnimate', 'wu.masonry', 'bootstrapLightbox',
		'commonDirectives', 'galleryCtrl', 'contactCtrl'
	]);

	/**
	 * Configure routes
	 */
	app.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			// Home
			.when("/", {
				templateUrl: "/app/home.html",
				activeTab  : '/'
			})
			.when("/pictures-portables-jesus-christ", {
				templateUrl: "/app/gallery/gallery.html",
				activeTab  : '#pictures-portables-jesus-christ'
			})
			.when("/pictures-portables-mother-of-god", {
				templateUrl: "/app/gallery/gallery.html",
				activeTab  : '#pictures-portables-mother-of-god'
			})
			.when("/pictures-portables-representations", {
				templateUrl: "/app/gallery/gallery.html",
				activeTab  : '#pictures-portables-representations'
			})
			.when("/pictures-portables-saints", {
				templateUrl: "/app/gallery/gallery.html",
				activeTab  : '#pictures-portables-saints'
			})
			.when("/pictures-portables-angels", {
				templateUrl: "/app/gallery/gallery.html",
				activeTab  : '#pictures-portables-angels'
			})
			.when("/decoration-on-wall",
			{
				templateUrl: "/app/gallery/gallery.html",
				activeTab  : '#decoration-on-wall'
			})
			.when("/decoration-on-wood",
			{
				templateUrl: "/app/gallery/gallery.html",
				activeTab  : '#decoration-on-wood'
			})
			.when("/decoration-on-glass",
			{
				templateUrl: "/app/gallery/gallery.html",
				activeTab  : '#decoration-on-glass'
			})
			.when("/wood",
			{
				templateUrl: "/app/gallery/gallery.html",
				activeTab  : '#wood'
			})
			.when("/contact",
			{
				templateUrl: "/app/contact/contact.html",
				controller : "ContactController as contactCtrl",
				activeTab  : '#contact'
			}) // else 404

			.otherwise("/404", {
				templateUrl: "/app/home.html",
				activeTab  : '/'
			});

		// use the HTML5 History API
		$locationProvider.html5Mode(true);
	});

	app.controller('PageController', function ($http, $scope, $route, $sce) {
		// Expose $route to controller
		$scope.$route = $route;

		var currentCtrl = this;
		var langGrUrl = '/app/common/services/lang-gr.json';
		var langEnUrl = '/app/common/services/lang-en.json';

		// GR english default
		$http.get(langGrUrl)
			.success(function (data) {
				currentCtrl.lang = data;
			});

		this.selectLanguage = function (lang) {
			if (lang === "EN") {
				$http.get(langEnUrl)
					.success(function (data) {
						currentCtrl.lang = data;
					});
				return;
			}

			$http.get(langGrUrl)
				.success(function (data) {
					currentCtrl.lang = data;
				});
		};

		/**
		 * http://stackoverflow.com/a/20710548/2790481
		 * @param htmlCode
		 * @returns {*}
		 */
		currentCtrl.toTrusted = function (htmlCode) {
			return $sce.trustAsHtml(htmlCode);
		};

	});

	app.directive('dropdownMenu', function () {
		return {
			link: function (scope, elem) {
				elem.dropdownHover();
				//elem.dropdown();
			}
		};
	});

})();
