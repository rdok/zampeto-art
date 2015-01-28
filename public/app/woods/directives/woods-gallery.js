/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function ()
{
	var app = angular.module('page-woods', []);

	app.controller('WoodPaintingController', [
		'$http', function ($http, Lightbox)
		{
			this.woodPaintings = [];
			var currentController = this;

			$http.get('/app/woods/services/models/woods-gr.json')
				.success(function (data)
				{
					currentController.woodPaintings = data;
				});

			this.openLightboxModal = function (index)
			{
				Lightbox.openModal(this.woodPaintings, index);
			};
		}
	]);
})();
