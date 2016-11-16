"use strict";

app.controller("TodoCtrl", function($scope, ItemFactory){
	$scope.welcome="hello";
	$scope.showListView=true;
	$scope.newTask={};
	$scope.items=[];

	ItemFactory.getItemList().then(function(fbItems){
		$scope.items=fbItems;
	});

	$scope.allItems=function(){
	console.log("You clicked allItems");
	$scope.showListView=true;
	};

	$scope.newItem=function(){
	console.log("You clicked newItems");
	$scope.showListView=false;
	};

	$scope.addNewItem=function(){
		$scope.newTask.isCompleted=false;
		$scope.newTask.id=$scope.items.length;
		console.log("newTask in funciton", $scope.newItem);
		$scope.items.push($scope.newTask);
		$scope.newTask={};
		$scope.showListView=true;

	};
});