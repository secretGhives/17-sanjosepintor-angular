import * as route from './commercial-painting.route';
import './commercial-painting.scss';

const pageModule = angular.module('commercialPaintingPage', [
  'ui.router'
]);

pageModule.config(route);

export default pageModule;
