myApp.factory('searchResFactory', function($http) {
	return{
		saveVidToFB : () => { 
			var fbApiKey = '';

			$http({
			  method: 'GET',
			  url: '../shared/apiKeys.json'
			}).then(
				// first local api call (to get api key)
				function successCallback(response) {
			    fbApiKey = response.data.firebaseAPI;
			    console.log(fbApiKey);


			    ///////// HERE WE NEED TO SAVE TO FIREBASE - This is where we left 2/12/17 /////////

			    $http({
				  method: 'POST',
				  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCAuUUnT6oDeKwE6v1NGQxug&key=' + fbApiKey
				// second call for calling the actual database with the api key (retrieved above)
				})
				.then(
					function successCallback(response) {
				    console.log('it worked')

				  }, function errorCallback(response) {
				  	console.log(response);
				    // called asynchronously if an error occurs
				    // or server returns response with an error status.
				  });

			  }, function errorCallback(response) {
			  	console.log(response);
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });

			
		}
 }


})