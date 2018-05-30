certsList.controller('artAndDesignController', function certController($scope, $http){ 
  var self = this;
  this.something = 'something else';    
  $http.get('https://voices.berkeley.edu/certs/art-and-design')
      .then(function(response){
        self.certs = response.data.certs;
      console.log(response.data);
      }).catch(function(err){console.log(err);});
});