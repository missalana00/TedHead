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
			 });
		});
	};


// Editing an item in Firebase 
	var editItemSendToHaveWatched = function(videoInfoFootball){
		console.log("wht is this", videoInfoFootball)
		return $q((resolve, reject)=>{
			$http.put(`https://tedhead-229a6.firebaseio.com/allVideos/${videoInfoFootball.fB_id}.json`, 
				JSON.stringify({
					fB_id: videoInfoFootball.fB_id,
					videoId: videoInfoFootball.videoId,
					hasBeenWatched: 'true',
					videoImg: videoInfoFootball.videoImg,
					videoPubDate: videoInfoFootball.videoPubDate,
					videoTitle: videoInfoFootball.videoTitle,
					videoDescription: videoInfoFootball.videoDescription
				})
			)
			.then( (editedResponse)=>{
				console.log(editedResponse);
			 	resolve(editedResponse);
			});
		});
	};


	











	return {postToWatchVideo:postToWatchVideo,
			editItemSendToHaveWatched:editItemSendToHaveWatched
			};
});