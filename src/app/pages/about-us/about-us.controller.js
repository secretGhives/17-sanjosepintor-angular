function AboutUsController($scope, $log, store, $translate, $rootScope) {
  'ngInject';

  //$log.debug('Hello from AboutUsController!');
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

export default AboutUsController;
