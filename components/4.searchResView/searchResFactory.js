myApp.factory('searchResFactory', function($http) {
	return{
		loadTedChannel : () => {
			return $http
			.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=tedtalk&type=video&key=AIzaSyDap7sGxUt14nvHxRuIekh-B5a0Y4h3A6M')
			
			.then((response) =>{
				return response;


				// Expecting response to be JSON
				console.log(response);
			})
			.catch((response)=>{

			 console.error(response)

			})
		}
 }


})