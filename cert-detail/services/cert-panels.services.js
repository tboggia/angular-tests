app.factory('educationFactory', function($http){
	$http
		.get('https://voices.berkeley.edu/certs/education')
      	.then(function(response){
      		nother.certs = response.data.certs;
      	})
      	.catch(function(err){
      		console.log(err);
      	});
});