/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function ()
{

	var app = angular.module('page-common', []);

	app.directive('appNavBar', function ()
	{
		return {
			restrict   : 'E',
			templateUrl: '/layouts/partials/app-nav-bar.html'
		}
	});
	app.directive('appFooter', function ()
	{
		return {
			restrict   : 'E',
			templateUrl: '/layouts/partials/app-footer.html'
		}
	});
})();
