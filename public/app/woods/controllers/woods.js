/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function () {
	var app = angular.module('page-woods', []);

	app.config(function (LightboxProvider) {
		// set a custom template
		LightboxProvider.templateUrl = '/app/woods/controllers/lightbox-template.html';
	});

	app.controller('WoodPaintingController', function ($http, Lightbox) {
		this.woodPaintings = [];
		var currentController = this;

		$http.get('/app/woods/services/models/woods-gr.json')
			.success(function (data) {

				currentController.woodPaintings = data;

				new Masonry('#masonry-gallery');
			});
		this.openLightboxModal = function (index) {
			Lightbox.openModal(currentController.woodPaintings, index);
		};
	});

})();
