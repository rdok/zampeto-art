/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function () {
	var app = angular.module('galleryCtrl', ['ngRoute', 'ngAnimate', 'wu.masonry', 'bootstrapLightbox']);

	// set a custom template
	app.config(function (LightboxProvider) {
		LightboxProvider.templateUrl = '/app/gallery/lightbox-template.html';
	});

	app.controller('GalleryController', function ($route, $http, Lightbox) {
		var currentRoute = $route.current.activeTab;
		var currentGalleryUrl = getCurrentGalleryUrl(currentRoute);
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
	});
})();

function getCurrentGalleryUrl(currentRoute) {
	if (currentRoute === '#wood') {
		return '/app/gallery/services/woods-gr.json';
	}
}
