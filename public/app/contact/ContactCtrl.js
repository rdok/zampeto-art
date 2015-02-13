/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function () {
    var app = angular.module('contactCtrl', []);


    app.controller('ContactController', function ($route, $http) {
        this.reservation = {};

        this.sendContact = function () {
            $http({
                method: 'POST',
                url: "contact/requestContact.php",
                data: this.reservation,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                success(function (data, status, headers, config) {
                    console.log('contact posted');
                }).
                error(function (data, status, headers, config) {
                    console.log('there was an error posting request  '.data);
                });
        };
    });
})();