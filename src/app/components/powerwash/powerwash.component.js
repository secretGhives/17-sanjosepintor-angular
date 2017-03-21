import componentTpl from './powerwash.component.html';

let powerwashComponent = {
  templateUrl: componentTpl,
  controller: PowerwashController,
  bindings: {}
};

function PowerwashController($scope, $log) {
  'ngInject';
  //$log.debug('Hello from' + 'Powerwash' + 'Controller (component)!');
}

export default powerwashComponent;
