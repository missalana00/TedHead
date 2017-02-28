
// Initial test to confirm correct routing

"use strict"

myApp.controller("searchResController", function($scope, $routeParams, $http, $location, toWatchFactory) {

	console.log("I am the searchResController!");

  	// Calling this "catchTedInput" because we are catching it from the url, where we threw it via routeParams

	var catchTedInput = $routeParams.search;

	console.log(catchTedInput);

	// Declaring data variable with response from API

	$scope.tedVideoList = null;


	// Here, we make a call to the database(YouTube API) with the search input and retrieve the associated information

	$http({
	  method: 'GET',
	  
	  // Modify this url with the search string of catchTedInput 
	  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&channelId=UCAuUUnT6oDeKwE6v1NGQxug&q=' + catchTedInput + '&key=AIzaSyDap7sGxUt14nvHxRuIekh-B5a0Y4h3A6M' 
	})
	.then(
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
	

	$scope.passVidIdtoSaveToWatch = function (footballEachVideo) {
		console.log("it works!",footballEachVideo);


		 var vidInfoToSaveToFB = {
 			videoId: footballEachVideo.id.videoId,
			hasBeenWatched: 'false',
			videoImg: footballEachVideo.snippet.thumbnails.high.url,
			videoPubDate: footballEachVideo.snippet.publishedAt,
			videoTitle: footballEachVideo.snippet.title,
			videoDescription: footballEachVideo.snippet.description
		 };
	 	console.log(vidInfoToSaveToFB);

		toWatchFactory.postToWatchVideo(vidInfoToSaveToFB);

	}



	


	// This is firing the click to go to the selectedView page with the passed in caughtVideoId and watch the selected Video in full screen 

	$scope.sendToSelectedView = function (footballId) {

		// console.log(footballId);

		
		// sendToSelectedView gets fired on click, now change the url which will change the view, which will fire that view's controller;

		// What we're doing is: throwing caughtVideoId (the id of the video the user clicked on) "over the fence", it goes into the URL, which can be accessed by the other controller

		$location.url('/selectedView/'+ footballId);
	};


	$scope.passVidIdToEdit = function (footballId) {
		


		 var vidInfoToEditInFB = {
 			fB_id: footballId.fB_id,
			videoId: footballId.videoId,
			hasBeenWatched: 'true',
			videoImg: footballId.videoImg,
			videoPubDate: footballId.videoPubDate,
			videoTitle: footballId.videoTitle,
			videoDescription: footballId.videoDescription
		 };


		toWatchFactory.editItemSendToHaveWatched(vidInfoToEditInFB);

	}
	

	

});

 