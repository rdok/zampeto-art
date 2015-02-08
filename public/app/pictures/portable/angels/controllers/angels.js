/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function () {
	var app = angular.module('page-pictures-portables-angels', ['wu.masonry']);

	app.config(function (LightboxProvider) {
		//set a custom template
		LightboxProvider.templateUrl = '/app/woods/controllers/lightbox-template.html';
	});

	app.controller('PicturesPortablesAngelsPaintingController', function ($http, Lightbox, $rootScope) {
			console.log($rootScope.lang);
			this.angels = [];
			var currentController = this;

			$http.get('/app/pictures/portable/angels/services/models/angels-en.json')
				.success(function (data) {
					currentController.angels = data;
					new Masonry('#angels-gallery');
				});

			this.openLightboxModal = function (index) {
				Lightbox.openModal(currentController.angels, index);
			};
		}
	);

})();

