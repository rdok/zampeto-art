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
		var currentGalleryUrl = getCurrentGalleryUrl($route.current.activeTab);
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
	if (currentRoute === '#pictures-portables-angels') {
		return '/app/gallery/services/portables/angels-gr.json';
	}

	console.log(currentRoute);
}
