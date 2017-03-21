import componentTpl from './residential-details.component.html';

let residentialDetailsComponent = {
  templateUrl: componentTpl,
  controller: ResidentialDetailsController,
  bindings: {}
};

function ResidentialDetailsController($scope, $log) {
  'ngInject';
  //$log.debug('Hello from' + 'ResidentialDetails' + 'Controller (component)!');
}

export default residentialDetailsComponent;
