
// Initial test to confirm correct routing

"use strict"

myApp.controller("toWatchController", function($scope, $http, $location) {


	console.log("I am the toWatchController!");
	$scope.toWatchVideoList = null;

	$http({
	  method: 'GET',
	  // Modify this url with the search string of catchTedInput 
	  url: 'https://tedhead-229a6.firebaseio.com/allVideos.json'
	})
	.then(
		function successCallback(response) {

			console.log(response);

			$scope.toWatchVideoList = response.data;

		})
	$scope.sendToSelectedView = function (footballId) {

		// console.log(footballId);

		
		// sendToSelectedView gets fired on click, now change the url which will change the view, which will fire that view's controller;

		// What we're doing is: throwing caughtVideoId (the id of the video the user clicked on) "over the fence", it goes into the URL, which can be accessed by the other controller

		$location.url('/selectedView/'+ footballId);
	};

});