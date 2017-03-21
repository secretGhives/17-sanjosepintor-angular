import componentTpl from './steps.component.html';

let stepsComponent = {
  templateUrl: componentTpl,
  controller: StepsController,
  bindings: {}
};

function StepsController($scope, $log) {
  'ngInject';
  //$log.debug('Hello from' + 'Steps' + 'Controller (component)!');
}

export default stepsComponent;
