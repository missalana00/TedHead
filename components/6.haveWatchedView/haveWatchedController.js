
// Initial test to confirm correct routing

"use strict"

myApp.controller("haveWatchedController", function($scope, $http, $route, toWatchFactory) {

// console.log("I am the haveWatchedController!");


	$scope.haveWatchedVideoList = [];



 	// THIS SHOULD BE IN A FACTORY - make this change after Demo Day //
function getData() {
	$http({
	  method: 'GET',

	  // Modify this url with the search string of catchTedInput 
	  url: 'https://tedhead-229a6.firebaseio.com/allVideos.json'
	})
	.then(
		function successCallback(response) {

			// console.log(response);

		 	Object.keys(response.data).forEach((key)=>{
		 		response.data[key].fB_id = key;
		 		$scope.haveWatchedVideoList.push(response.data[key]);
		 	});

		 	console.log("full keys", $scope.haveWatchedVideoList)

		});
}
getData();
	// This function is going to grab the fb_id (uid) and pass it to the delete factory (located in the toWatch factory)

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
		 	
					let index = $scope.haveWatchedVideoList.indexOf(obj);
					$scope.haveWatchedVideoList.splice(index, 1);
				
			





	};







});