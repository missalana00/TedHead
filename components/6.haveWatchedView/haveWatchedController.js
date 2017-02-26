
// Initial test to confirm correct routing

"use strict"

myApp.controller("haveWatchedController", function($scope, $http) {

console.log("I am the haveWatchedController!");


	$scope.haveWatchedVideoList = [];



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
		 		$scope.haveWatchedVideoList.push(response.data[key]);
		 	});

		 	console.log("full keys", $scope.haveWatchedVideoList)

		});


});