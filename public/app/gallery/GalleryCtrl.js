/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function () {
	var app = angular.module('galleryCtrl', [
		'ngRoute', 'ngAnimate', 'wu.masonry', 'bootstrapLightbox',
		'languageServices'
	]);

	// set a custom template
	app.config(function (LightboxProvider) {
		LightboxProvider.templateUrl = '/app/gallery/lightbox-template.html';
	});

	app.controller('GalleryController', function ($route, $http, Lightbox, $scope) {
			var currentGalleryUrl = ($route.current.activeTab).substring(1); // remove #
			currentGalleryUrl = '/app/gallery/services/' + currentGalleryUrl + '-gr.json';

			console.log(currentGalleryUrl);

			this.pictures = [];
			var currentController = this;

			$http.get(currentGalleryUrl)
				.success(function (data) {
					currentController.pictures = data;
					new Masonry('#masonry-gallery');
				});

			this.openLightboxModal = function (index) {
				Lightbox.openModal(currentController.pictures, index);
			};

			$scope.$watch('lang', function (lang) {
				if (typeof lang === 'undefined') {
					return;
				}
				var currentGalleryUrl = ($route.current.activeTab).substring(1); // remove #
				var currentLang = lang.toLowerCase();
				currentGalleryUrl = '/app/gallery/services/' + currentGalleryUrl + '-' + currentLang + '.json';

				$http.get(currentGalleryUrl)
					.success(function (data) {
						currentController.pictures = data;
						new Masonry('#masonry-gallery');
					});
			});
		}
	);
})();

