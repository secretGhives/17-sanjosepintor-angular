import componentTpl from './about-intro.component.html';

let aboutIntroComponent = {
  templateUrl: componentTpl,
  controller: AboutIntroController,
  bindings: {}
};

function AboutIntroController($scope, $log, store) {
  'ngInject';
  //$log.debug('Header' + ' checking in');
  $scope.cities = store.cities;
  $scope.company = store.company;
}

export default aboutIntroComponent;
