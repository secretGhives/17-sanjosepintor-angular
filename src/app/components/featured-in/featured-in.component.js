import componentTpl from './featured-in.component.html';

let featuredInComponent = {
  templateUrl: componentTpl,
  controller: FeaturedInController,
  bindings: {}
};

function FeaturedInController($scope, $log) {
  'ngInject';
  //$log.debug('Hello from' + 'FeaturedIn' + 'Controller (component)!');
}

export default featuredInComponent;
