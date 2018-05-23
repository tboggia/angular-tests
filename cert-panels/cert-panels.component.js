
certsList.component('certsList', {
  templateUrl: 'cert-panels/cert-panels.template.html',
  controller: function notherCertController($http) {
    var nother = this;
    this.selectedAos = nother.aos ? nother.aos : 'all';
    $http.get('https://voices.berkeley.edu/certs/'+this.selectedAos)
      .then(function(response){
        nother.certs = response.data.certs;
      }).catch(function(err){console.log(err);});
    this.getCorrectData = function() {
      $http.get('https://voices.berkeley.edu/certs/'+this.selectedAos)
      .then(function(response){
        nother.certs = response.data.certs;
      }).catch(function(err){console.log(err);});
    };
  }

});