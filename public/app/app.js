/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function () {

	var app = angular.module('zampetoArtApp', [
		'ngRoute', 'ngAnimate', 'wu.masonry', 'bootstrapLightbox',
		'common-directives'
	]);

	/**
	 * Configure routes
	 */
	app.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			// Home
			.when("/", {
				templateUrl: "/pages/home.html",
				activeTab  : '/'
			})
			.when("/pictures/portlet/angels", {
				templateUrl: "/pages/pictures/portlet/angels.html",
				controller : "PicturesController",
				activeTab  : '#pictures-portlet-angels'
			})
			.when("/wood",
			{
				templateUrl: "/pages/wood.html",
				controller : "GalleryController",
				activeTab  : '#wood'
			})
			.when("/contact",
			{
				templateUrl: "/pages/contact.html",
				activeTab  : '#contact'
			}) // else 404

			.otherwise("/404", {
				templateUrl: "/partials/home.html",
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
						currentCtrl.apply();
					});
				return;
			}

			$http.get(langGrUrl)
				.success(function (data) {
					currentCtrl.lang = data;
					currentCtrl.apply();
				});
		};

		/**
		 * http://stackoverflow.com/a/20710548/2790481
		 * @param htmlCode
		 * @returns {*}
		 */
		currentCtrl.toTrusted = function (htmlCode) {
			return $sce.trustAsHtml(htmlCode);
		}
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
