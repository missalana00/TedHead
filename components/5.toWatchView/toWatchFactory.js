"use strict";
myApp.factory("toWatchFactory", function($q, $http){



	//Firebase: send a new item to Firebase
	var postToWatchVideo = function(allVideoInfo){
		console.log(allVideoInfo);
		return $q((resolve, reject)=>{
			$http.post(`https://tedhead-229a6.firebaseio.com/allVideos.json`, JSON.stringify({
					// assignedTo: newItem.assignedTo,
					videoId: allVideoInfo.videoId,
					hasBeenWatched: allVideoInfo.hasBeenWatched,
					videoImg: allVideoInfo.videoImg,
					videoPubDate: allVideoInfo.videoPubDate,
					videoTitle: allVideoInfo.videoTitle,
					videoDescription: allVideoInfo.videoDescription
				})
			)
			 .then(function(results){
			 	console.log(results);
			 })
		});
	};


	return {postToWatchVideo:postToWatchVideo};
});