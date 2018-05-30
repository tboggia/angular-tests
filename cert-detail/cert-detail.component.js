
certDetail.component('certDetail', {
  // templateUrl: 'cert-detail/cert-detail.template.html',
  template: 'TBD: Detail view for <span>{{$ctrl.certId}}</span>',
  controller: [
    '$routeParams', 
    function CertDetailCOntroller($routeParams) {
      this.certId = $routeParams.certId;
    }
  ]
});