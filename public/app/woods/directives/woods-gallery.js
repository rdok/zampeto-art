/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function ()
{
	var app = angular.module('page-woods', []);

	var woodJSON = [
		{
			title      : 'Γαλέρα',
			description: 'Τέμπερα σε πάτο βαρελιού, διακόσμιση χρυσό 24Κ',
			url        : '/lib/img/pages/ksylo/gallery-full-1.jpeg',
			thumb      : '/lib/img/pages/ksylo/gallery-thumb-1.png'
		},
		{
			title      : 'Πολεμικό Καράβι',
			description: 'Τέμπερα',
			url        : '/lib/img/pages/ksylo/gallery-full-2.jpeg',
			thumb      : '/lib/img/pages/ksylo/gallery-thumb-2.png'
		},
		{

			description: 'Τέμπερα σε πάτο βαρελιού, διακόσμιση χρυσό 24Κ',
			url        : '/lib/img/pages/ksylo/gallery-full-3.jpeg',
			thumb      : '/lib/img/pages/ksylo/gallery-thumb-3.png'
		},
		{
			title      : 'Τέμπερα',
			description: 'Υδραίικο πολεμικό Καράβι',
			url        : '/lib/img/pages/ksylo/gallery-full-4.jpeg',
			thumb      : '/lib/img/pages/ksylo/gallery-thumb-4.png'
		},
		{
			title      : 'Πίσω Λιβάδι Πάρου',
			description: 'Τέμπερα σε πάτο βαρελιού',
			url        : '/lib/img/pages/ksylo/gallery-full-5.jpeg',
			thumb      : '/lib/img/pages/ksylo/gallery-thumb-5.png'
		},
		{
			title      : 'Φορτηγό Πλοίο',
			description: 'Τέμπερα',
			url        : '/lib/img/pages/ksylo/gallery-full-6.jpeg',
			thumb      : '/lib/img/pages/ksylo/gallery-thumb-6.jpeg'
		},
		{
			title      : 'Ποταμόπλοιο',
			description: 'Τέμπερα σε πάτο βαρελιού',
			url        : '/lib/img/pages/ksylo/gallery-full-7.jpeg',
			thumb      : '/lib/img/pages/ksylo/gallery-thumb-7.png'
		},
		{
			title      : 'Tο Πλοίο η Ελλάς',
			description: 'Τέμπερα',
			url        : '/lib/img/pages/ksylo/gallery-full-8.jpeg',
			thumb      : '/lib/img/pages/ksylo/gallery-thumb-8.jpeg'
		},
	];

	app.controller('WoodPaintingController', function ($http, Lightbox)
	{
		this.woodPaintings = woodJSON;
		$http.get('/app/common/services/models/woods-gr.json')
			.then(function (response)
			{
				var data = response.data,
					status = response.status,
					header = response.header,
					config = response.config;
				// success handler
				console.log(data);
				this.woodPaintings = data;
			}, function (response)
			{
				var data = response.data,
					status = response.status,
					header = response.header,
					config = response.config;
				// error handler
				console.log(data);
			});

		this.openLightboxModal = function (index)
		{
			Lightbox.openModal(this.woodPaintings, index);
		};
	});
})();
