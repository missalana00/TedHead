
// Initial test to confirm correct routing

"use strict"

myApp.controller("toWatchController", function($scope, $http, $location, toWatchFactory) {


	console.log("I am the toWatchController!");
	$scope.toWatchVideoList = [];



 	// THIS SHOULD BE IN A FACTORY //
	$http({
	  method: 'GET',
	  // Modify this url with the search string of catchTedInput 
	  url: 'https://tedhead-229a6.firebaseio.com/allVideos.json'
	})
	.then(
		function successCallback(response) {

			console.log(response);

		 	Object.keys(response.data).forEach((key)=>{
		 		response.data[key].fB_id = key;
		 		let x = new Date(response.data[key].videoPubDate)
		 		response.data[key].displayPubDate = x.toDateString();
		 		$scope.toWatchVideoList.push(response.data[key]);
		 	});

		 	console.log("full keys", $scope.toWatchVideoList)

		});



	$scope.sendToSelectedView = function (footballId) {

		console.log("should be videoId", footballId);

		
		// sendToSelectedView gets fired on click, now change the url which will change the view, which will fire that view's controller;

		// What we're doing is: throwing caughtVideoId (the id of the video the user clicked on) "over the fence", it goes into the URL, which can be accessed by the other controller

		$location.url('/selectedView/'+ footballId);
	};


	// Pass specific video to edit in FB from hasBeenWatched: false to hasBeenWatched: true

	$scope.passVidIdToEdit = function (footballEachVideo) {


		 var vidInfoToEditInFB = {
 			fB_id: footballEachVideo.fB_id,
			videoId: footballEachVideo.videoId,
			hasBeenWatched: 'true',
			videoImg: footballEachVideo.videoImg,
			videoPubDate: footballEachVideo.videoPubDate,
			videoTitle: footballEachVideo.videoTitle,
			videoDescription: footballEachVideo.videoDescription
		 };


		toWatchFactory.editItemSendToHaveWatched(vidInfoToEditInFB);

		// 
		console.log($scope.toWatchVideoList);
		let index = $scope.toWatchVideoList.indexOf(footballEachVideo);
		$scope.toWatchVideoList.splice(index, 1);
				

	}



	$scope.passVidIdToDelete = function(fB_idFootball,obj) {

		console.log(fB_idFootball);
		console.log("obj",obj)
		// This is where we are returning a promise (from factory)
		toWatchFactory.deleteItem(fB_idFootball)
		// Because we returned a promise, we can do a .then()
		.then( (editedResponse)=>{
			console.log(editedResponse);
		 	resolve(editedResponse);
		 	// getData();
		});
		 			console.log($scope.toWatchVideoList);
					let index = $scope.toWatchVideoList.indexOf(obj);
					$scope.toWatchVideoList.splice(index, 1);
				


	};




});