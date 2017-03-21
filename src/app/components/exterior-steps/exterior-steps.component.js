import componentTpl from './exterior-steps.component.html';

let exteriorStepsComponent = {
  templateUrl: componentTpl,
  controller: ExteriorStepsController,
  bindings: {}
};

function ExteriorStepsController($scope, $log, store) {
  'ngInject';
  //$log.debug('Hello from' + 'ExteriorSteps' + 'Controller (component)!');
  $scope.company = store.company;
}

export default exteriorStepsComponent;
