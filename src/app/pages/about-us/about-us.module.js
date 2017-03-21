import * as route from './about-us.route';
import './about-us.scss';

const pageModule = angular.module('aboutUsPage', [
  'ui.router'
]);

pageModule.config(route);

export default pageModule;
