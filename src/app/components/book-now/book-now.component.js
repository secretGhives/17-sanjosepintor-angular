import componentTpl from './book-now.component.html';

let bookNowComponent = {
  templateUrl: componentTpl,
  controller: BookNowController,
  bindings: {}
};

function BookNowController($scope, $log) {
  'ngInject';
  //$log.debug('Hello from' + 'BookNow' + 'Controller (component)!');
}

export default bookNowComponent;
