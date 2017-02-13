
// Initial test to confirm correct routing



myApp.controller("homeController", function($scope, $location) {
"use strict"

	console.log("I am the HomeViewController!");


	// Defined variables 

	$scope.searchInput = ""; 


	// This captures the user's specific search input 

	$scope.sendSearchInput = function () {

		console.log($scope.searchInput);

		
		// Search event fires on click, now change the url which will change the view, which will fire that view's controller;

		// What we're doing is: throwing the searchInput "over the fence", it goes into the URL, which can be accessed by the other controller

		$location.url('/searchResView:'+ $scope.searchInput);
	};






	







});

