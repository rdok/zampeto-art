/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function () {
	var app = angular.module('common-directives', []);

	app.directive('topNav', function () {
		return {
			restrict   : 'E',
			templateUrl: '/app/common/topnav.html'
		}
	});
})();
