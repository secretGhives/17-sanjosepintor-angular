import pageTpl from './home.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: pageTpl,
      controller: require('./home.controller')
    });

}

export default routeConfig;
