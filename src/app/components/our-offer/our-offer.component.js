import componentTpl from './our-offer.component.html';

let ourOfferComponent = {
  templateUrl: componentTpl,
  controller: OurOfferController,
  bindings: {}
};

function OurOfferController($scope, $log) {
  'ngInject';
  //$log.debug('Hello from' + 'OurOffer' + 'Controller (component)!');
}

export default ourOfferComponent;
