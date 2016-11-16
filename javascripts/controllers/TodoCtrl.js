"use strict";

app.controller("TodoCtrl", function($scope){
	$scope.welcome="hello";
	$scope.showListView=true;
	$scope.newTask={};
	$scope.items=[
		{
			id:0,
			task:"mow the lawn",
			isCompleted: true,
			assignedTo: "Zoe"
		},
		{
			id:0,
			task:"take out the trash",
			isCompleted: true,
			assignedTo: "William"
		},
		{
			id:0,
			task:"mop the floors",
			isCompleted: false,
			assignedTo: "Nathan"
		}
	];

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