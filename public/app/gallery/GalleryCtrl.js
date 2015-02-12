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
			//console.log($route.current.activeTab);

			this.pictures = [];
			var currentController = this;
			var langGrUrl = '/app/gallery/services/woods-gr.json';

			$http.get(langGrUrl)
				.success(function (data) {
					currentController.pictures = data;
					new Masonry('#masonry-gallery');
				});

			this.openLightboxModal = function (index) {
				Lightbox.openModal(currentController.woodPaintings, index);
			};
		}
	);

})();
