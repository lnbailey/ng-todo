"use strict";

app.controller("ItemListCtrl", function($scope, ItemFactory){
	$scope.items = [];

	let getItems = function(){
		ItemFactory.getItemList().then(function(fbItems){
		$scope.items = fbItems;
		});
	};

	getItems();

	$scope.deleteItem = function(itemId){
		ItemFactory.deleteItem(itemId).then(function(response){
			getItems();
		});
	};

	$scope.inputChange = function(thingy) {
		// console.log("thingy", thingy);
		ItemFactory.editItem(thingy).then(function(response){
			// console.log("ctlr inputChange response:", response);
		})
	};
});