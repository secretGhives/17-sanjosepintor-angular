
function simpleAccordionDirective($compile, $timeout) {
	'ngInject';

	return {
		restrict: 'AEC',
		controller: ['$scope', function($scope) {
			$scope.current = null;
			$scope.height = [];
			$scope.zero = {
					height: 0
			};
			$scope.toggle = function(i) {
					$scope.current = $scope.current === i ? null : i;
			};
		}],
		scope: {},
		link: linkFn,
	};

	function linkFn(scope, el, attrs, fn) {
		var itemSelector = attrs.itemSelector || 'question',
				titleSelector = attrs.titleSelector || 'h2',
				contentSelector = attrs.contentSelector || 'div';
		$timeout(function(){
			var items = el[0].querySelectorAll(itemSelector);
			for (var i in items) {
				if (angular.isObject(items[i])) {
					var title = items[i].querySelectorAll(titleSelector)[0];
					var content = items[i].querySelectorAll(contentSelector)[0];
					// scope.height.push({
					// 	'height': (content.offsetHeight + 10) + 'px'
					// });
					angular.element(items[i]).addClass('item').attr({
						'ng-class': '{\'open\':current == ' + i + '}'
					});
					angular.element(title).addClass('title').attr('ng-click', 'toggle(' + i + ')');
					angular.element(content).addClass('content').attr({
						'ng-style': 'current == ' + i + '?height[' + i + ']:zero'
					}).attr('ng-click', 'toggle(' + i + ')');

				}
			}
			$compile(angular.element(el).contents())(scope);
		});
	}
}

export default simpleAccordionDirective;
