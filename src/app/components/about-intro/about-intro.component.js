import componentTpl from './about-intro.component.html';

let aboutIntroComponent = {
  templateUrl: componentTpl,
  controller: AboutIntroController,
  bindings: {}
};

function AboutIntroController($scope, $log, store, $translate, $rootScope) {
  'ngInject';
  //$log.debug('Header' + ' checking in');
  $scope.cities = store.cities;
  $scope.company = store.company;
  $scope.locale = $translate.use();

	/**
	 * EVENTS
	 */
	$rootScope.$on('$translateChangeSuccess', function (event, data) {
		$scope.locale = data.language;
		//$log.info($translate.use());
	});
}

export default aboutIntroComponent;
