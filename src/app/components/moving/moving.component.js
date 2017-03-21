import componentTpl from './moving.component.html';

let movingComponent = {
  templateUrl: componentTpl,
  controller: MovingController,
  bindings: {}
};

function MovingController($scope, $log) {
  'ngInject';
  //$log.debug('Hello from' + 'Moving' + 'Controller (component)!');
}

export default movingComponent;
