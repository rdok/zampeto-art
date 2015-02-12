/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function () {
	var app = angular.module('page-pictures', ['ngRoute', 'ngAnimate', 'wu.masonry', 'bootstrapLightbox']);

	app.config(function (LightboxProvider) {
		// set a custom template
		LightboxProvider.templateUrl = '/app/woods/controllers/lightbox-template.html';
	});

	app.controller('PicturesController', function ($http, Lightbox) {
			this.woodPaintings = [];
			var currentController = this;

			$http.get('/app/pictures/services/models/angels-gr.json')
				.success(function (data) {
					currentController.woodPaintings = data;
					new Masonry('#masonry-angels');
				});
			this.openLightboxModal = function (index) {
				Lightbox.openModal(currentController.woodPaintings, index);
			};
		}
	);

})();
