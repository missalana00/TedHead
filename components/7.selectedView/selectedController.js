
// Initial test to confirm correct routing

"use strict"

myApp.controller("selectedController", function($scope, $http, $routeParams, $sce, toWatchFactory) {

	console.log("I am the selectedController!");
	$scope.chosenYouTubeLink = '';

	// Declare var to get data from youtube for this specific video
	var indVidInfo = {};

	// Calling this "caughtVideoId" because we are catching it from the url, where we threw it via routeParams
	// videoId was delcared in appConfig.js and is now stored as the variable catchVideoId

	var catchVideoId = $routeParams.videoId;

	console.log(catchVideoId);

	var chosenYouTubeLink = "https://www.youtube.com/embed/" + catchVideoId;

	$scope.trustedChosenYouTubeLink = $sce.trustAsResourceUrl(chosenYouTubeLink);

	console.log($scope.chosenYouTubeLink)


	// Call youtube api to get info for this video
	$http({
	  method: 'GET',
	  // Modify this url with the search string of catchTedInput 
	  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCAuUUnT6oDeKwE6v1NGQxug&q=' + catchVideoId + '&key=AIzaSyDap7sGxUt14nvHxRuIekh-B5a0Y4h3A6M' 
	})
	.then(
		function successCallback(response) {
		// set var from above to the data from the api call
	    indVidInfo = response.data.items[0];
	   	console.log("last thing", indVidInfo)

	  }, function errorCallback(response) {
	  	console.log(response);
	  });

	
	$scope.passVidIdtoSaveToWatch = function () {
		console.log("it works!");

		// Use data from api call to save to firebase
		var videoToSaveToFB = {
 			videoId: indVidInfo.id.videoId,
			hasBeenWatched: false,
			videoImg: indVidInfo.snippet.thumbnails.high.url,
			videoPubDate: indVidInfo.snippet.publishedAt,
			videoTitle: indVidInfo.snippet.title,
			videoDescription: indVidInfo.snippet.description
		 };
	 	console.log(videoToSaveToFB);

	 	return;

		toWatchFactory.postToWatchVideo(videoToSaveToFB);

	}




});

