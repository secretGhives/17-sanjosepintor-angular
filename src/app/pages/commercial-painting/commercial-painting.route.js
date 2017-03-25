import pageTpl from './commercial-painting.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('commercial-painting', {
      url: '/commercial-painting',
      templateUrl: pageTpl,
      controller: require('./commercial-painting.controller')
    });

}

export default routeConfig;
