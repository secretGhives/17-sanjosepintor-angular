import componentTpl from './commercial-details.component.html';

let commercialDetailsComponent = {
  templateUrl: componentTpl,
  controller: CommercialDetailsController,
  bindings: {}
};

function CommercialDetailsController($scope, $log) {
  'ngInject';
  //$log.debug('Hello from' + 'CommercialDetails' + 'Controller (component)!');
}

export default commercialDetailsComponent;
