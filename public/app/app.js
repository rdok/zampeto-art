/**
 *
 * @author Rizart Dokollari
 * @version 1/27/2015
 */
(function ()
{

	var app = angular.module('zampetoArtApp', ['ngRoute', 'ngAnimate', 'wu.masonry', 'bootstrapLightbox', 'page-common', 'page-woods',]);

	/**
	 * Configure routes
	 */
	app.config(function ($routeProvider, $locationProvider)
	{
		$routeProvider
			// Home
			.when("/", {
				templateUrl: "/pages/home.html",
				controller : "PageController",
				activeTab  : '/'
			})
			.when("/wood",
			{
				templateUrl: "/pages/wood.html",
				controller : "WoodPaintingController",
				activeTab  : '#wood'
			}) // else 404
			.otherwise("/404", {
				templateUrl: "/partials/home.html",
				controller : "PageController",
				activeTab  : '/'
			});

		// use the HTML5 History API
		$locationProvider.html5Mode(true);
	});

	var langGr =
	{
		"navBar": {
			"home"           : "ΑΡΧΙΚΗ",
			"pictures"       : "ΕΙΚΟΝΕΣ",
			"portable"       : "ΦΟΡΗΤΕΣ",
			"jesusChrist"    : "ΙΗΣΟΥΣ ΧΡΙΣΤΟΣ",
			"virginMary"     : "ΘΕΟΤΟΚΟΣ",
			"representations": "ΠΑΡΑΣΤΑΣΕΙΣ",
			"saints"         : "ΑΓΙΟΙ",
			"angels"         : "ΑΓΓΕΛΟΙ",
			"decoration"     : "ΔΙΑΚΟΣΜΗΣΗ",
			"onWall"         : "ΕΠΙ ΤΟΙΧΟΥ",
			"onWood"         : "ΕΠΙ ΞΥΛΟΥ",
			"onGlass"        : "ΕΠΙ ΓΥΑΛΙΟΥ",
			"wood"           : "ΞΥΛΟ",
			"contact"        : "ΕΠΙΚΟΙΝΩΝΙΑ"
		},
		"home"  : {
			"firstParagraph" : "αλως ηρθατε στις σελιδες μου απο τις οποιες η εικονα αποτελει σταθμο της καλλτεχνικης μου διαδρομης.<br />Η Ορθοδοξη Βυζαντινη εικονα και η τεχνη της αγιογραφιας, εχει τις ριζες<br/> της στην Βυζαντινη ζωγραφικη των εικονων . Αποκτα μοναδικο υφος και χαρη στην ιδιοφυΐα του εκαστου ζωγραφου, προσπαθωντας να ξεπερασει τα ορια της τεχνης του τοπου του και του καιρου του, ετσι ωστε η εικονα να μην ειναι μονο αφηγηματικη και διδακτικη αλλα και αντικειμενο λατρειας , μεχρι του σημειου να αποκτα κανεις την εντυπωση οτι σε αυτη υποτασσονται τα παντα, με το δε καλλος ως αρμονια να ερχεται σε δευτερη μοιρα .",
			"secondParagraph": "Στην εικονα αντικριζουμε την υποσταση του σεσαρκωμενου Θεου Λογου, Ζωγραφισμενο επανω σε χρυσο καμπο , να εκφραζεται με τροπο εμφατικο",
			"thirdParagraph" : "Η επεξεργασια του χρωματος στην εικονα, κατα τα προτυπα των παλαιων Αγιογραφων μαζι με την ρευστη αποδοση της παλλομενης ανθρωπινης μορφης , φανερωνουν τα γνωρισματα του υφους μου.	Χρωματα δουλευμενα με πυκνες πινελιες αναμιγνυονται.Η σαρκα πλαθεται προσπαθωντας να είναι καθρεφτης της εκκλησιαστικης μας ζωης και εικονουργωντας, να σαρκωσω τον εκκλησιαστικο Λογο χρωματουργικα."
		}

	};

	var langEn =
	{
		"navBar": {
			"home"           : "HOME",
			"pictures"       : "PICTURES",
			"portable"       : "PORTABLE",
			"jesusChrist"    : "JESUS CHRIST",
			"virginMary"     : "VIRGIN MARY",
			"representations": "REPRESENTATIONS",
			"saints"         : "SAINTS",
			"angels"         : "ANGELS",
			"decoration"     : "DECORATION",
			"onWall"         : "ON WALL",
			"onWood"         : "ON WOOD",
			"onGlass"        : "ON GLASS",
			"wood"           : "WOOD",
			"contact"        : "CONTACT"
		},
		"home"  : {
			"firstParagraph" : "elcome to my page on which the image is a milestone of my artistic journey.<br />The Orthodox Byzantine icons and the art of iconography, is rooted<br/>in the Byzantine painting of icons. Acquires unique style and thanks to the genius of each painter, trying to push boundaries of art and the place of his time, so that the image is not only narrative and teaching as well as objects of worship, to the point one gains the impression that in this subdues everything, with no Callas as to harmony comes second.",
			"secondParagraph": "In the picture facing the reality of sesarkomenou God's word. Painted upward in gold ground, expressed with great conviction.",
			"thirdParagraph" : "The treatment of color in the image, along the standards of old Hagiographers along with the fluid return on throbbing human form, reveal the traits of my style. Colors accrued with dense brush mixes. The flesh is conjured up trying to be a mirror of our church life and eikonourgontas to incarnacate the ecclesiastical Speech chromatourgika."
		}
	};

	app.controller('PageController', function ($scope, $route, $sce)
	{
		// Expose $route to controller
		$scope.$route = $route;

		this.lang = langGr;

		var pageCtrl = this;

		this.selectLanguage = function (lang)
		{
			if (lang === "EN")
			{
				console.log(langEn.navBar);
				pageCtrl.lang = langEn;
				return;
			}

			pageCtrl.lang = langGr;
		};

		/**
		 * http://stackoverflow.com/a/20710548/2790481
		 * @param htmlCode
		 * @returns {*}
		 */
		pageCtrl.toTrusted = function (htmlCode)
		{
			return $sce.trustAsHtml(htmlCode);
		}
	});

})();
