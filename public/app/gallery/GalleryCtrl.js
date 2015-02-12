/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function () {
	var app = angular.module('page-woods', ['ngRoute', 'ngAnimate', 'wu.masonry', 'bootstrapLightbox']);

	// set a custom template
	app.config(function (LightboxProvider) {
		LightboxProvider.templateUrl = '/app/woods/controllers/lightbox-template.html';
	});

	app.controller('GalleryController', function ($http, Lightbox) {
			this.pictures = [];
			var currentController = this;

			$http.get('/app/woods/services/models/woods-gr.json')
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
