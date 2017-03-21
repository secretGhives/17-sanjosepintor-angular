
function affixTopDirective($window) {
  'ngInject';

  var $win = angular.element($window);

  return {
    restrict: 'A',
    scope: {},
    link: linkFn
  };

  function linkFn(scope, elem, attrs, fn) {
    
    var topClass = attrs.affixTop, // get CSS class from directive's attribute value
        offsetTop = elem.prop('offsetTop'); // get element's top relative to the document
        //console.log(topClass);

    window.onscroll = function () {
      //console.log("hello");
      //console.log('top ' + offsetTop);
      //console.log(window.scrollY);

      if (window.scrollY >= offsetTop + 15) {
        elem.addClass(topClass);
      } else {
        elem.removeClass(topClass);
      }

      // any $scope variable updates
      scope.$digest();
    };

  }
}

export default affixTopDirective;
