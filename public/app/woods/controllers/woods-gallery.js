/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function () {
	var app = angular.module('page-woods', ['ngRoute', 'ngAnimate', 'wu.masonry', 'bootstrapLightbox']);

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

					var $masonryGallery = $('masonry');
					var msnry = new Masonry('#masonry-gallery');

					function onLayout() {
						console.log('layout done');
					}

					msnry.on('layoutComplete', onLayout);
					//msnry.off('layoutComplete', onLayout);
					msnry.on('layoutComplete', function () {
						console.log('layout done, just this one time');
						//this.reloadItems();
						return true;
					});
				});
			this.openLightboxModal = function (index) {
				Lightbox.openModal(currentController.woodPaintings, index);
			};
		}
	);

	//app.directive('dropdownMenu', function () {
	//	return {
	//		link: function (scope, elem) {
	//			elem.dropdownHover();
	//			elem.dropdown();
	//		}
	//	};
	//});
})();
