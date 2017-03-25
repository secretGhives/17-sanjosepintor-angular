import * as route from './home.route';
import './home.scss';

const pageModule = angular.module('homePage', [
  'ui.router'
]);

pageModule.config(route);

export default pageModule;
