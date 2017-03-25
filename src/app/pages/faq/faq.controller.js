function FaqController($scope, $log, store) {
  'ngInject';

  //$log.debug('Hello from FaqController!');
  $scope.phone = store.phone;
  $scope.email = store.email;
  $scope.company = store.company;

}

export default FaqController;
