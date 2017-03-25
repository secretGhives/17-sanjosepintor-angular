import * as route from './faq.route';
import './faq.scss';

const pageModule = angular.module('faqPage', [
  'ui.router',
  'ngScrollSpy'
]);

pageModule.config(route);

export default pageModule;
