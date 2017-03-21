import componentTpl from './interior-steps.component.html';

let interiorStepsComponent = {
  templateUrl: componentTpl,
  controller: InteriorStepsController,
  bindings: {}
};

function InteriorStepsController($scope, $log, store) {
  'ngInject';
  //$log.debug('Hello from' + 'InteriorSteps' + 'Controller (component)!');
  $scope.company = store.company;
}

export default interiorStepsComponent;
