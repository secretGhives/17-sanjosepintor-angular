import componentTpl from './contact-us.component.html';

let contactUsComponent = {
  templateUrl: componentTpl,
  controller: ContactUsController,
  bindings: {}
};

function ContactUsController($scope, $log, store) {
  'ngInject';
  //$log.debug('Hello from' + 'ContactUs' + 'Controller (component)!');
  $scope.phone = store.phone;
  $scope.email = store.email;
  $scope.company = store.company;
}

export default contactUsComponent;
