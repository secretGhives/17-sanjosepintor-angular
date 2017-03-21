
function scrollOnClickDirective() {
	'ngInject';

	return {
		restrict: 'A',
		scope: {},
		link: linkFn
	};

	function linkFn(scope, elem, attrs, fn) {
		var idToScroll = attrs.href;
		elem.on('click', function() {
			var $target;
			if (idToScroll) {
				$target = angular.element(idToScroll);
			} else {
				$target = elem;
			}
			angular.element("body").animate({scrollTop: $target.offset().top - 222}, "slow");
		});
	}
}

export default scrollOnClickDirective;
