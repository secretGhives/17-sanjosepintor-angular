import pageTpl from './about-us.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('about-us', {
      url: '/about-us',
      templateUrl: pageTpl,
      controller: require('./about-us.controller')
    });

}

export default routeConfig;
