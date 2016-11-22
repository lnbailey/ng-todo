"use strict";

app.run(function(FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
	$routeProvider
		.when("/items/list", {
			templateUrl: "/partials/item-list.html",
			controller: "ItemListCtrl"
		})
		.when("/items/new", {
			templateUrl: "/partials/item-new.html",
			controller: "ItemNewCtrl"
		})
		.when("/items/view/:id", { //:id can be named anything
			templateUrl: "partials/item-view.html",
			controller: "ItemViewCtrl"
		})
		.when("/items/edit/:id", { //:id can be named anything
			templateUrl: "partials/item-new.html",
			controller: "ItemEditCtrl"
		})
		.otherwise("/items/list")
});