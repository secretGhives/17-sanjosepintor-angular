import * as route from './booking.route';
import './booking.scss';

const pageModule = angular.module('bookingPage', [
  'ui.router',
  'ngMap'
]);

pageModule.config(route);

export default pageModule;
