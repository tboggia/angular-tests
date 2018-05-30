pageApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/certs', {
          template: '<certs-list></certs-list>'
        }).
        when('/certs/:certId', {
          template: '<cert-detail></cert-detail>'
        }).
        otherwise('/certs');
    }
  ]);


//angular.module('certsApp').
