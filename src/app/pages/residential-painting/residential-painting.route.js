import pageTpl from './residential-painting.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('residential-painting', {
      url: '/residential-painting',
      templateUrl: pageTpl,
      controller: require('./residential-painting.controller')
    });

}

export default routeConfig;
