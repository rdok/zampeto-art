/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function () {
	var app = angular.module('contactCtrl', []);

	app.controller('ContactController', function ($route, $http, $scope) {
		this.contact = {};
		var isSubmtBtnPrs = false;

		this.sendContact = function () {
			isSubmtBtnPrs = true;

			$http({
				method : 'POST',
				url    : "/app/contact/requestContact.php",
				data   : this.contact,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).
				success(function (data, status, headers, config) {
					$('.bs-example-modal-sm').modal('toggle');
				}).
				error(function (data, status, headers, config) {
				});
		};

		$scope.$watch('lang', function (lang) {
			if (typeof lang === 'undefined') {
				return;
			}
		});

		this.isSubmtBtnPressed = function () {
			return isSubmtBtnPrs;
		}
	});
})();