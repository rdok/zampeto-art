/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function () {
	var app = angular.module('page-woods', ['ngRoute', 'ngAnimate', 'wu.masonry', 'bootstrapLightbox']);

	app.controller('WoodPaintingController', function ($http, Lightbox) {
			this.woodPaintings = [];
			var currentController = this;

			$http.get('/app/woods/services/models/woods-gr.json')
				.success(function (data) {
					currentController.woodPaintings = data;
				});

			this.openLightboxModal = function (index) {
				Lightbox.openModal(currentController.woodPaintings, index);
			};

			$("[rel='tooltip']").tooltip();

			$('.caption').hover(
				function () {
					$(this).find('.caption-hover-animation').slideDown(250); //.fadeIn(250)
					alert("slide down");
				},
				function () {
					$(this).find('.caption-hover-animation').slideUp(250); //.fadeOut(205)
				}
			);
		}
	);
})();
