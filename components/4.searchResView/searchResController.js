
// Initial test to confirm correct routing

"use strict"

myApp.controller("searchResController", function($scope, $routeParams, $http, searchResFactory) {

	console.log("I am the searchResController!");

  	// Calling this "catchTedInput" because we are catching it from the url, where we threw it via routeParams

	var catchTedInput = $routeParams.search;

	// Declaring data variable with response from API

	$scope.tedVideoList = null;


	// Here, we make a call to the database(YouTube API) with the search input and retrieve the associated information

	$http({
	  method: 'GET',

	  // Modify this url with the search string of catchTedInput - FIGURE ME OUT, SCOTT!

	  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCAuUUnT6oDeKwE6v1NGQxug&key=AIzaSyDap7sGxUt14nvHxRuIekh-B5a0Y4h3A6M'
	}).then(
		function successCallback(response) {
	    // this callback will be called asynchronously
	    // when the response is available

	    $scope.tedVideoList = response.data.items;

	    console.log($scope.tedVideoList);

	  }, function errorCallback(response) {
	  	console.log(response);
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
	

	$scope.savetoToWatch = function () {
		console.log("it works!");

		searchResFactory.saveVidToFB();

	}

});

 