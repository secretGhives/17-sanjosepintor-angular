import pageTpl from './booking.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('booking', {
      url: '/booking',
      templateUrl: pageTpl,
      controller: require('./booking.controller'),
      controllerAs: 'booking'
    });

}

export default routeConfig;
