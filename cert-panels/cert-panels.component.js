
certsList.component('certsList', {
  templateUrl: 'cert-panels/cert-panels.template.html',
  controller: ['$http', 
    function notherCertController($http) {
      var self = this;
      this.selectedAos = self.aos ? self.aos : 'all';
      this.getCorrectData = function(aos) {
        this.selectedAos = aos ? aos : 'all';
        $http.get('https://voices.berkeley.edu/certs/'+this.selectedAos)
        .then(function(response){
          console.log('https://voices.berkeley.edu/certs/'+this.selectedAos);
          self.certs = response.data.certs;
          self.fiveCerts = response.data.certs.slice(0, 5);
        }).catch(function(err){console.log(err);});
      };

      $http.get('https://voices.berkeley.edu/certs/'+this.selectedAos)
        .then(function(response){
          self.certs = response.data.certs;
          self.fiveCerts = response.data.certs.slice(0, 5);
        }).catch(function(err){console.log(err);});
    }
  ]
});