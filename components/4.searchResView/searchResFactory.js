

// AngularJS makes it easy for devs to create their own services simply by registering the service. Once registered in the associated controller, the Angular compiler can reference it and load it as a dependency for runtime use.


// Angular module already created as var myApp in appConfig.js. Below, we're passing in the name of the Factory, and a function that takes the $http service.

// The $http service facilitates communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSON; it is a function that takes a single argument -- a configuration object -- that is used to generate an HTTP request and returns a promise.



myApp.factory('searchResFactory', function($http) {
	return{

		// We need to run this function in order to save a user's video to Firebase; to do that, we need to get the Firebase API key ... 
		saveVidToFB : () => { 

			// Declaring variable to hold Firebase API key
			var fbApiKey = '';


			// We now use a simple GET request that says "Hey! We wanna use this service (this $http service that is a function that returns a promise) to GET the information stored at the following url (In this case, we are trying to access the fbApiKey stored in a JSON file 

			$http({
			  method: 'GET',
			  url: '../shared/apiKeys.json'
			}).then(

				// First local API call (to get API key)
				function successCallback(response) {
			    fbApiKey = response.data.firebaseAPI;
			    console.log(fbApiKey);


			    ///////// HERE WE NEED TO SAVE TO FIREBASE - This is where we left 2/12/17 /////////

			    $http({
				  method: 'POST',
				  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCAuUUnT6oDeKwE6v1NGQxug&key=' + fbApiKey

				// Second call for calling the actual database with the API key (retrieved above)
				})
				.then(
					function successCallback(response) {
				    console.log('It worked!')

				  }, function errorCallback(response) {
				  	console.log(response);
				    // Called asynchronously if an error occurs
				    // or server returns response with an error status. GO OVER
				  });

			  }, function errorCallback(response) {
			  	console.log(response);
			    // Called asynchronously if an error occurs
			    // or server returns response with an error status. GO OVER
			  });

			
		}
 }


})