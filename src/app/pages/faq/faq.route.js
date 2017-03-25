import pageTpl from './faq.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('faq', {
      url: '/faq',
      templateUrl: pageTpl,
      controller: require('./faq.controller')
    });

}

export default routeConfig;
