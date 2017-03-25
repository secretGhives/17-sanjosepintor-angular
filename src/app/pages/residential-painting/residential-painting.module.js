import * as route from './residential-painting.route';
import './residential-painting.scss';

const pageModule = angular.module('residentialPaintingPage', [
  'ui.router'
]);

pageModule.config(route);

export default pageModule;
