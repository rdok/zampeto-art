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
	// Pictures pages

	if (currentRoute === '#pictures-portables-mother-of-god') {
		return '/app/gallery/services/portables/mother-of-god-gr.json';
	}
	if (currentRoute === '#pictures-portables-representations') {
		return '/app/gallery/services/portables/representations-gr.json';
	}
	if (currentRoute === '#pictures-portables-saints') {
		return '/app/gallery/services/portables/saints-gr.json';
	}
	if (currentRoute === '#pictures-portables-angels') {
		return '/app/gallery/services/portables/angels-gr.json';
	}

	// Woods Pages
	if (currentRoute === '#wood') {
		return '/app/gallery/services/woods-gr.json';
	}
}
