/**
 *
 * @author Rizart Dokollari
 * @version 2/13/2015
 */
(function () {
	var app = angular.module('languageServices', []);

	app.factory('languageService', [
		'$http', function ($http) {

			var changeLang = function (lang, path) {
				return $http({
					method: 'GET',
					url   : path
				})
			};

			return {
				events: function (lang) {
					return changeLang(lang, 'events');
				}
			};
		}
	]);
})();
