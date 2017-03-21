import componentTpl from './commercial.component.html';

let commercialComponent = {
  templateUrl: componentTpl,
  controller: CommercialController,
  bindings: {}
};

function CommercialController($scope, $log) {
  'ngInject';
  //$log.debug('Hello from' + 'Commercial' + 'Controller (component)!');
}

export default commercialComponent;
