/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function () {

    var app = angular.module('zampetoArtApp', ['ngRoute', 'ngAnimate', 'wu.masonry', 'bootstrapLightbox', 'page-common', 'page-woods', 'page-contact']);

    /**
     * Configure routes
     */
    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            // Home
            .when("/", {
                templateUrl: "/pages/home.html",
                controller: "PageController",
                activeTab: '/'
            })
            .when("/wood",
            {
                templateUrl: "/pages/wood.html",
                controller: "WoodPaintingController",
                activeTab: '#wood'
            })
            .when("/contact",
            {
                templateUrl: "/pages/contact.html",
                controller: "ContactPaintingController",
                activeTab: '#contact'
            }) // else 404

            .otherwise("/404", {
                templateUrl: "/partials/home.html",
                controller: "PageController",
                activeTab: '/'
            });

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });

    app.controller('PageController', function ($http, $scope, $route, $sce) {
        // Expose $route to controller
        $scope.$route = $route;

        var currentCtrl = this;

        $http.get('/app/common/services/models/lang-gr.json')
            .success(function (data) {
                currentCtrl.lang = data;
            });
        this.selectLanguage = function (lang) {
            if (lang === "EN") {
                $http.get('/app/common/services/models/lang-en.json')
                    .success(function (data) {
                        currentCtrl.lang = data;
                    });
                return;
            }

            $http.get('/app/common/services/models/lang-gr.json')
                .success(function (data) {
                    currentCtrl.lang = data;
                });
        };


        /**
         * http://stackoverflow.com/a/20710548/2790481
         * @param htmlCode
         * @returns {*}
         */
        currentCtrl.toTrusted = function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        }
    });
    app.directive('dropdownMenu', function () {
        return {
            link: function (scope, elem) {
                elem.dropdownHover();
                elem.dropdown();
            }
        };
    });

})();
