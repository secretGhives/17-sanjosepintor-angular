
function translateLanguageSelectDirective(localeFactory) {
	'ngInject';

	return {
		restrict: 'A',
		scope: {},
		//replace: true,
		link: linkFn,
		template: `
		<md-select ng-if="visible" aria-label="Language selector"
			ng-model="currentLocaleDisplayName" 
			ng-change="changeLanguage(currentLocaleDisplayName)">
			<md-option ng-repeat="localesDisplayName in localesDisplayNames" ng-value="localesDisplayName" ng-disabled="$index > 1">
				{{localesDisplayName}}
			</md-option>
		</md-select>
		`
	};

	function linkFn($scope, elem, attrs, fn) {
		$scope.currentLocaleDisplayName = localeFactory.getLocaleDisplayName();
		$scope.localesDisplayNames = localeFactory.getLocalesDisplayNames();
		$scope.visible = $scope.localesDisplayNames &&
		$scope.localesDisplayNames.length > 1;

		$scope.changeLanguage = function (locale) {
			localeFactory.setLocaleByDisplayName(locale);
		};
	}
}

export default translateLanguageSelectDirective;